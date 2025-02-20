import { MemberProfile } from "@/components/member_profile";
import "./about.scss";
import { MEMBERS_LIST } from "@/lib/pt_text";

const introduction = `Nos confins do universo, surgiu a CapibaribeTI, 
a primeira empresa de engenharia de dados celestial, 
criada para organizar o fluxo de informações cósmicas. 
A comunicação entre galáxias era um caos, até que cientistas de Andrômeda, 
matemáticos de Alfa Centauri e uma IA quântica se uniram para desenvolver o 
Protocolo de Transmissão Taquiônica (PTT) e o Gravibanco, um banco de dados 
armazenado em uma singularidade controlada. A empresa ajudou constelações a 
registrar trajetórias, buracos negros a gerenciar dados e civilizações a 
otimizar comunicações. Seu maior feito foi criar o Arquivo Temporal Universal, 
permitindo acesso preciso a qualquer evento no espaço-tempo. Hoje, a 
CapibaribeTI continua a evoluir, garantindo que o universo funcione sem falhas.

`;

export default function About() {
  return (
    <div id="frame2">
      <h1>Origem</h1>
      <p>{introduction}</p>
      <h1>A equipe</h1>
      <div className="members-area">
        {MEMBERS_LIST.map((member, idx) => (
          <MemberProfile
            key={idx}
            profile={member}
            alignment={idx % 2 == 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
