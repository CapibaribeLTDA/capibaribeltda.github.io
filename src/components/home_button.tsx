import "./home_button.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export type HomeButtonProps = {
  image_url: string;
  inner_text: { title: string; content: string };
};

export const HomeButton = ({ image_url, inner_text }: HomeButtonProps) => {
  return (
    <div className="bubble">
      <button>
        <div>
          <h1>{inner_text.title}</h1>
          <Image src={image_url} alt={"Home Icon"} height={200} width={200} />
        </div>
        <div className="home-service-description">
          <ReactMarkdown children={inner_text.content} />
        </div>
      </button>
    </div>
  );
};
