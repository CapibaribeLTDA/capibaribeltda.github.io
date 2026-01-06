import Link from 'next/link';
import './services_menu.scss';

const title = "Oferecemos a solução que você precisa"

const description = "Tem um desafio? Temos a solução. Escolha sua necessidade e descubra nossos serviços sob medida."

const SERVICES_LIST = [
  "Quero ter uma IA para minha empresa",
  "Precido analisar e interpretar meus dados",
  "Quero estruturar e organizar meus dados",
  "Gostaria de construir uma solução",
  "Preciso armazenar, integrar ou protegeer meus dados",
  "Queria uma solução para gerenciar meus dados"
]

export default function ServicesMenu() {
  return (
    <div className='services-menu'>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='services-list'>
        {
          SERVICES_LIST.map((idx, i) => <Link href={"/"} className='service-link' key={i}>
            {idx}
          </Link>)
        }
      </div>
    </div>
  )
}