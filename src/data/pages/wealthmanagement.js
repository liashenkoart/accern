export const page = {
  hero: {
    label: "Accern for Wealth Management",
    title: "<strong>AI-powered insights</strong> for Wealth Advisors and Retail Brokers.",
    icon: "icon-dollar-sign.svg",
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
        title: "Provide personalized and consistent need-based advice to clients",
        description: "Access, curate, alert, and deliver relevant news and views to clients. Personalize and specify advice based on client preferences on assets, trades, segmentation of customers, and suitability.",
        img: "wealth-management-img-1.svg",
      },
      {
        title: "Provide client-specific product recommendations",
        description: "Provide personalized recommendations by ranking products based on their suitability to a customer’s market views and preferences.",
        img: "wealth-management-img-2.svg",
      },
      {
        title: "Enable smart search capabilities across your documents and client interactions",
        description: "Connect your internal data and quickly surface relevant information about your clients with advanced AI search capabilities. Use intelligent tagging on your client meeting notes and documents imported from your CRM system.",
        img: "wealth-management-img-3.svg",
      },
    ]
  },

  whitepaper: {
    label: "OUR WHITEPAPER",
    isDisableShape: true,
    title: "AI in Wealth Management White Paper",
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