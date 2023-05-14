export const settings = {
  projectName: "Accern",
  preloaderTime: 700,
  formApi: "./form-process.php",
  hubspotID: "8216779",
  formID: "dc4bbafe-8fcf-4688-993f-a0322414d111",
  defaultLinkName: "Learn more",
  ghostURL: "https://kumesharoomoogan.ghost.io",
  ghostKey: "6fafb19e84b7fb61946f1beb57",
  ghostVersion: "v3",
  subscribe: "https://accern.us2.list-manage.com/subscribe/post?u=062b50add44565946faa2e749&id=9412e07dd3",
  isGetStarted: false,
  headerButton: {
    isActive: true,
    name: "GET STARTED",
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
      name: "Product", sub: {
        type: "columns-2",
        variant: "auto-width",
        columns: [
          {
            size: 6,
            links: [
              { label: "Connect" },
              { name: "Data", component: "Data", link: "/data", icon: "icon-data-n.svg" },
              { label: "BUILD" },
              { name: "AutoML Taxonomy", component: "AutoTaxonomy", link: "/auto-taxonomy", icon: "icon-automl.svg" },
              { name: "Adaptive NLP", component: "AdaptiveNLP", link: "/adaptive-nlp", icon: "icon-adaptive-nlp-n.svg" },
              { name: "Adaptive Forecasting", component: "AdaptiveForecasting", link: "/adaptive-forecasting", icon: "icon-adaptive-forecasting.svg" },
              { label: "Operationalize" },
              { name: "Deploy", component: "Deployments", link: "/deployments", icon: "icon-deploy.svg" },
              { name: "Integrate", component: "Integrations", link: "/integrations", icon: "icon-integrate.svg" },
            ]
          },
          {
            size: 6,
            className: "nav-sub-cover",
            links: [
              { label: "DETAILS" },
              { name: "Pricing", component: "Pricing", link: "/pricing", icon: "icon-pricing.svg" },
              { name: "Compare", component: "Compare", link: "/compare", icon: "icon-compare.svg" },
              // { name: "Product Updates", component: "ProductUpdates", link: "/product-updates", icon: "icon-product-updates.svg" },
              // { name: "Trial Process", component: "TrialProcess", link: "/trial-process", icon: "icon-trial-process.svg" },
            ]
          },
        ]
      }
    },
    {
      name: "Company", sub: {
        type: "columns-1",
        variant: "simple",
        columns: [
          {
            links: [
              { name: "About Accern", component: "Company", link: "/company", icon: "icon-about.svg" },
              { name: "Customers", component: "CustomerStories", link: "/customers", icon: "icon-customers.svg" },
              { name: "Careers", component: "Careers", link: "/careers", icon: "icon-careers.svg" },
              { name: "Newsroom", component: "NewsRoom", link: "/newsroom", icon: "icon-newsroom.svg" },
              { name: "Partners", component: "Partners", link: "/partners", icon: "icon-about.svg" },
              { name: "Contact us", component: "Contact", link: "/contact", icon: "icon-contactus.svg" },
            ]
          },
        ]
      }
    },
    {
      name: "Solutions", sub: {
        type: "columns-4",
        columns: [
          {
            label: "By Industry",
            size: 3,
            links: [
              { name: "Asset Management", link: "/asset-management", icon: "icon-asset-management.svg" },
              { name: "Private Markets", link: "/private-markets", icon: "icon-private-markets.svg" },
              { name: "Asset Owners", link: "/asset-owners", icon: "icon-wealth-management.svg" },
              { name: "Insurance", link: "/insurance", icon: "icon-insurance-shield.svg" },
              { name: "Banking", link: "/bankers", icon: "icon-banking.svg" },
              { name: "View All Industries", link: "/solutions", variant: "fixed-arrow", action: "solution-filter", data: "industry" },
            ]
          },
          {
            label: "BY SOLUTION",
            size: 3,
            links: [
              { name: "Credit Risk", link: "/credit-risk", icon: "icon-credit-risk.svg" },
              { name: "ESG Investing", link: "/esg-investing", icon: "icon-esg-investing.svg" },
              { name: "Quantitative Research", link: "/quantitative-research", icon: "icon-quantititive-research.svg" },
              { name: "Fundamental Research", link: "/fundamental-research", icon: "icon-fundamental-research.svg" },
              { name: "Financial Crimes", link: "/financial-crimes", icon: "icon-financial-crimes.svg" },
              { name: "View All Solutions", link: "/solutions", variant: "fixed-arrow", action: "solution-filter", data: "function" },
            ]
          },
          {
            label: "BY WORKFLOW",
            size: 3,
            links: [
              { name: "Smart Insights", link: "/smart-insights", icon: "icon-smart-insights.svg" },
              { name: "Smart Extraction", link: "/smart-extraction", icon: "icon-smart-extraction.svg" },
              { name: "Smart Search", link: "/smart-search", icon: "icon-smart-search.svg" },
              { name: "Smart Alerts", link: "/smart-alerts", icon: "icon-smart-alerts.svg" },
              { name: "Smart Recommendations", link: "/smart-recommendations", icon: "icon-smart-recommendations.svg" },
              { name: "View All Workflows", link: "/solutions", variant: "fixed-arrow", action: "solution-filter", data: "workflow" },
            ]
          },
          {
            label: "BY USERS",
            size: 3,
            links: [
              { name: "Business Leaders", component: "BusinessLeaders", link: "/business-leaders", icon: "icon-business-leaders.svg" },
              { name: "Business Analyst", component: "BusinessAnalyst", link: "/business-analyst", icon: "icon-business-analyst.svg" },
              { name: "Data Scientist", component: "DataScientist", link: "/data-scientist", icon: "icon-data-scientist-n.svg" },
              { name: "Data Engineers", component: "DataEngineers", link: "/data-engineers", icon: "icon-data-engineers.svg" },
              { name: "Software Developers", component: "SoftwareDevelopers", link: "/software-developers", icon: "icon-software-developers.svg" },
              { name: "View All Users", link: "/solutions", variant: "fixed-arrow", action: "solution-filter", data: "users" },
            ]
          },
        ]
      }
    },
    { name: "AI MARKETPLACE", component: "Marketplace", link: "/marketplace" },
    { name: "Login", component: "Login", link: "/login" },
    { name: "API & Docs", component: "Documentation", link: "/documentation", excludeNav: true },
    { name: "Terms of Use", link: "/terms_of_use", component: "Terms", excludeNav: true },
    { name: "Support policy", link: "/support_policy", component: "Policy", excludeNav: true },
    { name: "Privacy", link: "/privacy", component: "Privacy", excludeNav: true },
    { name: "Aws Registration", link: "/aws-registration", component: "AwsRegistration", excludeNav: true },
    { name: "NewsRoom", link: "/news-room", component: "NewsRoom", excludeNav: true },
    { name: "Blog", link: "/blog", component: "Blog", excludeNav: true },
    { name: "Post", link: "/post/:postName", component: "Post", excludeNav: true },
    { name: "Category", link: "/category/:catName", component: "Category", excludeNav: true },
    { name: "Blog List", link: "/blog-list", component: "BlogList", excludeNav: true },
    { name: "Blog Bio", link: "/bio/:userId", component: "BlogBio", excludeNav: true },
    { name: "Trading Validation", component: "UserStory", link: "/user-story-next-alpha", data: "next-alpha", icon: "icon-link-data.svg", excludeNav: true },
    { name: "Credit Risk", component: "UserStory", link: "/user-story-fundomate", data: "fundomate", icon: "icon-link-data.svg", excludeNav: true },
    { name: "Request Morningstar", component: "RequestMorningstar", link: "/request-morningstar", excludeNav: true },
    { name: "Request Naviga", component: "RequestNaviga", link: "/request-naviga", excludeNav: true },
    { name: "WhitePapers", link: "/whitepapers", component: "WhitePapers", excludeNav: true },
    { name: "Request Whitepaper", link: "/request-whitepaper", component: "RequestWhitepaper", excludeNav: true },
    { name: "Become Partner", link: "/become-partner", component: "BecomePartner", excludeNav: true },
    { name: "Credit Risk Workflow", component: "CreditRiskWorkflow", link: "/credit-risk-workflow", icon: "icon-credit-risk.svg", excludeNav: true },
    { name: "Course", link: "/course/:courseName", component: "Course", excludeNav: true },
    { name: "University", link: "/university", component: "University", excludeNav: true },
    { name: "Partners", component: "Partners", link: "/partners", excludeNav: true },
    { name: "Courses", component: "Courses", link: "/courses", excludeNav: true },
    { name: "Solutions", component: "Solutions", link: "/solutions", excludeNav: true },
    { name: "Product Managers", component: "ProductManagers", link: "/product-managers", icon: "icon-product-managers.svg", excludeNav: true },
    { name: "Credit Risk", component: "CreditRiskSolution", link: "/credit-risk", excludeNav: true },
    { name: "Claims Management", component: "ClaimsManagement", link: "/claims-management", excludeNav: true },
    { name: "Customer Experience", component: "CustomerExperience", link: "/customer-experience", excludeNav: true },
    { name: "Customer Retention", component: "CustomerRetention", link: "/customer-retention", excludeNav: true },
    { name: "Equity Research", component: "EquityResearch", link: "/equity-research", excludeNav: true },
    { name: "ESG Investing", component: "ESGInvesting", link: "/esg-investing", excludeNav: true },
    { name: "Event-Driven Investing", component: "EventDrivenInvesting", link: "/event-driven-investing", excludeNav: true },
    { name: "Financial Crimes", component: "FinancialCrimes", link: "/financial-crimes", excludeNav: true },
    { name: "Fundamental Research", component: "FundamentalResearch", link: "/fundamental-research", excludeNav: true },
    { name: "Long/Short Equity", component: "LongShortEquity", link: "/long-short-equity", excludeNav: true },
    { name: "Merger Arbitrage", component: "MergerArbitrage", link: "/merger-arbitrage", excludeNav: true },
    { name: "Mergers & Acquisitions", component: "MergersAcquisitions", link: "/mergers-acquisitions", excludeNav: true },
    { name: "Product Recommendations", component: "ProductRecommendations", link: "/product-recommendations", excludeNav: true },
    { name: "Quantitative Research", component: "QuantitativeResearch", link: "/quantitative-research", excludeNav: true },
    { name: "Underwriting", component: "Underwriting", link: "/underwriting", excludeNav: true },
    { name: "Smart Insights", component: "SmartInsights", link: "/smart-insights", excludeNav: true},
    { name: "Smart Search", component: "SmartSearch", link: "/smart-search", excludeNav: true},
    { name: "Smart Alerts", component: "SmartAlerts", link: "/smart-alerts", excludeNav: true },
    { name: "Smart Extraction", component: "SmartExtraction", link: "/smart-extraction", excludeNav: true},
    { name: "Smart Summaries", component: "SmartSummaries", link: "/smart-summaries", excludeNav: true},
    { name: "Smart Recommendations", component: "SmartRecommendations", link: "/smart-recommendations", excludeNav: true},
    { name: "Smart Verification", component: "SmartVerification", link: "/smart-verification", excludeNav: true},

    { name: "Asset Management", component: "AssetManagament", link: "/asset-management", excludeNav: true },
    { name: "Private Markets", component: "PrivateMarkets", link: "/private-markets", excludeNav: true },
    { name: "Asset Owners", component: "AssetOwners", link: "/asset-owners", excludeNav: true },
    { name: "Insurance", component: "Insurance", link: "/insurance", excludeNav: true },
    { name: "Banking", component: "Bankers", link: "/bankers", excludeNav: true },
    { name: "Quantitative Managers", component: "QuantitativeManagers", link: "/quantitative-managers", excludeNav: true },
    
  ],

  footer: {
    columns: [
      {
        title: "Accern",
        description: "We are accelerating AI adoption for enterprises with a no-code development platform.",
      },
      {
        title: "Product",
        rows: [
          { label: "Features" },
          { name: "Data", link: "/data" },
          { name: "AutoML Taxonomy", link: "/auto-taxonomy" },
          { name: "Adaptive NLP", link: "/adaptive-nlp" },
          { name: "Adaptive Forecasting", link: "/adaptive-forecasting" },
          { name: "Deploy", link: "/deployments" },
          { name: "Integrate", link: "/integrations" },
          { label: "Details" },
          { name: "Pricing", link: "/pricing" },
          { name: "Compare", link: "/compare" },
          // { name: "Product Updates", link: "/product-updates" },
          { name: "Request Trial", modal: "request" },
        ]
      },
      {
        title: "COMPANY",
        rows: [
          { name: "About Accern", link: "/company" },
          { name: "Customers", link: "/customers" },
          { name: "Careers", link: "/careers" },
          { name: "Newsroom", link: "/newsroom" },
          { name: "Contact Us", link: "/contact" },
          { name: "Terms & Conditions", link: "/terms_of_use" },
          { name: "Privacy Policy", link: "/support_policy" },
        ]
      },
      {
        title: "Solutions",
        rows: [
          { name: "By Industry", link: "/solutions", action: "solution-filter", data: "industry" },
          { name: "By Function", link: "/solutions", action: "solution-filter", data: "function" },
          { name: "By Workflow", link: "/solutions", action: "solution-filter", data: "workflow" },
          { name: "By Users", link: "/solutions", action: "solution-filter", data: "users" },
        ]
      },
      {
        title: "AI Marketplace",
        rows: [
          { name: "By AI Use Cases", link: "/marketplace" },
          // { name: "By AI Components", link: "/marketplace" },
          // { name: "By AI Apps", link: "/marketplace" },
        ]
      },
      {
        title: "AI University",
        rows: [
          { label: "Documentation" },
          // { name: "Product", link: "/documentation" },
          // { name: "Integration", link: "/documentation" },
          { name: "API", link: "/documentation" },
          // { label: "Learn" },
          // { name: "Courses", link: "/courses" },
          // { name: "Webinars", link: "/webinars" },
          // { name: "Blog", link: "/blog" },
          // { name: "Whitepapers", link: "/whitepapers" },
          // { name: "Glossary", link: "/glossary" },
          { label: "Community" },
          // { name: "Events", link: "/events" },
          // { name: "AI Tutorials", link: "/ai-tutorials" },
          { name: "Become a Contributor", link: "/become-partner" },
        ]
      },
    ],
    socials: [
      { link: "#", icon: "icon-facebook-shape" },
      { link: "#", icon: "icon-twitter-shape" },
      { link: "#", icon: "icon-linkedin-shape" },
      { link: "#", icon: "icon-instagram-shape" },
    ],

    contacts: {
      rows: [
        { name: "+1 (347) 745 6649", link: "tel:+13477456649" },
        { name: "info@accern.com", link: "mailto:info@accern.com" },
      ]
    },

    subscribe: {
      title: "Stay in Touch",
      description: "Get the latest from Accern",
      placeholder: "Email address",
      button: "subscribe",
      message: "Thank You. You are subscribed.",
    },

    copyright: "©2020 Accern Corporation. All Rights Reserved ",
    links: [
      { name: "Terms of Use", link: "/terms_of_use" },
      { name: "Privacy Statement", link: "/privacy" },
      { name: "Cookie Policy", link: "/support_policy" },
    ]
  },

  getstarted: {
    title: "Get started",
    description: "Sign up for a Request Trial of our platform and start accelerating AI within your organization.",
    placeholder: "Email address",
    link: {
      name: "Request Trial",
      modal: "request"
    }
  },

  footerGetStarted: {
    title: "Ready to get started?",
    label: "GET STARTED",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
      name: "GET STARTED",
      modal: "request"
    }
  },

  brands: {
    columns: [
      { link: "", logo: "logo-google.png", className: "preset-img-3" },
      { link: "", logo: "logo-jefferies.png", className: "preset-img-3" },
      { link: "", logo: "logo-moodys.png", className: "preset-img-3" },
      { link: "", logo: "logo-william-blair.png", className: "preset-img-4" },
      { link: "", logo: "logo-allianz.png", className: "preset-img-4" },
      { link: "", logo: "logo-ibm.png", className: "preset-img-6" },
    ]
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced" },
        { name: "subject", type: "text", placeholder: "Subject", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },
      ]
    }
  },

  requestAccess: {
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
      label: "USE CASE NAME",
      title: "Request Access",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "requestAccess",
      fields: [
        { name: "first_name", type: "text", placeholder: "Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced", isFullWidth: true },
      ]
    }
  },

  downloadCaseStudy: {
    title: "AI in Asset Management Whitepaper",
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
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
    Featured: "Featured",
    Newusecases: "New use cases",
    Allusecases: "All use cases",
    ViewMore: "View More",
    Industry: "Industry",
    Workflows: "Workflows",
    Users: "Users",
    News: "News",
    PressRelease: "Press Release",
    Article: "Article",
    IntheNews: "In the News",
    PressRoom: "Press Room",
    ThoughtLeadership: "Thought Leadership",
    Solution: "Solution",
    Role: "Role",
    Producer: "Producer",
    Discover: "Discover",
    Tranding: "Tranding",
    All: "All",
    Latest: "Latest",
    UseCase: "Use Case",
    By: "By",
    In: "In",
    New: "New",
    ViewAll: "View All",
    Random: "Random",
    ReadingList: "Reading List",
    On: "On",
    AwardsandRecognition: "Awards and Recognition",
    Popular: "Popular",
    Workflow: "Workflow",
    ComingSoon: "Coming Soon",
    by: "by",
    AllSolutions: "All Solutions",
    ByIndustry: "By Industry",
    ByFunction: "By Function",
    ByWorkflow: "By Workflow",
    ByUsers: "By Users",
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },

      ]
    }
  },
  downloadWhitepaper: {
    label: "Whitepaper",
    form: {
      from: "Request Whitepaper",
      message: "We’ll be in touch shortly!",
      button: "Download Whitepaper",
      variant: "bordered",
      succesModal: {
        name: "success",
        title: "Thank you for selecting Accern!",
        description: "One of our representatives will contact you within 24 hours with your login details and access to additional resources on how to build your AI use cases. "
      },
      fields: [
        { name: "first_name", type: "text", placeholder: "Full Name", className: "advanced", required: true, pattern: ".{2,}", isFullWidth: true, },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true, isFullWidth: true, },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced", isFullWidth: true, },
        { name: "company", type: "text", placeholder: "Company", className: "advanced", isFullWidth: true, },
        { name: "title", type: "text", placeholder: "Job Title", className: "advanced", isFullWidth: true, },
      ]
    },
  },
  downloadReport: {
    title: "AI in Asset Management Whitepaper",
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
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
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true },
      ]
    }
  },

  industries: [
    { name: "Banks", icon: "bank" },
    { name: "Asset Management", icon: "bank" },
    { name: "Insurance", icon: "bank" }
  ],

  tags: [
    { color: "#1063FE", cover: "shape-rect-md-primary.png" },
    { color: "#75C919", cover: "shape-rect-md-secondary.png" },
    { color: "#FB7F54", cover: "shape-rect-md-danger.png" },
    { color: "#5E4BEF", cover: "shape-rect-md-advanced.png" },
  ],

  categories: [
    {
      name: "Announcements",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#1063FE",
      cover: "shape-rect-md-primary.png",
      icon: "icon-bolt.svg",
      link: "cat-announcements",
      seo: {
        title: "Accern - Announcements",
        meta: [
          { name: "description", content: "Accern - Announcements" },
          { property: "og:title", content: "Accern - Announcements" }
        ],
      },
    },
    {
      name: "Industry Trends",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#75C919",
      cover: "shape-rect-md-secondary.png",
      icon: "icon-pen.svg",
      link: "cat-industry-trends",
      seo: {
        title: "Accern - Industry Trends",
        meta: [
          { name: "description", content: "Accern - Industry Trends" },
          { property: "og:title", content: "Accern - Industry Trends" }
        ],
      },
    },
    {
      name: "Interviews",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#FB7F54",
      cover: "shape-rect-md-danger.png",
      icon: "icon-users-n.svg",
      link: "cat-interviews",
      seo: {
        title: "Accern - Interviews",
        meta: [
          { name: "description", content: "Accern - Interviews" },
          { property: "og:title", content: "Accern - Interviews" }
        ],
      },
    },
    {
      name: "Product Updates",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#5E4BEF",
      cover: "shape-rect-md-advanced.png",
      icon: "icon-tranding-up.svg",
      link: "cat-product-updates",
      seo: {
        title: "Accern - Product Updates",
        meta: [
          { name: "description", content: "Accern - Product Updates" },
          { property: "og:title", content: "Accern - Product Updates" }
        ],
      },
    },
    {
      name: "Category 1",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#5E4BEF",
      cover: "shape-rect-md-advanced.png",
      icon: "icon-tranding-up.svg",
      link: "cat-category-1",
      seo: {
        title: "Accern - Category 1",
        meta: [
          { name: "description", content: "Accern - Category 1" },
          { property: "og:title", content: "Accern - Category 1" }
        ],
      },
    },
    {
      name: "Category 2",
      description: "Thousands of people use Webflow to run and grow their businesses. Here are just a few of their stories.",
      color: "#FB7F54",
      cover: "shape-rect-md-danger.png",
      icon: "icon-users-n.svg",
      link: "cat-category-2",
      seo: {
        title: "Accern - Announcements",
        meta: [
          { name: "description", content: "Accern - Category 2" },
          { property: "og:title", content: "Accern - Category 2" }
        ],
      },
    },
  ]
}