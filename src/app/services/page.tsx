"use client";

import { useState } from "react";
import "./services.scss";
import { SERVICES_LIST } from "@/lib/services_description";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { TextItem } from "@/lib/pt_text";
import ServiceCard from "@/components/service_card/service_card";

export const ServiceTitle = ({ title, description }: { title: string, description: string }) => (
  <div className="service-title">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

export const ServiceOffers = ({ itemsList }: { itemsList: TextItem[] }) => {
  return (
    <div className="offers">
      <h2>O que oferecemos</h2>
      <div className="offers-list">
        {
          itemsList.map((item, idx) => (
            <div className="offer-item" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export const Benefits = ({ benefits }: { benefits: TextItem[] }) => {
  return (
    <div className="benefits">
      <h2>Benefícios para sua empresa</h2>
      <div className="benefits-grid">
        {
          benefits.map((item, idx) => (
            <div className="benefit-item" key={idx}>
              <div className="icon">{idx + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const Carrosel = ({ products }: { products: any[] }) => {
  return (
    <div className="carrosel-container">
      <h2>Conheça outros serviços</h2>
      <div className="carrosel">
        {
          products.map((item, idx) => (
            <ServiceCard
              key={idx}
              iconURL={item.iconUrl}
              title={item.name}
              description={item.description}
            />
          ))
        }
      </div>
    </div>
  )
}

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
