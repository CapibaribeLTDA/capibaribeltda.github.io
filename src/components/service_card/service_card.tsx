import './service_card.scss';
import Image from 'next/image';

type ServiceCardProps = {
  iconURL: string,
  title: string,
  description: string,
  redirecturl?: string
}

export default function ServiceCard({
  iconURL,
  title,
  description,
  redirecturl
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="content">
        <Image src={iconURL} height={79} width={79} alt='icon'/>
        <h2>{title}</h2>
        <p>{description}</p>
        <a className='saiba-mais' href={redirecturl}>Saiba mais</a>
      
      </div>
    </div>
  )
}