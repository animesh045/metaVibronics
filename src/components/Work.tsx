"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent, Project } from "../data/siteContent";

interface WorkProps {
  content: SiteContent["work"];
}

export default function Work({ content }: WorkProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
            className="workIntroDesc"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
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
                  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
                  cursor: "pointer"
                }}
                onClick={() => setSelectedProject(project)}
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

      {/* Expandable Project Details Modal */}
      {selectedProject && (
        <div className="projectModalOverlay" onClick={() => setSelectedProject(null)}>
          <div className="projectModalContent glass" onClick={(e) => e.stopPropagation()}>
            <button className="projectModalClose" onClick={() => setSelectedProject(null)} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="projectModalBody">
              <div className="projectModalImage">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} />
              </div>
              
              <div className="projectModalDetails">
                <div style={{ marginBottom: "12px" }}>
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag tag-blue" style={{ marginRight: "8px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="projectModalClient">{selectedProject.client}</h3>
                <h4 className="projectModalTitle">{selectedProject.title}</h4>
                
                <div className="projectModalDivider"></div>
                
                <p className="projectModalBrief">{selectedProject.brief}</p>
                
                <div className="projectModalDeliverablesSection">
                  <h5>Scope & Deliverables</h5>
                  <ul>
                    {selectedProject.deliverables.map((del, idx) => (
                      <li key={idx}>{del}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.externalLink && (
                  <a 
                    href={selectedProject.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btnPrimary projectModalLink"
                  >
                    Visit Live Project ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
