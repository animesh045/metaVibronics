"use client";
import React from "react";
import { SiteContent } from "../data/siteContent";

interface FooterProps {
  branding: SiteContent["branding"];
  navigation: SiteContent["navigation"];
}

export default function Footer({ branding, navigation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">
        <a href="#home" className="footerLogo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/assets/work/logo.png" alt="Meta Vibronics Logo" style={{ height: "28px", width: "auto", display: "block" }} />
          <span>
            {branding.logoName.split(".")[0]}
            <span style={{ color: branding.logoDotColor }}>.</span>
            {branding.logoName.split(".")[1] || "VIBRONICS"}
          </span>
        </a>

        <div className="footerLinks">
          {navigation.links.map((link, idx) => (
            <a key={idx} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footerCopy">
          © {currentYear} {branding.logoName.split(".")[0]} {branding.logoName.split(".")[1] || "Vibronics"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
