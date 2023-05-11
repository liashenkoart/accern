export const page = {
  seo: {
    title: "Accern - Insurance",
    meta: [
      { name: "description", content: "Accern - Insurance" },
      { property: "og:title", content: "Accern - Insurance" }
    ],
  },
  hero: {
    label: "Accern for Insurance",
    title: "<strong>AI-powered insights</strong> for risk management, underwriting, claims, and distribution",
    icon: "icon-shield-2.svg",
  }, 
  
  related: {
    title: "Industry leaders using <span class='text-primary'>Accern</span>",
    className: "mb-s",
    columns: [
      {
        label: "NEXT Alpha",
        description: "Accern assists Next Alpha in becoming one of the best-performing hedge funds.",
        link: "/user-story-next-alpha",
      },
      {
        label: "Fundomate",
        description: "Accern helps Fundomate automate business funding and improve risk assessment.",
        link: "/user-story-fundomate",
      }
    ]
  },

  features: {
    isWithoutPadding: true,
    isMiddle: true,
    isSmallDescription: true,
    isSmallTitle: true,
    className: "sect-spacer bordered pt-0 pb-0",
    rows: [
      {
        title: "Improve underwriting accuracy and efficiency",
        description: "Aggregate the underwriter’s knowledge and expertise into a system that can be accessed by every employee. Integrate your internal documents to find relevant information and monitor changes in real-time.",
        img: "insurance-img-1.svg",
      },
      {
        title: "Propose, sell, advise, and prepare distributions efficiently",
        description: "Make well-informed decisions on  insurance distributions as more prospects are researching digital channels. Seamlessly integrate your own datasets and documents to identify the next best actions and insights for customers in your CRM system.",
        img: "insurance-img-2.svg",
      },
      {
        title: "Automate your claims management process",
        description: "Automate the manual claims management process and extract key information from unstructured text documents without writing code. Using Accern’s ready-made models or by customizing your own, you can research, extract, and analyze any data from unstructured text documents.",
        img: "insurance-img-3.svg",
      },
      {
        title: "General Accounts Risk and Investment Management",
        description: "Uncover early warning signals and emerging risks with Accern’s ready-made use cases or by customizing your own. Accern utilizes the latest in text analytics and machine algorithms to discover potential impacts on the reputation, ESG, credit, operation, or market risks of your investments.",
        img: "insurance-img-4.svg",
      },
    ]
  },

  whitepaper: {
    label: "OUR WHITEPAPER",
    isDisableShape: true,
    title: "AI in Insurance White Paper",
    className: "mb-s",
    titleCL: "mw-700",
    labelCL: "op-05",
    bgClassName: "effect-bg-3",
    button: {
      name: "Report coming soon",
      link: "",
    }
  }, 

  cta: {
    title: "Stay ahead of the market. Enhance your <strong>fund's capabilities</strong> with <strong class='text-primary'>Accern.</strong>",
    titleCL: "mw-850",
    variant: "simple",
    link: {
      name: "Schedule a Demo",
      link: "/contact"
    }
  },
}