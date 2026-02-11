"use client";
import { PRODUCTS_LIST, REASONS, STORIES } from "@/lib/pt_text";
import "./page.scss";
import ServiceCard from "@/components/service_card/service_card";
import ServicesMenu from "@/components/service_menu/services_menu";
import StoryCard from "@/components/story_card/story_card";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Transforme seu negócio com o poder dos dados</h1>
      <div id="solutions" className="">
        <ServicesMenu/>
        <div id="cards-container">
          {
            PRODUCTS_LIST.map((item) =>
              <ServiceCard
                key={item.name}
                iconURL={item.iconUrl}
                title={item.name}
                description={item.description}
              />)
          }
        </div>
      </div>
      <div id="reason" className="">
          <h1>{REASONS.title}</h1>
          {
            REASONS.items.map(item => (
              <div className="reason-item" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          }
      </div>
      <div id="stories" className="">
          <h1>{STORIES.title}</h1>
          <div className="carrosel">
            {
              STORIES.historias.map((item) => (
                <StoryCard
                  key={item.projectName}
                  iconURL={"/icons/services/ia.png"}
                  title={item.projectName}
                  subtitle={item.client}
                  description={item.description}
                  redirect={item.link}
                />
              ))
            }
          </div>
      </div>
    </div>
  );
}
