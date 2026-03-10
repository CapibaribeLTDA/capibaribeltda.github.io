
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

export type ProductItem = {
  name: string,
  description: string,
  iconUrl: string,
  path: string
}

export type TextItem = {
  title: string,
  description: string
}

export const PRODUCTS_LIST: ProductItem[] = [
  {
    name: "Infraestrutura de dados",
    description: "Projetamos, implementamos e otimizados infraestrutura de dados end-to-end com alta disponibilidade, segurança e performance.",
    iconUrl: "/icons/services/infra.png",
    path: "/services?service=dataInfrastructure"
  },
  {
    name: "Análise de dados",
    description: "Extraímos valor dos seus dados para revelar oportunidades, facilitar o planejamento e impulsionar resultados estratégicos.",
    iconUrl: "/icons/services/analysis.png",
    path: "/services?service=dataAnalysis"
  },
  {
    name: "Arquitetura de dados",
    description: "Projetamos, implementamos e otimizados infraestrutura de dados end-to-end com alta disponibilidade, segurança e performance.",
    iconUrl: "/icons/services/architecture.png",
    path: "/services?service=dataArchitecture"
  },
  {
    name: "Aplicação de IA e ML",
    description: "Projetamos, implementamos e otimizados infraestrutura de dados end-to-end com alta disponibilidade, segurança e performance.",
    iconUrl: "/icons/services/ia.png",
    path: "/services?service=AIApplications"
  },
  {
    name: "Plataforma de dados",
    description: "Projetamos, implementamos e otimizados infraestrutura de dados end-to-end com alta disponibilidade, segurança e performance.",
    iconUrl: "/icons/services/data_eng.png",
    path: "/services?service=dataPlatform"
  },
  {
    name: "Desenvolvimento Full-Stack",
    description: "Oferecemos desenvolvimento sob medida para transformar suas ideias em aplicações robustas e escaláveis",
    iconUrl: "/icons/services/full_stack.png",
    path: "/services?service=fullStack"
  }
]

export const REASONS = {
  title: "Porque a CapibaribeTI?",
  items: [
    {
      title: "Soluções Sob Medida",
      description: "Entregamos o ciclo completo: da arquitetura de dados à aplicação final, feito exclusivamente para o seu desafio, sem pacotes genéricos."
    },
    {
      title: "Foco em Crescimento e ROI",
      description: "Nosso objetivo é aumentar a sua receita e otimizar custos. Cada projeto é desenhado para gerar um Retorno sobre o Investimento (ROI) claro e mensurável."
    }, {
      title: "Qualidade, Velocidade e Governança",
      description: "Implementações ágeis e escaláveis (TTV Acelerado), combinadas com código limpo, seguindo a LGPD"
    }
  ]
}

export const STORIES = {
  title: "Histórias de sucesso",
  historias: [
    {
      iconURL: "",
      projectName: "Gov Hub",
      client: "UNB - Lab Livre",
      description: "Arquitetura da versão inicial da infraestrutura e treinamento dos membros do laboratório",
      link: "https://gov-hub.io/"
    }
  ]
}

