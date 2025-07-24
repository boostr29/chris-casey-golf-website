import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GolfBallScene = () => {
  const mountRef = useRef(null);
  const golfBallRef = useRef(null);
  const isBouncing = useRef(true);
  const rendererRef = useRef(null);
  const hasSlidDown = useRef(false);
  const [isActive, setIsActive] = useState(false);
  const [aboutTop, setAboutTop] = useState(null);

  useEffect(() => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      setAboutTop(aboutElement.offsetTop);
    }
  }, []);

  useEffect(() => {
    if (aboutTop === null) return;

    const onScroll = () => {
      if (window.scrollY >= aboutTop + 250 && !isActive) {
        setIsActive(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isActive, aboutTop]);

  // Separate effect for smooth scroll anchor link handling
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  useEffect(() => {
    if (!isActive || aboutTop === null) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 10, 0);
    camera.lookAt(0, 0, 0);
    camera.up.set(0, 0, -1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(-3, 10, 2);
    directionalLight.target.position.set(3, 4, 9);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(2056, 2056);
    directionalLight.shadow.radius = 16;
    directionalLight.shadow.bias = -0.0001;

    const d = 25;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 3.5;
    directionalLight.shadow.camera.far = 20;
    scene.add(directionalLight.target);
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 4.4);
    rimLight.position.set(-1, 9, -1);
    scene.add(rimLight);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Load golf ball
    const loader = new GLTFLoader();
    loader.load("/GolfBall.glb", (gltf) => {
      const golfBall = gltf.scene;
      golfBall.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0.6;
          child.material.roughness = 0.1;
          child.material.color = new THREE.Color(0xffffff);
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      const scaleVal = window.innerWidth <= 768 ? 1.8 : 2;
      golfBall.scale.set(scaleVal, scaleVal, scaleVal);
      golfBall.position.y = 10; // Default position for larger screens
      scene.add(golfBall);
      golfBallRef.current = golfBall;

      // Bounce animation
      let positionY = 10;
      let velocity = 0.3;
      const gravity = 0.05;
      const bounceDecay = 0.8;
      let bounceCount = 0;
      const maxBounces = 36;
      const initialY = 10;

      // Compute base top position
      let baseTop = window.innerWidth <= 768 ? 10 : 0;
      if (mountRef.current) {
        mountRef.current.style.top = `${baseTop}%`;
      }

      const bounceAnim = () => {
        if (!golfBall || !mountRef.current) return;

        velocity -= gravity;
        positionY += velocity;

        if (positionY <= 0) {
          positionY = 0;
          velocity = -velocity * bounceDecay;
          bounceCount++;

          if (bounceCount >= maxBounces || Math.abs(velocity) < 0.1) {
            // 1) Lock the ball on the ground
            golfBall.position.y = 0;
            isBouncing.current = false;
            hasSlidDown.current = true;
            // Trigger handleScroll to set initial rolling position
            handleScroll();
            return;
          }
        }

        // set the ball's Y
        golfBall.position.y = positionY;

        golfBall.rotation.z -= 0.00;
        golfBall.rotation.x -= 0.04;
        golfBall.rotation.y -= 0.002;

        // ---- NEW: slide the container down as the ball falls ----
        // progress 0→1 as positionY goes 10→0
        let progress = (initialY - positionY) / initialY;
        progress = Math.max(0, Math.min(1, progress));
        let containerTop = baseTop + progress * 25;

        // Apply scroll adjustment even during bouncing
        const scrollTop = window.scrollY;
        const stopTrigger = Math.max(0, aboutTop - 100);
        if (scrollTop < stopTrigger) {
          const dist = stopTrigger - scrollTop;
          const addedTop = (dist / window.innerHeight) * 100;
          containerTop += addedTop;
        }
        mountRef.current.style.top = `${containerTop}%`;
        // ----------------------------------------------------------

        renderer.render(scene, camera);
        requestAnimationFrame(bounceAnim);
      };

      bounceAnim();
    });

    // Scroll handler
    const handleScroll = () => {
      if (!golfBallRef.current || isBouncing.current || !hasSlidDown.current || !mountRef.current) return;

      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const stopTrigger = Math.max(0, aboutTop - 100);

      let effectiveScrollTop = Math.max(scrollTop, stopTrigger);
      const effectivePercent = effectiveScrollTop / scrollHeight;

      const posX = 0;
      const posY = -effectivePercent * 0.5;

      const ball = golfBallRef.current;
      ball.position.set(posX, posY, 0);

      const deltaY = posY - (ball.lastY || 0);
      const deltaX = posX - (ball.lastX || 0);
      const ballRadius = 1;
      const speedFactor = 25.5;

      ball.rotation.x += -(deltaY / ballRadius) * speedFactor;
      ball.rotation.z += (deltaX / ballRadius) * speedFactor;

      ball.lastY = posY;
      ball.lastX = posX;

      // Adjust container top to push off screen when scrolling up past stop
      const baseTop = window.innerWidth <= 768 ? 10 : 0;
      let containerTop = baseTop + 25;
      if (scrollTop < stopTrigger) {
        const dist = stopTrigger - scrollTop;
        const addedTop = (dist / window.innerHeight) * 100;
        containerTop += addedTop;
      }
      mountRef.current.style.top = `${containerTop}%`;

      renderer.render(scene, camera);
    };

    window.addEventListener("scroll", handleScroll);

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const newBaseTop = window.innerWidth <= 768 ? 10 : 0;
      const initialY = 10;

      if (golfBallRef.current) {
        const scaleVal = window.innerWidth <= 768 ? 1.8 : 2;
        golfBallRef.current.scale.set(scaleVal, scaleVal, scaleVal);
      }

      if (isBouncing.current) {
        if (golfBallRef.current) {
          const currentPositionY = golfBallRef.current.position.y;
          const currentProgress = (initialY - currentPositionY) / initialY;
          let containerTop = newBaseTop + currentProgress * 25;
          const scrollTop = window.scrollY;
          const stopTrigger = Math.max(0, aboutTop - 100);
          if (scrollTop < stopTrigger) {
            const dist = stopTrigger - scrollTop;
            const addedTop = (dist / window.innerHeight) * 100;
            containerTop += addedTop;
          }
          mountRef.current.style.top = `${containerTop}%`;
        }
      } else {
        // Trigger handleScroll to update container top on resize
        handleScroll();
      }

      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (mountRef.current && rendererRef.current?.domElement) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }

      rendererRef.current = null;
      golfBallRef.current = null;
    };
  }, [isActive, aboutTop]);

  return (
    <div
      id="golfball-container"
      ref={mountRef}
      style={{
        position: "fixed",
        top: "0%",
        transition: "top 0.19s ease-out",
        left: -14,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default GolfBallScene;