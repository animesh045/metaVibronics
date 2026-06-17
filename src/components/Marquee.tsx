"use client";
import React from "react";

export default function Marquee() {
  const items = [
    "Brand Systems", "UI/UX Design", "Performance Marketing",
    "Packaging Design", "Content Strategy", "Publication Design",
    "Typography", "Infographics", "Meta & Google Ads", "Brand Identity"
  ];

  // Double the items for seamless infinite scroll
  const marqueeItems = [...items, ...items];

  return (
    <div className="marqueeWrap">
      <div className="marqueeTrack">
        {marqueeItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span>{item}</span>
            {idx < marqueeItems.length - 1 && <span className="dot">·</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
