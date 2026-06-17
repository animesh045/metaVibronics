"use client";
import React, { useState } from "react";
import { SiteContent, Project } from "../data/siteContent";

interface CustomizerProps {
  content: SiteContent;
  onChange: (updated: SiteContent) => void;
}

export default function Customizer({ content, onChange }: CustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "founders" | "projects" | "pricing">("general");

  // State for new project form
  const [newProjectClient, setNewProjectClient] = useState("");
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectBrief, setNewProjectBrief] = useState("");
  const [newProjectImage, setNewProjectImage] = useState("/assets/work/fourthx.jpg");
  const [newProjectLink, setNewProjectLink] = useState("");
  const [newProjectTags, setNewProjectTags] = useState("");
  const [newProjectDelivs, setNewProjectDelivs] = useState("");

  const updateBranding = (field: keyof SiteContent["branding"], value: string) => {
    onChange({
      ...content,
      branding: {
        ...content.branding,
        [field]: value,
      },
    });
  };

  const updateHero = <K extends keyof SiteContent["hero"]>(field: K, value: SiteContent["hero"][K]) => {
    onChange({
      ...content,
      hero: {
        ...content.hero,
        [field]: value,
      },
    });
  };

  const updateFounder = (index: number, field: string, value: string | string[]) => {
    const updatedFounders = [...content.about.founders];
    updatedFounders[index] = {
      ...updatedFounders[index],
      [field]: value,
    };
    onChange({
      ...content,
      about: {
        ...content.about,
        founders: updatedFounders,
      },
    });
  };

  const updateProject = <K extends keyof Project>(index: number, field: K, value: Project[K]) => {
    const updatedProjects = [...content.work.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    onChange({
      ...content,
      work: {
        ...content.work,
        projects: updatedProjects,
      },
    });
  };

  const deleteProject = (index: number) => {
    const updatedProjects = content.work.projects.filter((_, idx) => idx !== index);
    onChange({
      ...content,
      work: {
        ...content.work,
        projects: updatedProjects,
      },
    });
  };

  const addProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectClient || !newProjectTitle) return;

    const newProject: Project = {
      id: `project-${Date.now()}`,
      client: newProjectClient,
      title: newProjectTitle,
      brief: newProjectBrief,
      imageUrl: newProjectImage || "/assets/work/fourthx.jpg",
      externalLink: newProjectLink || undefined,
      tags: newProjectTags ? newProjectTags.split(",").map(t => t.trim()) : ["General"],
      deliverables: newProjectDelivs ? newProjectDelivs.split(",").map(d => d.trim()) : ["Creative Design"],
    };

    onChange({
      ...content,
      work: {
        ...content.work,
        projects: [...content.work.projects, newProject],
      },
    });

    // Reset fields
    setNewProjectClient("");
    setNewProjectTitle("");
    setNewProjectBrief("");
    setNewProjectImage("/assets/work/fourthx.jpg");
    setNewProjectLink("");
    setNewProjectTags("");
    setNewProjectDelivs("");
  };

  const updatePlan = (index: number, field: "priceINR" | "priceUSD" | "name", value: string) => {
    const updatedPlans = [...content.pricing.plans];
    updatedPlans[index] = {
      ...updatedPlans[index],
      [field]: value,
    };
    onChange({
      ...content,
      pricing: {
        ...content.pricing,
        plans: updatedPlans,
      },
    });
  };

  const exportConfig = () => {
    const fileContent = `export interface Founder {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  email: string;
}

export interface ServiceCard {
  id: string;
  num: string;
  title: string;
  items: string[];
}

export interface IndustryItem {
  emoji: string;
  name: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  brief: string;
  deliverables: string[];
  tags: string[];
  isFeatured?: boolean;
  imageUrl: string;
  externalLink?: string;
}

export interface StatItem {
  value: string;
  label: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface PricingPlan {
  name: string;
  priceINR: string;
  priceUSD: string;
  period: string;
  isFeatured?: boolean;
  features: string[];
}

export interface SiteContent {
  branding: {
    logoName: string;
    logoDotColor: string;
    email: string;
    phone: string;
    instagram: string;
    responseHours: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  };
  navigation: {
    links: { label: string; href: string }[];
    ctaText: string;
  };
  hero: {
    eyebrow: string;
    titleHtml: string;
    subtitle: string;
    stats: StatItem[];
    pillars: { name: string; description: string }[];
  };
  about: {
    eyebrow: string;
    headingHtml: string;
    founders: Founder[];
    quoteHtml: string;
  };
  services: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    cards: ServiceCard[];
    industries: IndustryItem[];
  };
  work: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    projects: Project[];
  };
  results: {
    eyebrow: string;
    headingHtml: string;
    stats: StatItem[];
  };
  outcomes: {
    eyebrow: string;
    headingHtml: string;
    items: { num: string; title: string; desc: string }[];
  };
  process: {
    eyebrow: string;
    headingHtml: string;
    steps: ProcessStep[];
  };
  pricing: {
    eyebrow: string;
    headingHtml: string;
    description: string;
    plans: PricingPlan[];
    note: string;
  };
  contact: {
    eyebrow: string;
    headingHtml: string;
    subheading: string;
    description: string;
    fields: { label: string; type: string; placeholder: string; required?: boolean }[];
  };
}

export const defaultSiteContent: SiteContent = ${JSON.stringify(content, null, 2)};
`;

    const blob = new Blob([fileContent], { type: "text/typescript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "siteContent.ts";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Toggle button in corner */}
      <button 
        className={`customizerToggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Live Visual Editor"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        )}
      </button>

      {/* Editor Drawer Panel */}
      <div className={`customizerPanel ${isOpen ? "open" : ""}`}>
        <div className="customizerHeader">
          <h3>Live Editor Panel</h3>
          <button className="customizerExportBtn" onClick={exportConfig}>
            Export TS Config
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid var(--border-color)", background: "var(--bg-secondary)", flexWrap: "wrap" }}>
          <button 
            style={{ 
              flex: "1 1 50%", padding: "10px", fontSize: "10px", fontWeight: "700", 
              textTransform: "uppercase", color: activeTab === "general" ? "var(--accent)" : "var(--text-secondary)",
              borderBottom: activeTab === "general" ? "2px solid var(--accent)" : "none"
            }}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button 
            style={{ 
              flex: "1 1 50%", padding: "10px", fontSize: "10px", fontWeight: "700", 
              textTransform: "uppercase", color: activeTab === "founders" ? "var(--accent)" : "var(--text-secondary)",
              borderBottom: activeTab === "founders" ? "2px solid var(--accent)" : "none"
            }}
            onClick={() => setActiveTab("founders")}
          >
            Founders
          </button>
          <button 
            style={{ 
              flex: "1 1 50%", padding: "10px", fontSize: "10px", fontWeight: "700", 
              textTransform: "uppercase", color: activeTab === "projects" ? "var(--accent)" : "var(--text-secondary)",
              borderBottom: activeTab === "projects" ? "2px solid var(--accent)" : "none"
            }}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button 
            style={{ 
              flex: "1 1 50%", padding: "10px", fontSize: "10px", fontWeight: "700", 
              textTransform: "uppercase", color: activeTab === "pricing" ? "var(--accent)" : "var(--text-secondary)",
              borderBottom: activeTab === "pricing" ? "2px solid var(--accent)" : "none"
            }}
            onClick={() => setActiveTab("pricing")}
          >
            Pricing
          </button>
        </div>

        <div className="customizerBody">
          {activeTab === "general" && (
            <div className="customizerSection">
              <h4>Branding Details</h4>
              <div className="customizerInputGroup">
                <label>Logo Text</label>
                <input 
                  type="text" 
                  value={content.branding.logoName} 
                  onChange={(e) => updateBranding("logoName", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Studio General Email</label>
                <input 
                  type="email" 
                  value={content.branding.email} 
                  onChange={(e) => updateBranding("email", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Phone Number</label>
                <input 
                  type="text" 
                  value={content.branding.phone} 
                  onChange={(e) => updateBranding("phone", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Instagram Handle</label>
                <input 
                  type="text" 
                  value={content.branding.instagram} 
                  onChange={(e) => updateBranding("instagram", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Secondary CTA Label (Outlined Button)</label>
                <input 
                  type="text" 
                  value={content.branding.secondaryCtaText || ""} 
                  onChange={(e) => updateBranding("secondaryCtaText", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Secondary CTA Link</label>
                <input 
                  type="text" 
                  value={content.branding.secondaryCtaLink || ""} 
                  onChange={(e) => updateBranding("secondaryCtaLink", e.target.value)}
                />
              </div>

              <h4 style={{ marginTop: "24px" }}>Hero Copy</h4>
              <div className="customizerInputGroup">
                <label>Eyebrow</label>
                <input 
                  type="text" 
                  value={content.hero.eyebrow} 
                  onChange={(e) => updateHero("eyebrow", e.target.value)}
                />
              </div>
              <div className="customizerInputGroup">
                <label>Hero Title (HTML)</label>
                <textarea 
                  value={content.hero.titleHtml} 
                  onChange={(e) => updateHero("titleHtml", e.target.value)}
                  rows={3}
                />
                <span className="customizerHelpText">Supports &lt;br&gt; and &lt;em&gt; tags.</span>
              </div>
              <div className="customizerInputGroup">
                <label>Hero Subtitle</label>
                <textarea 
                  value={content.hero.subtitle} 
                  onChange={(e) => updateHero("subtitle", e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}

          {activeTab === "founders" && (
            <div className="customizerSection">
              {content.about.founders.map((founder, idx) => (
                <div key={idx} style={{ marginBottom: "28px", borderBottom: idx === 0 ? "1px solid var(--border-color)" : "none", paddingBottom: idx === 0 ? "20px" : "0" }}>
                  <h4>Founder {idx + 1}: {founder.name}</h4>
                  <div className="customizerInputGroup">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      value={founder.name} 
                      onChange={(e) => updateFounder(idx, "name", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Professional Role</label>
                    <input 
                      type="text" 
                      value={founder.role} 
                      onChange={(e) => updateFounder(idx, "role", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Founder Direct Email</label>
                    <input 
                      type="email" 
                      value={founder.email || ""} 
                      onChange={(e) => updateFounder(idx, "email", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Biography</label>
                    <textarea 
                      value={founder.bio} 
                      onChange={(e) => updateFounder(idx, "bio", e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Skills (comma separated)</label>
                    <input 
                      type="text" 
                      value={founder.skills.join(", ")} 
                      onChange={(e) => updateFounder(idx, "skills", e.target.value.split(",").map(s => s.trim()))}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <div className="customizerSection">
              <h4>Manage Current Projects</h4>
              {content.work.projects.map((project, idx) => (
                <div key={project.id} style={{ padding: "12px", border: "1px solid var(--border-color)", borderRadius: "6px", marginBottom: "16px", background: "var(--bg-secondary)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <strong style={{ fontSize: "13px" }}>{project.client}</strong>
                    <button 
                      onClick={() => deleteProject(idx)}
                      style={{ fontSize: "11px", color: "#ef4444", fontWeight: "600", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="customizerInputGroup">
                    <label>Project Title / Name</label>
                    <input 
                      type="text" 
                      value={project.title} 
                      onChange={(e) => updateProject(idx, "title", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Project Image path / URL</label>
                    <input 
                      type="text" 
                      value={project.imageUrl} 
                      onChange={(e) => updateProject(idx, "imageUrl", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>External project link</label>
                    <input 
                      type="text" 
                      value={project.externalLink || ""} 
                      placeholder="https://example.com/project"
                      onChange={(e) => updateProject(idx, "externalLink", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Brief Description</label>
                    <textarea 
                      value={project.brief} 
                      onChange={(e) => updateProject(idx, "brief", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              ))}

              <h4 style={{ marginTop: "32px", borderTop: "1px solid var(--border-color)", paddingTop: "20px" }}>
                Add New Project
              </h4>
              <form onSubmit={addProject} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="customizerInputGroup">
                  <label>Client Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. BioAro Supplement" 
                    value={newProjectClient}
                    onChange={(e) => setNewProjectClient(e.target.value)}
                    required
                  />
                </div>
                <div className="customizerInputGroup">
                  <label>Project Title *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. BioAro Product Catalog" 
                    value={newProjectTitle}
                    onChange={(e) => setNewProjectTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="customizerInputGroup">
                  <label>Image path *</label>
                  <input 
                    type="text" 
                    value={newProjectImage} 
                    onChange={(e) => setNewProjectImage(e.target.value)}
                    required
                  />
                  <span className="customizerHelpText">Defaults to `/assets/work/fourthx.jpg` (or local file paths)</span>
                </div>
                <div className="customizerInputGroup">
                  <label>External Project Link</label>
                  <input 
                    type="text" 
                    placeholder="e.g. https://github.com/... or project website" 
                    value={newProjectLink}
                    onChange={(e) => setNewProjectLink(e.target.value)}
                  />
                </div>
                <div className="customizerInputGroup">
                  <label>Tags (comma separated)</label>
                  <input 
                    type="text" 
                    placeholder="SaaS, UI/UX, Healthcare" 
                    value={newProjectTags}
                    onChange={(e) => setNewProjectTags(e.target.value)}
                  />
                </div>
                <div className="customizerInputGroup">
                  <label>Deliverables (comma separated)</label>
                  <input 
                    type="text" 
                    placeholder="Figma Prototype, Brand Guidelines, Meta Ads" 
                    value={newProjectDelivs}
                    onChange={(e) => setNewProjectDelivs(e.target.value)}
                  />
                </div>
                <div className="customizerInputGroup">
                  <label>Brief description</label>
                  <textarea 
                    placeholder="Explain the scope of the project and what was achieved..." 
                    value={newProjectBrief}
                    onChange={(e) => setNewProjectBrief(e.target.value)}
                    rows={3}
                  />
                </div>
                <button 
                  type="submit"
                  style={{ 
                    background: "var(--accent)", color: "#fff", padding: "12px", 
                    borderRadius: "6px", fontWeight: "600", fontSize: "13px", cursor: "pointer", 
                    marginTop: "10px", textAlign: "center" 
                  }}
                >
                  Add Project to Site
                </button>
              </form>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="customizerSection">
              <h4>Pricing Rates</h4>
              {content.pricing.plans.map((plan, idx) => (
                <div key={idx} style={{ marginBottom: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div style={{ gridColumn: "span 2", fontWeight: "600", fontSize: "12px", color: "var(--accent)" }}>
                    {plan.name} Tier
                  </div>
                  <div className="customizerInputGroup">
                    <label>Price INR</label>
                    <input 
                      type="text" 
                      value={plan.priceINR} 
                      onChange={(e) => updatePlan(idx, "priceINR", e.target.value)}
                    />
                  </div>
                  <div className="customizerInputGroup">
                    <label>Price USD</label>
                    <input 
                      type="text" 
                      value={plan.priceUSD} 
                      onChange={(e) => updatePlan(idx, "priceUSD", e.target.value)}
                    />
                  </div>
                </div>
              ))}
              
              <h4 style={{ marginTop: "24px" }}>Retainer Note</h4>
              <div className="customizerInputGroup">
                <textarea 
                  value={content.pricing.note} 
                  onChange={(e) => {
                    onChange({
                      ...content,
                      pricing: {
                        ...content.pricing,
                        note: e.target.value,
                      }
                    });
                  }}
                  rows={4}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
