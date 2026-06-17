"use client";
import React, { useState } from "react";
import { defaultSiteContent, SiteContent } from "../data/siteContent";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Results from "../components/Results";
import Outcomes from "../components/Outcomes";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Customizer from "../components/Customizer";

export default function Home() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  return (
    <>
      {/* Header Navigation */}
      <Navbar branding={content.branding} navigation={content.navigation} />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero content={content.hero} branding={content.branding} />
        
        <Marquee />
        
        <About content={content.about} />
        
        <Services content={content.services} />
        
        <Work content={content.work} />
        
        <Results content={content.results} />
        
        <Outcomes content={content.outcomes} />
        
        <Process content={content.process} />
        
        <Pricing content={content.pricing} />
        
        <Contact content={content.contact} branding={content.branding} />
      </main>

      {/* Footer Details */}
      <Footer branding={content.branding} navigation={content.navigation} />

      {/* Live Visual Customizer */}
      <Customizer content={content} onChange={setContent} />
    </>
  );
}
