"use client";
import React from "react";
import { SiteContent } from "../data/siteContent";

interface HeroProps {
  content: SiteContent["hero"];
  branding: SiteContent["branding"];
}

export default function Hero({ content, branding }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="heroLeft">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h1 
          className="display"
          dangerouslySetInnerHTML={{ __html: content.titleHtml }}
        />
        
        <p className="sub">{content.subtitle}</p>
        
        <div className="heroBtns">
          <a href="#work" className="btnPrimary">See Our Work</a>
          <a href="#contact" className="btnSecondary">Start a Project</a>
        </div>
        
        <div className="heroStats">
          {content.stats.map((stat, idx) => (
            <div key={idx}>
              <div className={`heroStatVal ${stat.highlighted ? "blue" : ""}`}>
                {stat.value}
              </div>
              <div className="heroStatLabel">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="heroRight">
        <div>
          <div className="label">What we do</div>
          <div className="pillarList">
            {content.pillars.map((pillar, idx) => (
              <div key={idx} className="pillarItem">
                <div className="pillarName">{pillar.name}</div>
                <div className="pillarSub">{pillar.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="heroContact">
          {branding.email}
          <br />
          {branding.phone}
          <br />
          {branding.instagram}
        </div>
      </div>
    </section>
  );
}
