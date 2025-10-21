import React, { useState } from "react";
import "./DevelopmentEthics.css";
import { AlertTriangle, BookOpen, Heart, Users, Globe, Shield, Leaf, Lightbulb } from "lucide-react";

const DevelopmentEthics: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-container">
      {/* Mission Banner */}
      <section className="mission-banner">
        <h1>Our Mission: Advancing Ethical and Sustainable Development</h1>
        <p>Drawing on the legacy of the Brundtland Commission (1987) and the UN’s 2030 Agenda for Sustainable Development.</p>
      </section>

      {/* Interactive Summary Dropdown */}
      <section className="summary-dropdown">
        <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▲ Hide Summary" : "▼ Show Summary"}
        </button>
        {isOpen && (
          <div className="summary-content">
            <p>
              This initiative draws from the <strong>Brundtland Report (1987)</strong> and builds upon
              frameworks of sustainability and ethical progress to counter <em>maldevelopment</em>—a
              process that favors economic expansion without regard for ecological and social
              consequences (Sachs, 1999). 
            </p>
            <p>
              The proposed measures align with <strong>SDG 9</strong> (Industry, Innovation, and Infrastructure)
              and <strong>SDG 13</strong> (Climate Action) to ensure that development remains both
              equitable and future-focused (United Nations, 2015).
            </p>
          </div>
        )}
      </section>

      {/* Icon Grid for Seven Worthwhile Values */}
      <section className="values-grid">
        <h2>Seven Worthwhile Values</h2>
        <div className="icon-grid">
          <div className="icon-card"><Heart size={40} /><p>Human Wellbeing</p></div>
          <div className="icon-card"><Globe size={40} /><p>Environmental Stewardship</p></div>
          <div className="icon-card"><BookOpen size={40} /><p>Education & Knowledge</p></div>
          <div className="icon-card"><Users size={40} /><p>Community & Cooperation</p></div>
          <div className="icon-card"><Shield size={40} /><p>Justice & Responsibility</p></div>
          <div className="icon-card"><Leaf size={40} /><p>Sustainability</p></div>
          <div className="icon-card"><Lightbulb size={40} /><p>Innovation with Integrity</p></div>
        </div>
      </section>

      {/* Maldevelopment Alert Box */}
      <section className="alert-box">
        <AlertTriangle size={40} className="alert-icon" />
        <div className="alert-text">
          <h3>Maldevelopment Warning</h3>
          <p>
            As noted by Sachs (1999), <em>maldevelopment</em> reflects the misuse of progress—where growth
            serves economic power rather than collective well-being. We must critically assess whether
            our current systems nurture life or exploit it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentEthics;
