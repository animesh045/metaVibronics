"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface ResultsProps {
  content: SiteContent["results"];
}

export default function Results({ content }: ResultsProps) {
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
    <div className="resultsStrip" ref={containerRef}>
      <div className="section-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h2 
          className="display"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />

        <div className="statsGrid">
          {content.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="statBox"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.1}s, transform 0.8s ease ${idx * 0.1}s`
              }}
            >
              <div className={`statVal ${stat.highlighted ? "blue" : ""}`}>
                {stat.value}
              </div>
              <div className="statLabel">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
