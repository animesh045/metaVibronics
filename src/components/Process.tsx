"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface ProcessProps {
  content: SiteContent["process"];
}

export default function Process({ content }: ProcessProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section" ref={containerRef}>
      <div className="section-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h2 
          className="display"
          style={{
            fontSize: "clamp(36px, 4vw, 52px)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />

        <div className="processGrid">
          {content.steps.map((step, idx) => (
            <div 
              key={idx} 
              className="processStep"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.12}s, transform 0.8s ease ${idx * 0.12}s`
              }}
            >
              <div className="stepNum">{step.num}</div>
              <div className="stepTitle">{step.title}</div>
              <div className="stepDesc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
