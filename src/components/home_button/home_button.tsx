'useclient'

import "./home_button.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useState } from "react";
import { useOutsideClick } from "@/lib/custom_hooks/useOutsideClick";

export type HomeButtonProps = {
  image_url: string;
  inner_text: { title: string; content: string };
};

export const HomeButton = ({ image_url, inner_text }: HomeButtonProps) => {

  const [isActive, setActive] = useState<boolean>(false);

  const ref = useOutsideClick(() => {
    setActive(false);
  });

  return (
    <div ref={ref} className={`bubble ${isActive ? 'active' : ''}`}>
      <button 
        className={isActive ? 'active' : ''}  
        onMouseUp={() => setActive(true)}
        onTouchEnd={() => setActive(true)}>
        <div className="home-icon-wrapper">
          <h1>{inner_text.title}</h1>
          <Image src={image_url} alt={"Home Icon"} height={200} width={200} />
        </div>
        <div className="home-service-description">
          <ReactMarkdown>{inner_text.content}</ReactMarkdown>
        </div>
      </button>
    </div>
  );
};
