"use client";
import { TEXT_PT } from "@/lib/pt_text";
import "./page.scss";
import { HomeButton } from "@/components/home_button/home_button";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Soluções tecnológicas que ajudam a escalar o seu negócio</h1>
      <div id="frame1" className="">
        <HomeButton
          image_url={"/data-integration.png"}
          inner_text={TEXT_PT.tabs.home.content[0]}
        />
        <HomeButton
          image_url={"/data.png"}
          inner_text={TEXT_PT.tabs.home.content[1]}
        />
        <HomeButton
          image_url={"/monitor.png"}
          inner_text={TEXT_PT.tabs.home.content[2]}
        />
        <HomeButton
          image_url={"/document.png"}
          inner_text={TEXT_PT.tabs.home.content[3]}
        />
      </div>
    </div>
  );
}
