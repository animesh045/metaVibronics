"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface OutcomesProps {
  content: SiteContent["outcomes"];
}

export default function Outcomes({ content }: OutcomesProps) {
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
    <div className="getsSection" ref={containerRef}>
      <div className="section-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h2 
          className="display"
          style={{
            fontSize: "clamp(32px, 3.5vw, 52px)",
            color: "var(--text-primary)",
            marginBottom: "0",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />

        <div className="getsGrid">
          {content.items.map((item, idx) => (
            <div 
              key={idx} 
              className="getItem"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.1}s, transform 0.8s ease ${idx * 0.1}s`
              }}
            >
              <div className="getNum">{item.num}</div>
              <div>
                <div className="getText">{item.title}</div>
                <div className="getSub">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
