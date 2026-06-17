"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface ServicesProps {
  content: SiteContent["services"];
}

export default function Services({ content }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section" ref={sectionRef}>
      <div className="section-inner">
        <div className="servicesIntro">
          <div>
            <div className="eyebrow">{content.eyebrow}</div>
            <h2 
              className="display"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease"
              }}
              dangerouslySetInnerHTML={{ __html: content.headingHtml }}
            />
          </div>
          <p 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
            }}
          >
            {content.description}
          </p>
        </div>

        <div className="svcGrid">
          {content.cards.map((card, idx) => (
            <div 
              key={card.id} 
              className="svcCard"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.1}s, transform 0.8s ease ${idx * 0.1}s`
              }}
            >
              <div className="svcNum">{card.num}</div>
              <div className="svcTitle">{card.title}</div>
              <div className="svcItems">
                {card.items.map((item, sIdx) => (
                  <div key={sIdx} className="svcItem">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="industries"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s"
          }}
        >
          {content.industries.map((ind, idx) => (
            <div key={idx} className="indItem">
              <span className="indEmoji">{ind.emoji}</span> {ind.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
