export const page = {
  hero: {
    label: "Compare Accern",
    title: "Accern vs <strong>Lexalytics</strong>",
    description: "Looking for an alternative AI platform to Lexalytics? Meet Accern's No-Code AI platform.",
    descriptionCL: "mw-500",
    variant: "lines",
    theme: "primary v2",
    logo: "logo-lexaltics.png",
    className: "mt-5",
    button: {
      name: "Get Started",
      link: "/contact",
      variant: "primary-arrow"
    }
  },

  meet: {
    isMiddle: true,
    rows: [
      {
        label: "MEET ACCERN",
        title: "Looking for an alternative to Lexalytics? Meet Accern.",
        titleCL: "mw-600",
        description: "From providing the most innovative no-code AI platform to hosting the largest integrated data store, ready-made use cases, pre-built taxonomies, and more, find out what sets Accern apart.",
        img: "csv-import.svg",
      },
    ]
  },

  csv: {
    isWithoutPadding: true,
    isMiddle: true,
    className: "sect-spacer bordered pt-0 pb-0",
    rows: [
      {
        label: "Already Using Lexalytics?",
        title: "Make the switch to <span class='text-special-primary-dark'>Accern's</span> No-Code AI platform.",
        titleCL: "mw-600",
        description: "Customers can easily switch from Lexalytics to Accern in a few easy steps. Go to our trial process page to learn more or contact us at <a href='mailto:solutions@accern.com'>solutions@accern.com</a>.",
        img: "csv-import.svg",
        link: {
          className: "mt-4 d-block",
          name: "Get Started Now",
          link: "/contact",
          variant: "link",
        }
      },
    ]
  },

  vs: {
    label: "Compare",
    title: "How <span class='text-special-primary'>Accern</span> is standing out features here comparing.",
    titleCL: "mw-700",
    opponents: [
      {
        img: "logo.svg"
      },
      {
        img: "logo-lexaltics.png"
      }
    ],
    section: {
      title: "Analyze Data and Build NLP Models",
      description: "Analyze data from various structured and unstructured sources and use NLP models for valuable insights.",
      rows: [
        {
          item: {
            title: "Ready-Made Use Cases",
            description: "Deploy ready-made use cases for various financial services to obtain immediate insights.",
            start: "5%",
            end: "50%"
          },
          opponents: [
            {
              description: "Over 400 AI use cases for financial services enterprises.",
              img: "logo-accern-gray-sm.png"
            },
            {
              description: "Access an NLP toolkit to build models.",
              img: "logo-lexaltics-gray.png"
            }
          ],
        },
        {
          item: {
            title: "Data Store",
            description: "Analyze structured and unstructured data sources.",
            start: "10%",
            end: "30%"
          },
          opponents: [
            {
              description: "Access the largest unstructured data marketplaces integrated in Accern with over 1 billion public and premium sources.",
              img: "logo-accern-gray-sm.png"
            },
            {
              description: "Data can only be input and monitored from Semantria.",
              img: "logo-lexaltics-gray.png"
            }
          ],
        }
      ]
    }
  },

  comparing: {
    label: "COMPARISON",
    title: "<span class='text-special-primary-dark'>Accern</span> and Lexalytics",
    titleCL: "mw-700",
    className: "bg-primary-cover-5",
    rows: [
      {
        columns: [
          { name: "" },
          { logo: "logo.svg" },
          { logo: "logo-lexaltics.png" },
        ]
      },
      {
        columns: [
          { name: "Ready-made use cases" },
          { name: "Accern offers an AI Marketplace with over 400 ready-made use cases. Use cases include but are not limited to credit risk, ESG, macroeconomic, M&As, and natural disaster insights." },
          { name: "Lexalytics offers an NLP toolkit to build your own models, with semi-customizable features." },
        ]
      },
      {
        columns: [
          { name: "Adaptive NLP" },
          { name: "Pre-trained adaptive NLP models, and a no-code NLP model trainer. Pre-trained adaptive NLP features include document, entity, and theme classifications, sentiment and relevance analyses, foreign language translations, financial securities mapping, and summarization." },
          { name: "Build NLP models through a toolkit or buy from a vendor.", dotColor: "danger" },
        ]
      },
      {
        columns: [
          { name: "Foreign Language Translations" },
          { name: "108+ different languages" },
          { name: "24 languages and dialects", dotColor: "danger" },
        ]
      },
      {
        columns: [
          { name: "Data Store" },
          { name: "Access to the largest unstructured news, reports, and social media data marketplaces. Datasets include over 1 billion global public news, websites, blogs, Dow Jones Newswires, Naviga, Factset, Morningstar, EDGAR, and more." },
          { name: "Store internal datasets in Semantria.", dotColor: "danger" },
        ]
      },
      {
        columns: [
          { name: "Real-Time Monitoring" },
          { name: "Monitor public and premium news and social media in real-time on different companies, events, trends, and more." },
          { name: "Users can monitor the data input into Semantria" },
        ]
      },
      {
        columns: [
          { name: "Speed and Scalability" },
          { name: "Access and analyze content from over 300 million global websites and process over 7 million articles and 150 million social mentions each day." },
          { name: "Analyze up to 200 tweets per second.", dotColor: "danger" },
        ]
      }
    ]
  },

  features: {
    label: "COMPARE FEATURES",
    title: "Platform which does text <span class='text-special-primary-dark'>highlight can be here</span>",
    className: "pb-0",
    columns: [
      {
        title: "Integrations",
        subTitle: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis.",
        list: [
          { name: "Some text here which can be highlighted cool." },
          { name: "Some text here which can be highlighted showing." },
          { name: "Some text here which can be highlighted." },
        ],
        img: "data-img.png",
        button: {
          name: "Explore Data Store",
          link: "/data-store"
        },
      },
      {
        title: "Taxonomy",
        subTitle: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis.",
        img: "data-img.png",
        button: {
          name: "Explore Taxonomy",
          link: "/data-store"
        },
      },
      {
        title: "Adaptive NLP Models",
        subTitle: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis.",
        img: "data-img.png",
        button: {
          name: "Explore Adaptive NLP Models",
          link: "/data-store"
        },
      },
    ]
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

  footerGetStarted: {
    title: "Stay ahead of the market. Enhance your <strong>fund's capabilities</strong> with Accern.",
    label: "GET STARTED",
    button: {
      name: "Talk to sales",
      link: "/contact",
    }
  },
}