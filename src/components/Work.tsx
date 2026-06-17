"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface WorkProps {
  content: SiteContent["work"];
}

export default function Work({ content }: WorkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="work" 
      className="section" 
      ref={sectionRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="workIntro">
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
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              textAlign: "right"
            }}
          >
            {content.description}
          </p>
        </div>

        <div className="workGrid">
          {content.projects.map((project, idx) => {
            const delay = (idx % 3) * 0.15;
            return (
              <div 
                key={project.id} 
                className={`workCard ${project.isFeatured ? "featured" : ""}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
                }}
              >
                <div className="workImg">
                  <img src={project.imageUrl} alt={project.title} />
                  <div className="workOverlay">
                    <span>View Project ↗</span>
                  </div>
                </div>
                
                <div className="workBody">
                  <div className="workTag">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`tag ${tIdx === 0 && project.isFeatured ? "tag-blue" : ""}`}
                        style={{ marginRight: "6px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="workClient">{project.client}</div>
                  <p className="workBrief">{project.brief}</p>
                  
                  <div className="workDeliverables">
                    <strong>Deliverables: </strong>
                    {project.deliverables.join(" · ")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
