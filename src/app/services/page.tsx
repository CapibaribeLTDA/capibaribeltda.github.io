"use client";

import { useState } from "react";
import "./services.scss";
import { SERVICES_LIST } from "@/lib/pt_text";
import ReactMarkdown from "react-markdown";

export default function Services() {
  const [activeTab, updateTab] = useState<number>(0);

  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="services-panel">
        <div className="services-list">
          {SERVICES_LIST.map((service, index) => (
            <button
              key={index}
              className={index === activeTab ? "active" : undefined}
              onClick={() => updateTab(index)}
            >
              {service.name}
            </button>
          ))}
        </div>
        <div className="service-description">
          <ReactMarkdown>{SERVICES_LIST[activeTab].description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
