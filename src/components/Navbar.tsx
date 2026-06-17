"use client";
import React, { useState, useEffect } from "react";
import { SiteContent } from "../data/siteContent";

interface NavbarProps {
  branding: SiteContent["branding"];
  navigation: SiteContent["navigation"];
}

export default function Navbar({ branding, navigation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light";
      return savedTheme === "light" ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    // Apply theme class list
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }

    // Detect scroll for header styling
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="navLogo" style={{ display: "flex", alignItems: "center" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "10px", display: "inline-block", verticalAlign: "middle" }}>
            <circle cx="16" cy="16" r="14" stroke="#00C2FF" strokeWidth="2.5" />
            <path d="M10 11L16 21L22 11" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="21" r="2.5" fill="#00C2FF" />
          </svg>
          <span style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.01em", textTransform: "none" }}>
            META<span style={{ color: "#00C2FF" }}>.</span>VIBRONICS
          </span>
        </a>

        <div className="navLinks">
          {navigation.links.map((link, idx) => (
            <a key={idx} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navActions">
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {branding.secondaryCtaText && (
            <a href={branding.secondaryCtaLink || "#"} className="navSecondaryCta">
              {branding.secondaryCtaText}
            </a>
          )}

          <a href="#contact" className="navCta">
            {navigation.ctaText}
          </a>

          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <span style={{ transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }}></span>
            <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }}></span>
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${mobileOpen ? "open" : ""}`}>
        {navigation.links.map((link, idx) => (
          <a key={idx} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          onClick={() => {
            toggleTheme();
            setMobileOpen(false);
          }}
          style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "15px", color: "var(--text-primary)", textAlign: "left", cursor: "pointer" }}
        >
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <a
          href="#contact"
          className="btnPrimary"
          onClick={() => setMobileOpen(false)}
          style={{ textAlign: "center", width: "100%", padding: "12px" }}
        >
          {navigation.ctaText}
        </a>
      </div>
    </>
  );
}
