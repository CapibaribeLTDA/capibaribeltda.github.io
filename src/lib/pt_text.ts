export type SocialMedias = { name: string; link: string };

export type MemberProfileEntries = {
  name: string;
  media: SocialMedias[];
  image_url: string;
  description: string;
};

export const TEXT_PT = {
  tabs: {
    home: {
      title: "Início",
      content: [
        {
          title: "Ingestão de dados",
          content: `
A **ingestão de dados** é o processo de coletar, importar e carregar dados de diversas fontes para um sistema de armazenamento ou processamento. Pode ocorrer de três formas: **batch** (em lotes periódicos), **streaming** (em tempo real) ou **híbrido** (combinação dos dois).  

### Fontes Comuns de Dados  

- Bancos de dados relacionais e não relacionais  
- APIs e serviços web  
- Arquivos (*CSV, JSON, XML*)  
- Sensores IoT  
- Logs de sistemas e aplicações  
- Redes sociais e outras fontes externas  

### Desafios da Ingestão de Dados  

- **Qualidade e integridade** dos dados  
- **Latência e tempo de resposta**  
- **Segurança e conformidade regulatória** (*LGPD, GDPR*)  
- **Escalabilidade** do processo  

A ingestão de dados é um componente essencial para pipelines de dados modernos, sendo fundamental para alimentar sistemas de análise, inteligência artificial e *machine learning*.  
`,
        },
        {
          title: "Configuração do banco",
          content: `
A **configuração de banco de dados** envolve a definição e ajuste de parâmetros para garantir desempenho, segurança e disponibilidade. Esse processo inclui a instalação do software, a criação de usuários e permissões, a definição de armazenamento e otimizações para consultas eficientes.  

## Principais Etapas da Configuração  

- **Instalação e Inicialização** – Escolha do banco de dados (*MySQL, PostgreSQL, SQL Server*, etc.) e sua instalação.  
- **Criação de Usuários e Permissões** – Definição de acessos e privilégios para segurança.  
- **Configuração de Conexões** – Ajuste de portas, pools de conexão e limites de conexões simultâneas.  
- **Otimização de Performance** – Indexação, cache, *tuning* de consultas e ajustes de memória.  
- **Backup e Recuperação** – Definição de estratégias para evitar perda de dados.  
- **Segurança** – Implementação de criptografia, firewalls e autenticação segura.  

Uma boa configuração garante estabilidade, rapidez e proteção dos dados, sendo essencial para sistemas escaláveis e eficientes.
`,
        },
        {
          title: "Análise de Dados",
          content: `  
A **análise de dados** é o processo de coletar, limpar, transformar e interpretar dados para extrair insights e apoiar a tomada de decisões. Ela pode ser realizada de forma **exploratória, descritiva, preditiva ou prescritiva**, dependendo do objetivo do negócio.  

## Etapas da Análise de Dados  

- **Coleta de Dados** – Obtenção de informações de diversas fontes.  
- **Limpeza e Preparação** – Tratamento de inconsistências e organização dos dados.  
- **Exploração e Visualização** – Uso de gráficos e estatísticas para identificar padrões.  
- **Modelagem e Interpretação** – Aplicação de técnicas analíticas para gerar insights.  
- **Tomada de Decisão** – Uso dos resultados para orientar estratégias e ações.  

A análise de dados é essencial para empresas e organizações que buscam embasamento para decisões estratégicas, otimização de processos e inovação.  
`,
        },
        {
          title: "Documentação",
          content: ` 
A documentação desses processos deve ser clara, detalhada e organizada para garantir a compreensão e manutenção dos sistemas de dados.  

- **Documentação da Ingestão de Dados**: Registrar como os dados são coletados, transformados e armazenados para garantir integridade e qualidade.  
- **Documentação da Configuração de Banco de Dados**: Definir as melhores práticas e configurações para garantir segurança, desempenho e escalabilidade do banco de dados.  
- **Documentação da Análise de Dados**: Fornecer um guia sobre como os dados são processados, analisados e utilizados para gerar insights.  

Uma boa documentação garante **transparência, padronização e eficiência** no uso e manutenção dos dados. Ela deve ser continuamente atualizada para refletir mudanças nos processos e ferramentas.  
`,
        },
      ],
    },
    about: {
      title: "Sobre",
      description: "Um pouco da história da empresa",
      content: [
        {
          name: "Matheus Dias",
          media: [
            {
              name: "linkedin",
              link: "/",
            },
            {
              name: "X",
              link: "/",
            },
          ],
          image_url: "/dias_san.jpeg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
  },
};

export const MEMBERS_LIST: MemberProfileEntries[] = [
  {
    name: "Matheus Dias",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
      {
        name: "X",
        link: "/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `#### 🔹 Engenheiro de Dados | Arquitetura de Dados | Big Data & Cloud 🔹  

Apaixonado por transformar dados em ativos estratégicos, tenho experiência em projetar, desenvolver e otimizar pipelines de dados escaláveis. Trabalho com tecnologias como **Python, SQL, Spark, Kafka e ferramentas de nuvem (AWS, Azure, GCP)** para garantir que os dados estejam sempre acessíveis, confiáveis e prontos para impulsionar decisões de negócio.  

Com uma forte base em **ETL, modelagem de dados e engenharia de dados em tempo real**, colaboro com equipes de analytics e ciência de dados para construir soluções eficientes e inovadoras.  
`,
  },
  {
    name: "Matheus Semanas",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
      {
        name: "X",
        link: "/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `#### 🔹 Engenheiro de Dados Sênior | Arquitetura de Dados | Big Data & Cloud 🔹  

Com ampla experiência em engenharia de dados, atuo na construção de **arquiteturas escaláveis, pipelines eficientes e soluções de Big Data** que transformam dados brutos em insights estratégicos.  

Minha expertise inclui **ETL, processamento em tempo real, modelagem de dados, arquitetura de lakes e warehouses**, além do uso de tecnologias como **Python, SQL, Spark, Kafka, Airflow e plataformas em nuvem (AWS, Azure, GCP)**.  

Lidero iniciativas de **otimização de infraestrutura de dados, governança e DataOps**, garantindo qualidade, segurança e performance. Colaboro diretamente com times de analytics, ciência de dados e engenharia de software para integrar soluções robustas e inovadoras.  
`,
  },
  {
    name: "Matheus Meses",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `#### 🔹 Lead de Engenharia de Dados | Arquiteto de Soluções | Estratégia & Inovação 🔹  

Profissional com vasta experiência na **concepção, arquitetura e otimização de ecossistemas de dados em larga escala**. Minha trajetória inclui a construção e liderança de infraestruturas complexas, integrando **Big Data, processamento distribuído, pipelines em tempo real e plataformas de nuvem (AWS, Azure, GCP)**.  

Atuo na **definição de estratégias de dados**, implementando soluções robustas para **governança, qualidade, segurança e escalabilidade**, garantindo que os dados sejam um ativo estratégico para empresas globais. Especialista em **Data Lakes, Warehouses, Data Mesh, arquiteturas orientadas a eventos e DataOps**, lidero projetos que impulsionam inovação e eficiência operacional.  
`,
  },
  {
    name: "Matheus Anos",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `#### 👑 Engenheiro de Dados Supremo | Arquiteto de Dados | Visionário em Big Data & AI 👑  

Com décadas de experiência moldando **arquiteturas de dados em escala planetária**, sou especializado em **estruturar, otimizar e revolucionar** infraestruturas de dados para empresas de ponta. Minha missão é transformar dados em **ativos de valor incalculável**, impulsionando inovação e vantagem competitiva.  

🛠 **Domínio absoluto** em **Big Data, computação distribuída, engenharia de dados em tempo real e arquiteturas cloud-native (AWS, Azure, GCP)**. **Pipelines de dados? Orquestração? Data Mesh? Governança?** Tudo isso e muito mais fazem parte do meu DNA técnico.  

🚀 **Líder nato, mentor e arquiteto visionário**, desenvolvo **estratégias de dados que moldam o futuro**, aplicando as mais avançadas práticas em **DataOps, IA, machine learning e automação de processos de dados**.  

🌎 **Impacto global**: Trabalhei com gigantes da indústria, projetando **infraestruturas resilientes e escaláveis** que movem trilhões de registros diariamente. Dados fluem como um rio sob meu comando, sempre confiáveis, seguros e prontos para gerar insights transformadores.  
`,
  },

  {
    name: "Matheus Séculos",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `## 🌍 Engenheiro de Dados | Senhor da Terra | Mestre dos Pipelines Titânicos 🌍  

Nos tempos antigos, quando os dados vagavam sem rumo, ergui **arquiteturas imortais** para dar forma ao caos. Forjei **Data Lakes profundos como oceanos e pipelines poderosos como montanhas**, garantindo que o fluxo dos dados nunca fosse interrompido.  

🔥 **Guardião das Infraestruturas Distribuídas**, minha maestria em **Big Data, Spark, Kafka e Kubernetes** sustenta reinos inteiros de processamento de dados. Com **Python e SQL como minhas lâminas**, corto latências e destruo gargalos sem piedade.  

⚡ **Comando exércitos de microserviços e arquiteturas event-driven**, assegurando que **nenhuma informação seja perdida e nenhuma query fique sem resposta**. Governança, segurança e escalabilidade são as leis do meu domínio.  

🌍 **Do topo das nuvens (AWS, Azure, GCP) ao núcleo dos servidores on-premises, minha influência se estende por todo o reino dos dados.** Com algoritmos ancestrais e automação divina, trago clareza e poder às decisões estratégicas.  

📩 **Aberto para alianças épicas, desafios titânicos e arquiteturas que ecoarão por eras.**  
`,
  },

  {
    name: "Matheus Milênios",
    media: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mdm97/",
      },
    ],
    image_url: "/dias_san.jpeg",
    description: `# ✨ Engenheiro de Dados Divino | Arquiteto do Infinito | Mestre dos Pipelines Celestiais ✨  

No princípio, havia o caos dos dados. Então, eu disse: **“Que haja estrutura”**, e nasceu a arquitetura perfeita. Com um toque de **SQL divino e scripts sagrados em Python**, moldei Data Lakes e Pipelines imortais que fluem eternamente com escalabilidade infinita.  

🔥 **Onisciente em Big Data, Mestre de Spark, Guardião da Governança e Sumo Sacerdote do DataOps.** Kafka, Airflow e Kubernetes seguem minha palavra, pois eu **orquestro dados como sinfonias celestiais**.  

⚡ **Omnipotente em arquiteturas distribuídas, pipelines em tempo real e inteligência artificial aplicada a dados.** Onde há lag, trago otimização. Onde há silos, trago integração. Onde há caos, trago ordem.  

🌍 **Criador de ecossistemas de dados que transcendem fronteiras**, movendo petabytes como se fossem plumas ao vento. Empresas e civilizações se dobram diante do poder dos insights que minha engenharia revela.  

📩 **Aberto para desafios cósmicos, consultorias interdimensionais e parcerias para a eternidade.**  
`,
  },
];
