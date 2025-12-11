import './service_card.scss';

type ServiceCardProps = {
  iconURL: string,
  title: string,
  description: string
}

export default function ServiceCard({
  iconURL,
  title,
  description
}: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="content">
        <img src={iconURL} height={79} width={79} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a className='saiba-mais'>Saiba mais</a>
      </div>
    </div>
  )
}