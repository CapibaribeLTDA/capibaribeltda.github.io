import './story_card.scss';
import Image from 'next/image';

type StoryCardProps = {
  iconURL: string,
  title: string,
  subtitle: string,
  description: string,
  redirect: string
}

export default function StoryCard({
  iconURL,
  title,
  subtitle,
  description,
  redirect
}: StoryCardProps) {
  return (
    <div className="story-card">
      <div className="content">
        <Image src={iconURL} alt="icon" height={79} width={79} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <a className='saiba-mais' href={redirect}>Saiba mais</a>
      </div>
    </div>
  )
}