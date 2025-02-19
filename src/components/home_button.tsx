import "./home_button.scss";
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
          <Image src={image_url} alt={"Home Icon"} height={200} width={200} />
        </div>
        <h1>{inner_text.title}</h1>
        <p>{inner_text.content}</p>
      </button>
    </div>
  );
};
