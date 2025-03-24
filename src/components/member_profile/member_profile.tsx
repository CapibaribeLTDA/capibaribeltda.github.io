import Image from "next/image";
import "./member_profile.scss";
import { MemberProfileEntries, SocialMedias } from "@/lib/custom_types";
import ReactMarkdown from "react-markdown";

type MemberProfileProps = {
  profile: MemberProfileEntries;
  alignment: string;
};

const MediaIcon = ({ media }: { media: SocialMedias }) => {
  const img_url = media.name == "X" ? "/twitter.png" : "linkedin.png";

  return (
    <a href={media.link} target="_blank">
      <Image src={img_url} alt={media.name} height={25} width={25} />
    </a>
  );
};

export const MemberProfile = ({ profile, alignment }: MemberProfileProps) => {
  return (
    <div className={`member ${alignment}`}>
      <div className="profile-pic">
        <Image
          src={profile.image_url}
          alt={profile.image_url}
          height={150}
          width={150}
        />
        <div className="social-media">
          {profile.media.map((media, index) => (
            <MediaIcon key={index} media={media} />
          ))}
        </div>
      </div>
      <span>{profile.name}</span>
      <div className="member-description">
        <ReactMarkdown>{profile.description}</ReactMarkdown>
      </div>
    </div>
  );
};
