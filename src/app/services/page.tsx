"use client";

import { useState } from "react";
import "./services.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Benefits, Carrosel, ServiceOffers, ServiceTitle } from "./services_blocks";
import { PRODUCTS_LIST, SERVICES_DETAILS } from "@/lib/pt_text";

type ServiceKey = keyof typeof SERVICES_DETAILS;

const SERVICE_LIST = Object.keys(SERVICES_DETAILS) as ServiceKey[];

export default function Services() {

  const url = new URL(window.location.href);

  const param = url.searchParams.get("service") as ServiceKey | null | undefined;

  if (typeof param === "string" && !SERVICES_DETAILS[param]) {
    // Handle invalid service parameter 
    return(
      <div className="service">
      <ServiceTitle
        title="Nenhum serviço selecionado"
        description="Faça uma seleção válida." />
      </div>
    )
  }

  const activeService: ServiceKey = param ?? SERVICE_LIST[0] as ServiceKey;

  const THIS_SERVICE = SERVICES_DETAILS[activeService];

  return (
    <div className="service">
      <ServiceTitle
        title={THIS_SERVICE.title}
        description={THIS_SERVICE.description} />
      <ServiceOffers itemsList={THIS_SERVICE.items} />
      <Benefits
        benefits={THIS_SERVICE.benefits}
      />
      <Carrosel products={PRODUCTS_LIST} />
    </div>
  );
}
