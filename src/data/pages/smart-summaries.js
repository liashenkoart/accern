export const page = {
  hero: {
    label: "Accern's Smart Summaries",
    title: "<strong>Generate Smart Summaries for Efficient</strong> Knowledge Consumption",
    titleCL: "mw-800",
    className: "mt-5",
    variant: "error",
  }, 
  
  related: {
    title: "Industry leaders using <span class='text-primary'>Accern</span>",
    className: "bg-primary-cover-5",
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

  dataEngineers: {
    isWithoutPadding: true,
    isMiddle: true,
    className: "sect-spacer bordered pt-0 pb-0 bg-primary-cover-5",
    rows: [
      {
        label: "Data Engineers",
        title: "Solutions which will <span class='text-special-primary-dark'>save your time</span>",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaad minim veniam, quis nostrud exercitation ullamco laboris.",
        img: "wealth-management-img-2.svg",
      },
    ]
  },

  features: {
    isWithoutPadding: true,
    isMiddle: true,
    isSmallDescription: true,
    isSmallTitle: true,
    isNumbered: true,
    className: "sect-spacer bordered pt-0 pb-0",
    rows: [
      {
        label: "WORKFLOW STEP 01",
        labelCL: "text-primary",
        title: "Consolidate Data from Multiple Documents",
        description: "Consolidate large documents from multiple sources into shorter and more digestible summaries for quick knowledge consumption.",
        img: "wealth-management-img-1.svg",
      },
      {
        label: "WORKFLOW STEP 02",
        labelCL: "text-primary",
        title: "Select from Two Types of Summarization Models",
        description: "<p>Use abstractive summarization to summarize and interpret data using adaptive NLP to generate new, short text with the most critical information.</p><p>Use extractive summarization to extract the most critical information from a document.</p>",
        img: "wealth-management-img-2.svg",
      },
      {
        label: "WORKFLOW STEP 03",
        labelCL: "text-primary",
        title: "Export Summaries into External Applications",
        description: "Seamlessly export your smart summaries into news applications, widgets, smart search tools, and more.",
        img: "wealth-management-img-3.svg",
      },
    ]
  },

  whitepaper: {
    label: "OUR WHITEPAPER",
    isDisableShape: true,
    title: "Deploy Smart Summaries AI Use Cases 75x faster for Financial Services",
    className: "mb-s",
    titleCL: "mw-800",
    labelCL: "op-05",
    bgClassName: "effect-bg-3",
    button: {
      name: "Report coming soon",
      link: "",
    }
  },
  
  featuredClients: {
    title: "How those companies have been using Accern for <span class='text-special-primary-dark'>Credit Risk</span>",
    titleCL: "mw-700",
    isCoverInner: true,
    variant: "carousel",
    
    clients: [
      {
        name: "John Doe",
        jobTitle: "Data Engineer @Yahoo ex @Google",
        title: "That’s just my review about Accern here and  how was my experience working and using their own platform, great work guys, text",
        img: "featured-client.jpg",
        logo: "yahoo-logo.png"
      },
      {
        name: "John Doe",
        jobTitle: "Data Engineer @Yahoo ex @Google",
        title: "That’s just my review about Accern here and  how was my experience working and using their own platform, great work guys, text",
        img: "featured-client.jpg",
        logo: "logo-google-c.png"
      }
    ]
  },

  footerGetStarted: {
    title: "Stay ahead of the market. Enhance your <strong>fund's capabilities</strong> with Accern.",
    label: "GET STARTED",
    button: {
      name: "Talk to sales",
      link: "/contact"
    }
  },

  useCases: {
    label: "Use Cases for CREDIT RISK",
    className: "pb-0 pt-0",
    link: {
      name: "EXPLORE MORE USE CASES",
      link: "/marketplace",
    }
  }

}