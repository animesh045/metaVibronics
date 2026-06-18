"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface PricingProps {
  content: SiteContent["pricing"];
}

export default function Pricing({ content }: PricingProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="pricing" 
      className="section" 
      ref={containerRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="pricingHeader">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            {content.eyebrow}
          </div>
          
          <h2 
            className="display"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(25px)",
              transition: "opacity 0.8s ease, transform 0.8s ease"
            }}
            dangerouslySetInnerHTML={{ __html: content.headingHtml }}
          />
          
          <p>{content.description}</p>
          
          <div className="toggleWrap">
            <button 
              className={`toggleBtn ${currency === "INR" ? "active" : ""}`}
              onClick={() => setCurrency("INR")}
            >
              India (₹)
            </button>
            <button 
              className={`toggleBtn ${currency === "USD" ? "active" : ""}`}
              onClick={() => setCurrency("USD")}
            >
              International ($)
            </button>
          </div>
        </div>

        <div className="pricingGrid">
          {content.plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`planCard ${plan.isFeatured ? "featured" : ""}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(35px)",
                transition: `opacity 0.8s ease ${idx * 0.1}s, transform 0.8s ease ${idx * 0.1}s`
              }}
            >
              <div className="planName">{plan.name}</div>
              
              <div className="planPrice">
                {currency === "INR" ? plan.priceINR : plan.priceUSD}
              </div>
              
              <div className="planPeriod">
                {currency === "INR" ? `${plan.period} ` : `${plan.period} (USD)`}
              </div>
              
              <div className="planDivider"></div>
              
              <div className="planFeatures">
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="planFeature">
                    <span className="check">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              
              <a href="#contact" className="planBtn">
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p 
          className="pricingNote"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s"
          }}
        >
          {content.note}
        </p>
      </div>
    </section>
  );
}
