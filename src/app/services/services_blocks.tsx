import "./services.scss";
import { TextItem } from "@/lib/pt_text";
import ServiceCard from "@/components/service_card/service_card";


export const ServiceTitle = ({ title, description }: { title: string, description: string }) => (
  <div className="service-title">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

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
