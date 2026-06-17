"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface AboutProps {
  content: SiteContent["about"];
}

export default function About({ content }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="section" 
      ref={containerRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h2 
          className="display"
          style={{ 
            fontSize: "clamp(36px, 4vw, 56px)", 
            maxWidth: "700px", 
            lineHeight: "1.05",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />

        <div className="foundersGrid">
          {content.founders.map((founder, idx) => (
            <div 
              key={idx} 
              className="founderCard"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.2}s, transform 0.8s ease ${idx * 0.2}s`
              }}
            >
              <div className="fRole">{founder.role}</div>
              <div className="fName">{founder.name}</div>
              {founder.email && (
                <div style={{ fontSize: "12.5px", color: "var(--text-secondary)", marginBottom: "16px", marginTop: "-12px" }}>
                  <a href={`mailto:${founder.email}`} style={{ color: "var(--accent)" }} className="founderEmailLink">
                    {founder.email}
                  </a>
                </div>
              )}
              <div className="fDivider"></div>
              <p className="fBio">{founder.bio}</p>
              <div className="fSkills">
                {founder.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skillTag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="systemsStory"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s"
          }}
          dangerouslySetInnerHTML={{ __html: content.quoteHtml }}
        />
      </div>
    </section>
  );
}
