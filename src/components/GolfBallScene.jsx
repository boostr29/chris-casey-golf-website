import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GolfBallScene = () => {
  const mountRef = useRef(null);
  const golfBallRef = useRef(null);
  const rendererRef = useRef(null);
  const groundRef = useRef(null);
  const isBouncing = useRef(true);
  const hasSlidDown = useRef(false);
  const hasDroppedInHole = useRef(false);
  const isEarlyDropping = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const [aboutTop, setAboutTop] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const documentClickHandlerRef = useRef(null);

  // Detect mobile device and orientation
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileDevice = width <= 768;
      const isLandscape = width > height;
      
      // Hide golf ball on mobile landscape
      if (isMobileDevice && isLandscape) {
        setIsActive(false);
      } else if (!isMobileDevice || !isLandscape) {
        // Re-enable if not mobile landscape and past the about section
        const aboutEl = document.getElementById("about");
        if (aboutEl && window.scrollY >= aboutEl.offsetTop + 250) {
          setIsActive(true);
        }
      }
      
      setIsMobile(isMobileDevice);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1) Get "about" section offset
  useEffect(() => {
    const aboutEl = document.getElementById("about");
    if (aboutEl) setAboutTop(aboutEl.offsetTop);
  }, []);

  // 2) Activate when scrolled past aboutTop + 250
  useEffect(() => {
    if (aboutTop === null) return;
    const onScrollActivate = () => {
      if (window.scrollY >= aboutTop + 250 && !isActive) {
        setIsActive(true);
      }
    };
    window.addEventListener("scroll", onScrollActivate);
    return () => window.removeEventListener("scroll", onScrollActivate);
  }, [aboutTop, isActive]);

  // 3) Smooth scroll for anchors
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const smoothHandler = (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    anchors.forEach(a => a.addEventListener("click", smoothHandler));
    return () => anchors.forEach(a => a.removeEventListener("click", smoothHandler));
  }, []);

  // 4) Three.js setup
  useEffect(() => {
    if (!isActive || aboutTop === null) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Fixed FOV instead of 85
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    // Fixed camera position for consistent ball size
    camera.position.set(0, 8, 0); // Reduced from 10 to keep ball size more consistent
    camera.lookAt(0, 0, 0);
    camera.up.set(0, 0, -1);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.shadowMap.enabled = true; // Keep shadows enabled
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0); // Ensure transparent background
    
    // Set canvas to not block clicks by default
    renderer.domElement.style.pointerEvents = "none";

    const mount = mountRef.current;
    if (mount) mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Force canvas to not block clicks
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.position = "relative";
    renderer.domElement.style.zIndex = "-1";

    // Lights & ground
    scene.add(new THREE.AmbientLight(0xffffff, 2));
    const dir = new THREE.DirectionalLight(0xffffff, 3.5);
    dir.position.set(-3, 10, 2);
    dir.target.position.set(3, 4, 9);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.radius = 16;
    dir.shadow.bias = -0.0001;
    const d = 25;
    dir.shadow.camera.left = -d;
    dir.shadow.camera.right = d;
    dir.shadow.camera.top = d;
    dir.shadow.camera.bottom = -d;
    dir.shadow.camera.near = 3.5;
    dir.shadow.camera.far = 20;
    scene.add(dir.target);
    scene.add(dir);

    const rim = new THREE.DirectionalLight(0xffffff, 4.4);
    rim.position.set(-1, 9, -1);
    scene.add(rim);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    ground.receiveShadow = true;
    scene.add(ground);
    groundRef.current = ground;

    // Load ball & initial bounce
    new GLTFLoader().load("/GolfBall.glb", (gltf) => {
      const golfBall = gltf.scene;
      golfBall.traverse(child => {
        if (child.isMesh) {
          child.material.metalness = 0.6;
          child.material.roughness = 0.1;
          child.material.color = new THREE.Color(0xffffff);
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Scale to 1.2x for both mobile and desktop (reduced from 1.8)
      const scale = 1.2;
      golfBall.scale.set(scale, scale, scale);
      golfBall.position.y = 10;
      scene.add(golfBall);
      golfBallRef.current = golfBall;

      let positionY = 10;
      let velocity = 0.6;
      const gravity = 0.1;
      const bounceDecay = 0.8;
      let bounceCount = 0;
      const maxBounces = isMobile ? 15 : 36; // Fewer bounces on mobile
      const initialY = 10;
      const baseTop = 0;
      if (mount) mount.style.top = `${baseTop}%`;

      const bounceAnim = () => {
        if (hasDroppedInHole.current) return;
        velocity -= gravity;
        positionY += velocity;

        if (positionY <= 0) {
          positionY = 0;
          velocity = -velocity * bounceDecay;
          bounceCount++;
          if (bounceCount >= maxBounces || Math.abs(velocity) < 0.1) {
            isBouncing.current = false;
            hasSlidDown.current = true;
            onScroll();
            return;
          }
        }

        golfBall.position.y = positionY;
        golfBall.rotation.x -= 0.04;
        golfBall.rotation.y -= 0.002;

        let prog = (initialY - positionY) / initialY;
        prog = Math.max(0, Math.min(1, prog));
        let ct = baseTop + prog * 25;
        const st = window.scrollY;
        const stop = Math.max(0, aboutTop - 100);
        if (st < stop) ct += ((stop - st) / window.innerHeight) * 100;
        if (mount) mount.style.top = `${ct}%`;

        renderer.render(scene, camera);
        requestAnimationFrame(bounceAnim);
      };
      bounceAnim();
    });

    // No need for mount click listener anymore - we use document clicks

    // Drop & bounce in hole
    const dropIntoHole = () => {
      if (hasDroppedInHole.current || !golfBallRef.current) return;
      hasDroppedInHole.current = true;

      // console.log("Ball dropping into hole!");

      const ball = golfBallRef.current;
      const startY = ball.position.y;
      
      // ANIMATION PARAMETERS - MODIFY THESE
      const sinkDepth = 3.5;      // How deep the ball sinks (higher = deeper) - increased from 2
      const sinkFrames = 5;      // Duration of sinking animation (higher = slower)
      const bounceFrames = 8;    // Duration of bounce up/down (higher = slower)
      const bounceHeight = 0.9;   // How high the ball bounces (higher = bigger bounce)
      
      const sinkStep = (startY - (startY - sinkDepth)) / sinkFrames;
      let frame = 0;

      const sinkAnim = () => {
        if (frame < sinkFrames) {
          ball.position.y -= sinkStep;
          rendererRef.current.render(scene, camera);
          frame++;
          requestAnimationFrame(sinkAnim);
        } else {
          frame = 0;
          bounceUp();
        }
      };

      const bounceUp = () => {
        if (frame < bounceFrames) {
          ball.position.y += bounceHeight / bounceFrames;
          rendererRef.current.render(scene, camera);
          frame++;
          requestAnimationFrame(bounceUp);
        } else {
          frame = 0;
          bounceDown();
        }
      };

      const bounceDown = () => {
        if (frame < bounceFrames) {
          ball.position.y -= bounceHeight / bounceFrames;
          rendererRef.current.render(scene, camera);
          frame++;
          requestAnimationFrame(bounceDown);
        } else {
          // Lower the ground plane when ball is in hole
          if (groundRef.current) {
            // SHADOW PLANE OFFSET - Adjust this value
            const GROUND_LOWER_OFFSET = 0.8; // How much to lower the ground plane
            groundRef.current.position.y = -1.2 - GROUND_LOWER_OFFSET;
          }
          
          // After animation, position the mount at the hole location
          positionBallAtHole();
          
          // After animation completes - DON'T enable pointer events
          // Instead, add a global click listener
          if (mount) {
            mount.style.cursor = "default";
            // Keep pointer events disabled
            mount.style.pointerEvents = "none";
            if (renderer.domElement) {
              renderer.domElement.style.pointerEvents = "none";
            }
          }
          
          // Add a document-level click listener for the hole area
          const handleDocumentClick = (event) => {
            if (!hasDroppedInHole.current) {
              document.removeEventListener('click', handleDocumentClick);
              return;
            }
            
            const holeElement = document.getElementById("hole");
            if (!holeElement) return;
            
            const holeRect = holeElement.getBoundingClientRect();
            const clickX = event.clientX;
            const clickY = event.clientY;
            
            // Check if click is within the hole bounds
            const padding = 50;
            const isWithinBounds = 
              clickX >= (holeRect.left - padding) &&
              clickX <= (holeRect.right + padding) &&
              clickY >= (holeRect.top - padding) &&
              clickY <= (holeRect.bottom + padding);
            
            if (isWithinBounds) {
              document.removeEventListener('click', handleDocumentClick);
              handleMountClick(event);
            }
          };
          
          // Store the handler so we can remove it in cleanup
          documentClickHandlerRef.current = handleDocumentClick;
          
          // Add the listener after a short delay to avoid immediate triggering
          setTimeout(() => {
            document.addEventListener('click', handleDocumentClick);
          }, 100);
        }
      };

      sinkAnim();
    };

    // Early drop animation (before reaching the actual bottom)
    const startEarlyDrop = () => {
      if (hasDroppedInHole.current || !golfBallRef.current || isEarlyDropping.current) return;
      
      isEarlyDropping.current = true; // Set flag to prevent multiple drops
      const ball = golfBallRef.current;
      const dropDuration = 15; // Frames for the early drop
      let dropFrame = 0;
      
      const earlyDropAnim = () => {
        if (dropFrame < dropDuration && !hasDroppedInHole.current) {
          // Gradually drop the ball
          ball.position.y -= 0.03;
          
          // Continue normal scrolling position update
          const st = window.scrollY;
          const stop = Math.max(0, aboutTop - 100);
          let ct = 25;
          if (st < stop) ct += ((stop - st) / window.innerHeight) * 100;
          if (mount) mount.style.top = `${ct}%`;
          
          rendererRef.current.render(scene, camera);
          dropFrame++;
          
          // Check if we've reached the actual bottom during early drop
          const full = document.body.scrollHeight - window.innerHeight;
          if (st >= full - 10) {
            isEarlyDropping.current = false; // Reset before dropping in hole
            dropIntoHole();
            return;
          }
          
          requestAnimationFrame(earlyDropAnim);
        } else {
          // Reset the flag after animation completes
          isEarlyDropping.current = false;
        }
      };
      
      earlyDropAnim();
    };

    // Function to position ball at hole with mobile adjustments
    const positionBallAtHole = () => {
      const holeElement = document.getElementById("hole");
      if (holeElement && mount && rendererRef.current) {
        const holeRect = holeElement.getBoundingClientRect();
        
        // Y offset in pixels (positive moves down, negative moves up)
        const Y_OFFSET_PX = 0; // Adjust this value as needed
        
        // Position the mount directly at the hole's center
        const holeCenterX = holeRect.left + (holeRect.width / 2);
        const holeCenterY = holeRect.top + (holeRect.height / 2) + Y_OFFSET_PX;
        
        // Use viewport units for better mobile support
        const vw = window.innerWidth / 100;
        const vh = window.innerHeight / 100;
        
        // Convert to viewport units
        const leftVW = holeCenterX / vw;
        const topVH = holeCenterY / vh;
        
        // Apply position
        mount.style.position = 'fixed';
        mount.style.left = `${leftVW}vw`;
        mount.style.top = `${topVH}vh`;
        mount.style.transform = 'translate(-50%, -50%)'; // Center the mount on the coordinates
        mount.style.transition = 'none'; // Remove transition for instant positioning
        
        // Ensure the renderer maintains proper size
        if (rendererRef.current && scene && camera) {
          rendererRef.current.render(scene, camera);
        }
        
        // console.log(`Ball positioned at hole: ${leftVW}vw, ${topVH}vh (Y offset: ${Y_OFFSET_PX}px)`);
      }
    };

    // Click handler to pop ball out
    const handleMountClick = (event) => {
      if (!hasDroppedInHole.current || !golfBallRef.current) return;
      
      // Get the hole element position
      const holeElement = document.getElementById("hole");
      if (!holeElement) return;
      
      const holeRect = holeElement.getBoundingClientRect();
      const clickX = event.clientX;
      const clickY = event.clientY;
      
      // Check if click is within the hole element's bounds (with some padding)
      const padding = 50; // Add some padding around the hole image
      const isWithinBounds = 
        clickX >= (holeRect.left - padding) &&
        clickX <= (holeRect.right + padding) &&
        clickY >= (holeRect.top - padding) &&
        clickY <= (holeRect.bottom + padding);
      
      // Only trigger if clicked within the hole bounds
      if (!isWithinBounds) return;
      
      // Reset states
      hasDroppedInHole.current = false;
      isEarlyDropping.current = false; // Reset early dropping flag
      const ball = golfBallRef.current;
      
      // Disable clicking
      if (mount) {
        mount.style.pointerEvents = "none";
        mount.style.cursor = "default";
        // Also disable pointer events on the canvas
        if (renderer.domElement) {
          renderer.domElement.style.pointerEvents = "none";
        }
      }
      
      // Reset ground
      if (groundRef.current) {
        groundRef.current.position.y = -1.2;
      }
      
      // IMMEDIATELY reset mount to normal positioning (before animation)
      mount.style.position = 'fixed';
      mount.style.left = '0%';
      mount.style.top = '25%';
      mount.style.transform = 'none';
      mount.style.transition = 'none'; // No transition during animation
      
      // Calculate scroll position for 150px up
      const currentScroll = window.scrollY;
      const scrollUpAmount = 320;
      const targetScroll = Math.max(0, currentScroll - scrollUpAmount);
      
      // Pop animation
      let popFrame = 0;
      const popDuration = 30;
      const startY = ball.position.y;
      
      const popAnim = () => {
        if (popFrame < popDuration) {
          const progress = popFrame / popDuration;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          // Calculate target position based on new scroll
          const full = document.body.scrollHeight - window.innerHeight;
          const stop = Math.max(0, aboutTop - 100);
          const eff = Math.max(targetScroll, stop) / full;
          const targetY = -eff * 0.8;
          
          // Add bounce effect
          const bounce = Math.sin(progress * Math.PI) * 2;
          ball.position.y = startY + (targetY - startY) * easeOut + bounce;
          
          // Rotate ball
          ball.rotation.x -= 0.15;
          
          renderer.render(scene, camera);
          popFrame++;
          requestAnimationFrame(popAnim);
        } else {
          // Re-enable transition after animation
          mount.style.transition = 'top 0.19s ease-out';
          
          // Re-enable scrolling
          hasSlidDown.current = true;
          
          // Set ball position for new scroll
          const full = document.body.scrollHeight - window.innerHeight;
          const stop = Math.max(0, aboutTop - 100);
          const eff = Math.max(targetScroll, stop) / full;
          ball.position.y = -eff * 0.8;
          ball.lastY = ball.position.y;
          
          // Scroll page up
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }
      };
      
      popAnim();
    };

    // No need for mount click listener anymore - we use document clicks

    // Throttle function for mobile performance
    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    };

    // Prevent scrolling to bottom when ball is in hole
    const preventBottomScroll = (e) => {
      if (!hasDroppedInHole.current) return;
      
      const full = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Only prevent if scrolling DOWN (deltaY > 0) AND already at or past the limit
      if (e && e.deltaY > 0 && currentScroll >= full - 30) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo({
          top: full - 30,
          behavior: 'instant'
        });
      } else if (!e && currentScroll > full - 30) {
        // For non-wheel events, just clamp the position
        window.scrollTo({
          top: full - 30,
          behavior: 'instant'
        });
      }
    };

    // Scroll & roll - throttled on mobile
    const onScroll = () => {
      const st = window.scrollY;
      const full = document.body.scrollHeight - window.innerHeight;
      
      // If ball has dropped in hole, prevent scrolling to the very bottom
      if (hasDroppedInHole.current) {
        positionBallAtHole();
        preventBottomScroll();
        return;
      }

      // If still bouncing, don't handle scroll
      if (isBouncing.current || !hasSlidDown.current) return;
      
      // EARLY DROP OFFSET - Adjust this value
      const EARLY_DROP_OFFSET_PX = 60; // How many pixels before bottom to start dropping
      
      // Check if we should start early drop
      if (st >= full - EARLY_DROP_OFFSET_PX && !hasDroppedInHole.current) {
        startEarlyDrop();
        return;
      }
      
      // Check if we've reached the actual bottom
      if (st >= full - 10) { // Small buffer for mobile
        dropIntoHole();
        return;
      }

      // Normal scroll behavior before reaching bottom
      const stop = Math.max(0, aboutTop - 100);
      const eff = Math.max(st, stop) / full;
      const posY = -eff * 0.8; //lowers the ball on z axis as the user scrolls down - up when the user scrolls up
      const ball = golfBallRef.current;
      const dy = posY - (ball.lastY || 0);
      ball.position.set(0, posY, ball.position.z);
      ball.rotation.x += -(dy / 1) * 55.5; //faster rotation of golf ball?
      ball.lastY = posY;

      let ct = 25;
      if (st < stop) ct += ((stop - st) / window.innerHeight) * 100;
      if (mount) mount.style.top = `${ct}%`;

      renderer.render(scene, camera);
    };

    // Use throttled scroll on mobile
    const scrollHandler = isMobile ? throttle(onScroll, 16) : onScroll;
    window.addEventListener("scroll", scrollHandler, { passive: true });
    
    // Add wheel event listener to catch fast scrolling
    window.addEventListener("wheel", preventBottomScroll, { passive: false });

    // Resize with debounce for mobile
    let resizeTimeout;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!rendererRef.current || !camera) return;
        
        try {
          // Check if we should hide on mobile landscape
          const width = window.innerWidth;
          const height = window.innerHeight;
          const isMobileDevice = width <= 768;
          const isLandscape = width > height;
          
          if (isMobileDevice && isLandscape) {
            return; // Don't render on mobile landscape
          }
          
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          rendererRef.current.setSize(window.innerWidth, window.innerHeight);
          rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          
          // If ball is in hole, ensure it stays positioned correctly
          if (hasDroppedInHole.current) {
            // Reset ball position to ensure it's in the right place (deeper in hole)
            if (golfBallRef.current) {
              golfBallRef.current.position.set(0, -1.5, 0); // Deeper position
            }
            positionBallAtHole();
          } else if (scene && camera) {
            // Only render if we have a valid scene and camera
            rendererRef.current.render(scene, camera);
          }
        } catch (error) {
          console.error("Error during resize:", error);
        }
      }, 100);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("wheel", preventBottomScroll);
      window.removeEventListener("resize", onResize);
      // Remove any lingering document click listeners
      if (documentClickHandlerRef.current) {
        document.removeEventListener('click', documentClickHandlerRef.current);
        documentClickHandlerRef.current = null;
      }
      if (rendererRef.current && mountRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current.contains(rendererRef.current.domElement)) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, [isActive, aboutTop, isMobile]);

  return (
    <div
      id="golfball-container"
      ref={mountRef}
      style={{
        position: "fixed",
        top: "0%",
        left: "0%",
        transition: "top 0.19s ease-out",
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default GolfBallScene;