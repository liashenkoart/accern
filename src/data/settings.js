export const settings = {
  projectName: "Accern",
  preloaderTime: 700,
  formApi: "./form-process.php",
  hubspotID: "8216779",
  formID: "dc4bbafe-8fcf-4688-993f-a0322414d111",
  defaultLinkName: "Learn more",
  headerButton: {
    isActive: true,
    name: "Request Trial",
    link: "",
    modal: "request"
  },
  seo: {
    title: "Accern",
    meta: [
      { name: "description", content: "Accern" },
      { property: "og:title", content: "Accern" }
    ],
  },
  navigation: [
    { name: "Home", link: "/", component: "Home", excludeNav: true },
    {
      name: "Why Accern", sub: {
        type: "columns-2",
        columns: [
          {
            label: "Overview",
            size: 3,
            links: [
              { name: "Company", component: "Company", description: "Meet the team and learn how we are changing the world with AI.", link: "/company" },
              { name: "Careers", component: "Careers", description: "Learn about various career paths at Accern and view our open positions.", link: "/careers" },
              { name: "Pricing", component: "Pricing", description: "Explore our various pricing structures.", link: "/pricing" },
            ]
          },
          {
            label: "Features",
            size: 9,
            links: [
              { name: "Data Store", orderMobile: 1, component: "Data", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", link: "/data", icon: "icon-link-data.svg" },
              { name: "AutoML Taxonomy", orderMobile: 2, component: "AutoTaxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", link: "/auto-taxonomy", icon: "icon-link-taxonomy.svg" },
              { name: "Adaptive NLP Models", orderMobile: 3, component: "AdaptiveNLP", description: "Select from a variety of out-of-the-box NLP models or retrain your own model.", link: "/adaptive-nlp", icon: "icon-link-adaptive-nlp.svg" },
              { name: "Deployments", orderMobile: 5, component: "Deployments", description: "Select from a list of secure deployment options.", link: "/deployments", icon: "icon-link-deployment.svg" },
              { name: "Integrations", orderMobile: 6, component: "Integrations", description: "Import data and export solutions seamlessly into your everyday workflows.", link: "/integrations", icon: "icon-link-integrations.svg" },
            ]
          },
        ]
      }
    },
    {
      name: "Solutions", sub: {
        type: "columns-2",
        columns: [
          {
            label: "By Industry",
            size: 9,
            links: [
              { name: "Asset Managers", component: "AssetManagament", description: "Uncover investment ideas, accelerate portfolio intelligence, and manage risk.", link: "/asset-management", icon: "icon-link-data.svg" },
              { name: "Asset Owners", component: "AssetOwners", description: "Perform deeper due diligence, monitor external investments, and manage risk.", link: "/asset-owners", icon: "icon-link-deployment.svg" },
              { name: "Wealth Managers", component: "WealthManagement", description: "Provide consistent, client-specific advice and product recommendations and empower wealth and retail advisors.", link: "/wealth-management", icon: "icon-link-taxonomy.svg" },
              { name: "Quantitative Managers", component: "QuantitativeManagers", description: "Avoid overcrowding, create alternative data sets, and construct accurate investment signals.", link: "/quantitative-managers", icon: "icon-link-integrations.svg" },
              { name: "Private Markets", component: "PrivateMarkets", description: "Construct screening factors, enhance due diligence processes, and monitor portfolio companies.", link: "/private-markets", icon: "icon-link-adaptive-nlp.svg" },
              { name: "Banks", component: "BankingSolution", description: "Enhance due diligence processes, improve lending decisions, increase banking coverage, and manage risk.", link: "/banking-solution", icon: "icon-link-adaptive-nlp.svg" },
              { name: "Insurance", component: "Insurance", description: "Detect fraud, improve underwriting and distribution, and automate the claims management process.", link: "/insurance", icon: "icon-link-adaptive-nlp.svg" },
            ]
          },
          {
            label: "Customers",
            size: 3,
            className: "nav-sub-cover",
            links: [
              { name: "Trading Validation", component: "UserStory", description: "Next Alpha doubled its investments and increased productivity with validation.", link: "/user-story-next-alpha", data: "next-alpha", icon: "icon-link-data.svg" },
              { name: "Credit Risk", component: "UserStory", description: "Fundomate raised its accuracy rate to 94% in terms of predicting risk with Accern’s alternative, non-biased data.", link: "/user-story-fundomate", data: "fundomate", icon: "icon-link-data.svg" },
            ]
          },
        ]
      }
    },
    // {
    //   name: "Resources", sub: {
    //     type: "columns-1",
    //     columns: [
    //       {
    //         size: 12,
    //         links: [
    //           { name: "API Documentation", component: "Documentation", description: "View all of the analytics that are processed by Accern’s AI Platform.", link: "/documentation", icon: "icon-link-data.svg" },
    //         ]
    //       },
    //     ]
    //   }
    // },
    // {
    //   name: "Features", sub: {
    //     type: "columns-3",
    //     columns: [
    //       {
    //         label: "Overview",
    //         size: 2,
    //         links: [
    //           { name: "Company", component: "Company", description: "Meet the team and learn how we are changing the world with AI.", link: "/company" },
    //           { name: "Customers", description: "See how Accern is helping customers to accelerate AI adoption.", isComing: true },
    //           { name: "Careers", description: "Learn about various career paths at Accern and view our open positions.", isComing: true }
    //         ]
    //       },
    //       {
    //         label: "Features",
    //         size: 6,
    //         links: [
    //           { name: "Data Store", orderMobile: 1, component: "Data", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", link: "/data", icon: "icon-link-data.svg" },
    //           { name: "Deployments", orderMobile: 5, component: "Deployments", description: "Select from a list of secured deployment options available.", link: "/deployments", icon: "icon-link-deployment.svg" },
    //           { name: "AutoML Taxonomy", orderMobile: 2, component: "AutoTaxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", link: "/auto-taxonomy", icon: "icon-link-taxonomy.svg" },
    //           { name: "Integrations", orderMobile: 6, component: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", link: "/integrations", icon: "icon-link-integrations.svg" },
    //           { name: "Adaptive NLP Models", orderMobile: 3, component: "AdaptiveNLP", description: "Check out various NLP models which can be used out-of-box or retrain for your use.", link: "/adaptive-nlp", icon: "icon-link-adaptive-nlp.svg" },
    //           { name: "Adaptive Forecasting", orderMobile: 4, description: "Stay tune for our adaptive forecasting capabilities coming soon.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //         ]
    //       },
    //       {
    //         label: "Partnership Program",
    //         size: 4,
    //         className: "nav-sub-cover",
    //         links: [
    //           { name: "Data Partners", description: "Partnering with leading data providers and offering distribution on our platform.", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Technology Partners", description: "Partnering with leading technology companies to embed Accern’s offering.", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Solution Partners", description: "Partnering with subject-matter-experts to use Accern to implement AI solutions.", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Explore all partnerships", isSimple: true },
    //         ]
    //       }
    //     ]
    //   }
    // },
    // {
    //   name: "Solutions", sub: {
    //     type: "columns-1",
    //     columns: [
    //       {
    //         label: "Solutions",
    //         size: 12,
    //         links: [
    //           { name: "Investments", description: "View our solutions around investment research and portfolio risk.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Banking", component: "Banking", description: "View our solutions around credit risk and fraud detection.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Insurance", description: "View our solutions around insurance underwriting and claims automation.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Technology", description: "View our solutions around building new AI features for your core products.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Government", description: "View our solutions around public threats, disease outbreaks, and logistics.", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Life Science", description: "View our solutions for the life science industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Health Care", description: "View our solutions for the health care industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //           { name: "Retail", description: "View our solutions for the Retail industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
    //         ]
    //       },
    //     ]
    //   }
    // },
    { name: "API & Docs", component: "Documentation", link: "/documentation" },
    { name: "Contact", component: "Contact", link: "/contact" },
    { name: "Terms of Use", link: "/terms_of_use", component: "Terms", excludeNav: true },
    { name: "Support policy", link: "/support_policy", component: "Policy", excludeNav: true },
    { name: "Privacy", link: "/privacy", component: "Privacy", excludeNav: true },
    { name: "Documentation", link: "/documentation", component: "Documentation", excludeNav: true, isFluid: true }
  ],

  footer: {
    columns: [
      {
        title: "Accern",
        rows: [
          { name: "55 Broadway", link: "" },
          { name: "New York, NY 10006", link: "" },
          { name: "+1 (347) 745 6649", link: "" },
          { name: "info@accern.com", link: "" }
        ]
      },
      {
        title: "Features",
        rows: [
          { name: "Data Store", link: "/data" },
          { name: "Deployments", link: "/deployments" },
          { name: "AutoML Taxonomy", link: "/auto-taxonomy" },
          { name: "Integrations", link: "/integrations" },
          { name: "Adaptive NLP Models", link: "/adaptive-nlp" },
          { name: "API Documentation", link: "/documentation" },
        ]
      },
      {
        title: "Solutions",
        rows: [
          { name: "Asset Managers", link: "/asset-management"},
          { name: "Asset Owners", link: "/asset-owners"},
          { name: "Wealth Managers", link: "/wealth-management"},
          { name: "Quantitative Managers", link: "/quantitative-managers"},
          { name: "Private Markets", link: "/private-markets" },
          { name: "Banks", link: "/banking-solution" },
          { name: "Insurance", link: "/insurance" },
        ]
      },
      {
        title: "Company",
        rows: [
          { name: "About", link: "/company" },
          { name: "Careers", link: "/careers" },
          { name: "Pricing", link: "/pricing" },
          { name: "Sales", link: "mailto:solutions@accern.com" },
          { name: "Media", link: "mailto:media@accern.com" },
          { name: "Investment", link: "mailto:investments@accern.com" },
          { name: "Partnership", link: "mailto:partners@accern.com" },
        ]
      },
      {
        title: "Customers",
        rows: [
          { name: "Trading Validation", link: "/user-story-next-alpha" },
          { name: "Credit Risk", link: "/user-story-fundomate" },
        ]
      },
    ],
    copyright: "Copyright © 2014 – 2020 Accern Corporation. All Rights Reserved.",
    links: [
      { name: "Terms & conditions", link: "/terms_of_use" },
      { name: "Privacy policy", link: "/support_policy" },
    ]
  },

  getstarted: {
    title: "Get started",
    description: "Sign up for a Request Trial of our platform and start accelerating AI within your organization.",
    placeholder: "Email address",
    link: {
      name: "Request Trial",
      link: ""
    }
  },

  requestTrial: {
    label: "Accern AI Platform",
    title: "Accelerate AI Workflows",
    description: "Request a trial of Accern and start accelerating AI within your organization.",
    customers: {
      label: "Trusted By",
      columns: [
        { icon: "icon-google-flatten.png" },
        { icon: "icon-jefferies-flatten.png", className: "icon-stiny" },
        { icon: "icon-allianz-flatten.png" },
      ],
    },
    form: {
      label: "Get a demo",
      title: "Request Trial",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "requestTrial",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced", isFullWidth: true },
      ]
    }
  },

  requestCaseStudy: {
    form: {
      label: "Case Study",
      title: "Request Case Study",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "file",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced", isFullWidth: true },
      ]
    }
  },

  downloadCaseStudy: {
    title: "AI in Asset Management White Paper",
    description: "This paper discusses the applications of using Natural Language Processing (NLP) within the investment decision and risk management processes, the challenges Asset Managers face in analyzing unstructured data and with building NLP models, and how no-code AI platforms are enabling a more efficient, economic, and quicker adoption of NLP",
    customers: {
      label: "Trusted By",
      columns: [
        { icon: "icon-google-flatten.png" },
        { icon: "icon-jefferies-flatten.png", className: "icon-stiny" },
        { icon: "icon-allianz-flatten.png" },
      ],
    },
    form: {
      label: "Case Study",
      title: "Download the Case Study",
      titleCL: "mw-800",
      message: "That's All, thank you!",
      button: "Download",
      formType: "file",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
      ]
    }
  },

  texts: {
    Thankyou: "Thank you!",
    Wewillbeintouch: "We will be in touch shortly to setup your demo.",
    FindADocument: "Find a Document",
    SectionTitle: "Section Title",
    SectionDescription: "Section Description",
    mo: "mo",
  },

  getInTouch: {
    label: "Accern AI Platform",
    title: "Accelerate AI Workflows",
    description: "Request a trial of Accern and start accelerating AI within your organization.",
    customers: {
      label: "Trusted By",
      columns: [
        { icon: "icon-google-flatten.png" },
        { icon: "icon-jefferies-flatten.png", className: "icon-stiny" },
        { icon: "icon-allianz-flatten.png" },
      ],
    },
    form: {
      label: "Get In Touch",
      title: "Contact Us",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "getInTouch",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },

      ]
    }
  },
  downloadReport: {
    title: "AI in Asset Management White Paper",
    description: "This paper discusses the applications of using Natural Language Processing (NLP) within the investment decision and risk management processes, the challenges Asset Managers face in analyzing unstructured data and with building NLP models, and how no-code AI platforms are enabling a more efficient, economic, and quicker adoption of NLP",
    customers: {
      label: "Trusted By",
      columns: [
        { icon: "icon-google-flatten.png" },
        { icon: "icon-jefferies-flatten.png", className: "icon-stiny" },
        { icon: "icon-allianz-flatten.png" },
      ],
    },
    form: {
      label: "Report",
      title: "Download the Report",
      titleCL: "mw-800",
      message: "That's All, thank you!",
      button: "Download",
      formType: "file",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
      ]
    }
  },
  requestQuote: {
    label: "Accern AI Platform",
    title: "Accelerate AI Workflows",
    description: "Request a quote from Accern and start accelerating AI within your organization.",
    customers: {
      label: "Trusted By",
      columns: [
        { icon: "icon-google-flatten.png" },
        { icon: "icon-jefferies-flatten.png", className: "icon-stiny" },
        { icon: "icon-allianz-flatten.png" },
      ],
    },
    form: {
      label: "pricing",
      title: "Request Quote",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "requestQuote",
      fields: [
        { name: "firstname", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "lastname", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },
      ]
    }
  },
}