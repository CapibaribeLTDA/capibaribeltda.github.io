
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