export const SERVICES_DETAILS = {
  dataAnalysis: {
    title: "Análise de Dados",
    description: "Transformação de dados brutos em inteligência de negócio por meio de metodologias estatísticas e visualização avançada para suporte à decisão estratégica.",
    items: [
      {
        title: "Business Intelligence & Dashboards",
        description: "Desenvolvimento de painéis interativos e em tempo real que centralizam KPIs críticos para o monitoramento da performance operacional."
      },
      {
        title: "Data Cleaning & Wrangling",
        description: "Padronização e saneamento de bases de dados complexas, garantindo a integridade e a confiabilidade das informações analisadas."
      }
    ],
    benefits: [
      {
        title: "Agilidade Decisória",
        description: "Redução do tempo entre a coleta de dados e a tomada de decisão com base em evidências concretas."
      },
      {
        title: "Identificação de Tendências",
        description: "Detecção precoce de padrões de mercado e comportamento do consumidor para antecipar movimentos competitivos."
      },
      {
        title: "Cultura Data-Driven",
        description: "Fomento de uma mentalidade organizacional baseada em fatos, eliminando suposições e subjetividades."
      },
      {
        title: "Otimização de ROI",
        description: "Análise precisa de investimentos para maximizar o retorno sobre o capital alocado em cada projeto."
      }
    ]
  },
  dataArchitecture: {
    title: "Arquitetura de Dados",
    description: "Design e estruturação do ecossistema de dados para garantir fluxo contínuo, governança e escalabilidade do patrimônio informativo da empresa.",
    items: [
      {
        title: "Modelagem de Dados",
        description: "Criação de esquemas lógicos e físicos otimizados para alto desempenho em consultas e armazenamento eficiente."
      },
      {
        title: "Governança e Compliance",
        description: "Definição de políticas de acesso, linhagem de dados e conformidade com regulamentações como a LGPD."
      }
    ],
    benefits: [
      {
        title: "Silo Zero",
        description: "Eliminação de barreiras informacionais entre departamentos através de uma estrutura unificada."
      },
      {
        title: "Escalabilidade Estrutural",
        description: "Arquitetura preparada para suportar o crescimento exponencial do volume de dados sem degradação de performance."
      },
      {
        title: "Segurança de Ativos",
        description: "Proteção robusta contra vazamentos e acessos não autorizados à propriedade intelectual da empresa."
      },
      {
        title: "Redução de Redundância",
        description: "Minimização de custos de armazenamento e processamento através da desduplicação e organização lógica."
      }
    ]
  },
  dataInfrastructure: {
    title: "Infraestrutura de Dados",
    description: "Implementação e gestão de ambientes de alta disponibilidade, garantindo que a tecnologia de suporte aos dados seja resiliente e econômica.",
    items: [
      {
        title: "Cloud & Hybrid Environments",
        description: "Configuração e orquestração de ambientes em nuvem (AWS, Azure, GCP) ou híbridos para processamento de carga pesada."
      },
      {
        title: "Data Pipelines (ETL/ELT)",
        description: "Automação do fluxo de extração, transformação e carregamento de dados entre diferentes sistemas e fontes."
      }
    ],
    benefits: [
      {
        title: "Resiliência Operacional",
        description: "Garantia de continuidade de serviços com sistemas de backup, recuperação de desastres e alta disponibilidade."
      },
      {
        title: "Eficiência de Custos",
        description: "Otimização do consumo de recursos de nuvem, evitando gastos desnecessários com infraestrutura subutilizada."
      },
      {
        title: "Performance de Processamento",
        description: "Latência reduzida no acesso aos dados, permitindo análises complexas em frações de segundo."
      },
      {
        title: "Flexibilidade Tecnológica",
        description: "Infraestrutura modular que permite a adoção rápida de novas ferramentas e tecnologias de mercado."
      }
    ]
  },
  AIApplications: {
    title: "Aplicações de IA e ML",
    description: "Desenvolvimento de soluções baseadas em Inteligência Artificial e Machine Learning para automatizar processos complexos e gerar previsões de alta precisão.",
    items: [
      {
        title: "Modelagem Preditiva",
        description: "Algoritmos treinados para prever comportamentos futuros, churn de clientes e demandas de estoque."
      },
      {
        title: "Processamento de Linguagem Natural",
        description: "Implementação de sistemas que compreendem e interagem via texto ou voz, otimizando o atendimento e análise de documentos."
      }
    ],
    benefits: [
      {
        title: "Automação Inteligente",
        description: "Substituição de tarefas repetitivas por sistemas cognitivos, liberando o capital humano para funções criativas."
      },
      {
        title: "Personalização em Escala",
        description: "Capacidade de oferecer experiências customizadas para milhares de clientes simultaneamente."
      },
      {
        title: "Redução de Erro Humano",
        description: "Aumento da precisão em processos críticos através de validações algorítmicas constantes."
      },
      {
        title: "Vantagem Competitiva",
        description: "Uso de tecnologia de ponta para criar produtos e serviços impossíveis de replicar sem IA."
      }
    ]
  },
  dataPlatform: {
    title: "Plataforma de Dados",
    description: "Criação de ecossistemas integrados (Data Lakes/Warehouses) que servem como a 'fonte única da verdade' para toda a organização.",
    items: [
      {
        title: "Modern Data Stack",
        description: "Integração das melhores ferramentas do mercado para criar uma plataforma moderna, ágil e de fácil manutenção."
      },
      {
        title: "Self-Service Analytics",
        description: "Capacitação de usuários de negócio para explorarem dados de forma independente e segura."
      }
    ],
    benefits: [
      {
        title: "Democratização de Dados",
        description: "Acesso facilitado à informação para todos os níveis hierárquicos, respeitando as camadas de permissão."
      },
      {
        title: "Consistência de Métricas",
        description: "Garantia de que todos os departamentos utilizam os mesmos números para os mesmos indicadores."
      },
      {
        title: "Time-to-Market Reduzido",
        description: "Aceleração do lançamento de novos produtos através de insights rápidos gerados pela plataforma."
      },
      {
        title: "Visão 360 do Cliente",
        description: "Unificação de todos os pontos de contato do cliente em um perfil único e acionável."
      }
    ]
  },
  fullStack: {
    title: "Desenvolvimento Full-Stack",
    description: "Engenharia de ponta a ponta para aplicações web e móveis, abrangendo desde a arquitetura de interfaces responsivas até a implementação de sistemas de back-end escaláveis.",
    items: [
      {
        title: "Arquitetura de Front-end",
        description: "Desenvolvimento de interfaces performáticas e centradas no usuário, utilizando frameworks modernos e padrões de design modular."
      },
      {
        title: "Sistemas de Back-end e APIs",
        description: "Construção de lógica de negócio robusta e APIs RESTful/GraphQL seguras, garantindo alta disponibilidade e integridade dos dados."
      },
      {
        title: "Gerenciamento de Infraestrutura",
        description: "Modelagem de bancos de dados relacionais e não-relacionais, além da configuração de pipelines de CI/CD e ambientes em nuvem."
      }
    ],
    benefits: [
      {
        title: "Escalabilidade Técnica",
        description: "Sistemas projetados para suportar o crescimento do volume de acessos e processamento sem perda de performance."
      },
      {
        title: "Interoperabilidade",
        description: "Integração fluida entre diferentes plataformas, serviços de terceiros e ecossistemas legados."
      },
      {
        title: "Segurança e Conformidade",
        description: "Implementação de protocolos rigorosos de proteção de dados e autenticação seguindo padrões internacionais."
      },
      {
        title: "Otimização de Manutenção",
        description: "Código limpo e documentado que reduz o débito técnico e facilita a evolução contínua da aplicação."
      }
    ]
  }
}