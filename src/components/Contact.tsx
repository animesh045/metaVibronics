"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiteContent } from "../data/siteContent";

interface ContactProps {
  content: SiteContent["contact"];
  branding: SiteContent["branding"];
}

export default function Contact({ content, branding }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      if (response.ok) {
        setSubmitResult("success");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
      } else {
        setSubmitResult("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="section" 
      ref={containerRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-inner">
        <div className="eyebrow">{content.eyebrow}</div>
        
        <h2 
          className="display"
          style={{
            fontSize: "clamp(36px, 4vw, 52px)",
            marginBottom: "0",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
          dangerouslySetInnerHTML={{ __html: content.headingHtml }}
        />

        <div className="contactGrid">
          <div 
            className="contactInfo"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
            }}
          >
            <h3>{content.subheading}</h3>
            <p>{content.description}</p>
            
            <div className="contactItems">
              <div className="contactItem">
                <div className="cType">Email</div>
                <div className="cVal">
                  <a href={`mailto:${branding.email}`}>{branding.email}</a>
                </div>
              </div>
              <div className="contactItem">
                <div className="cType">Phone</div>
                <div className="cVal">
                  <a href={`tel:${branding.phone.replace(/\s+/g, "")}`}>{branding.phone}</a>
                </div>
              </div>
              <div className="contactItem">
                <div className="cType">Instagram</div>
                <div className="cVal">
                  <a href={`https://instagram.com/${branding.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer">
                    {branding.instagram}
                  </a>
                </div>
              </div>
              <div className="contactItem">
                <div className="cType">Response Time</div>
                <div className="cVal">{branding.responseHours}</div>
              </div>
            </div>
          </div>

          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s"
            }}
          >
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formRow">
                <div className="formGroup">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Rajesh Kumar" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className="formGroup">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="rajesh@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>
              
              <div className="formRow">
                <div className="formGroup">
                  <label>Phone (optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label>Service Interested In</label>
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="brand">Brand Systems & Identity</option>
                    <option value="content">Social Media & Content</option>
                    <option value="ads">Performance Marketing (Ads)</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="packaging">Packaging & Print</option>
                    <option value="communication">Communication Design</option>
                    <option value="retainer">Full Studio Retainer</option>
                    <option value="other">Not sure — let&apos;s talk</option>
                  </select>
                </div>
              </div>
              
              <div className="formGroup">
                <label>Tell us about your project</label>
                <textarea 
                  placeholder="Share anything about your business, what you're trying to achieve, your current challenges, or your timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="formSubmit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>

              {submitResult === "success" && (
                <div className="formSuccess">
                  ✓ Message sent! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {submitResult === "error" && (
                <div className="formSuccess" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#ef4444" }}>
                  ✗ Failed to send message. Please try emailing directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
