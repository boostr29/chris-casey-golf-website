import { useState } from "react";

export default function NavSection() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-10001
        flex items-center justify-between
        px-6 py-4
        bg-transparent
        transition-colors duration-300 ease-in-out
        ${open ? "text-white" : "text-white/70 mix-blend-difference"}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex-shrink-0 z-1">
        <a href="#home" aria-label="Chris Casey Golf Instruction - Return to home">
          <img
            src="./images/chris-casey-golf-instruction-logo-web.png"
            alt="Chris Casey Golf Instruction logo - Professional golf lessons in Lake Forest CA"
            className="h-14 w-auto opacity-70"
          />
        </a>
      </div>

      {/* Desktop Menu (>=840px) */}
      <ul className="hidden [@media(min-width:840px)]:flex space-x-8 pr-2" role="menubar">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "services", label: "Services" },
          { id: "reviews", label: "Reviews" },
          { id: "contact", label: "Contact" }
        ].map((item) => (
          <li key={item.id} role="none">
            <a 
              href={`#${item.id}`} 
              className="hover:text-green-300/90 font-header transition duration-300 text-green-100/75 text-md"
              role="menuitem"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (<840px) */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="[@media(max-width:840px)]:block hidden focus:outline-none z-1"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        )}
      </button>

      {/* Mobile Overlay */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0
          bg-green-600/90
          flex flex-col items-center justify-center
          space-y-8
          [@media(min-width:840px)]:hidden
          transition-opacity duration-300 ease-in-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        role="menu"
        aria-hidden={!open}
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "services", label: "Services" },
          { id: "reviews", label: "Reviews" },
          { id: "contact", label: "Contact" }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-white text-xl hover:text-green-400 font-header transition duration-300"
            onClick={() => setOpen(false)}
            role="menuitem"
            aria-label={`Navigate to ${item.label} section`}
          >
            {item.label}
          </a>
        ))}
        
        {/* Phone CTA */}
        <a 
          href="tel:+1-631-704-4851" 
          className="contact-link"
          aria-label="Call or Text Chris Casey Golf Instruction at 631-704-4851"
        >
          <div className="rounded-full bg-amber-300 p-4 transition duration-300 hover:bg-white hover:text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <p className="pl-3 pr-4 whitespace-nowrap contact-text font-header">CALL NOW!</p>
        </a>
      </div>
    </nav>
  );
}