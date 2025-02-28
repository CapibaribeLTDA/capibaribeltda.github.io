"use client";

import { useState } from "react";
import "./services.scss";
import { SERVICES_LIST } from "@/lib/pt_text";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Services() {
  const [activeTab, updateTab] = useState<number>(0);
  const [showList, updateShowList] = useState<boolean>(false);

  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="services-panel">
        <div className={`services-list ${showList ? 'active' : ''}`}>
          {SERVICES_LIST.map((service, index) => (
            <button
              key={index}
              className={index === activeTab ? "active" : undefined}
              onClick={() => {
                updateTab(index);
                updateShowList(false);
              }}
            >
              {service.name}
            </button>
          ))}
        </div>
        <button className={`list-switch ${showList ? 'active': ''}`}
          onClick={() => updateShowList(!showList)}>
            <Image src='arrow.png' alt='arrow' height={15} width={15}/></button>
        <div className={`service-description ${showList ? 'inactive' : ''}`}>
          <ReactMarkdown>{SERVICES_LIST[activeTab].description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
