export const page = {
  hero: {
    label: "Powered by Artificial Intelligence",
    title: "Accelerate AI for",
    strings: ['Asset Management', 'Banking', 'Insurance'],
    img: "home-hero-illustration.png",
    form: {
      isActive: true,
      button: "Request Trial",
      placeholder: "Email address",
    },
    loginLink: {
      isActive: false,
      label: "Already a customer?",
      name: "Sign In",
      link: "/login"
    },
  },

  solutions: {
    label: "Customers",
    title: "Check out our customer success stories",
    columns: [
      { title: "Saved $10M in R&D Expenses for Asset Manager", icon: "icon-increased.svg", link: {name: "Download Case Study", action: "download-case-study", data: "next-alpha"} },
      { title: "Improved Credit Risk Accuracy by 7% for SMB Lender", icon: "icon-deployed.svg", link: {name: "Download Case Study", action: "download-case-study", data: "fundomate"} },
      { title: "Deployed AI Solutions 24x Faster for Asset Manager", icon: "icon-automated.svg", link: {name: "Request Case Study", modal: "requestCaseStudy"} },
    ]
  },

  industry: {
    label: "Industry Solutions",
    title: "Get started with our ready-made AI industry solutions.",
    isShape: true,
    columns: [
      { title: "Investments", description: "Explore solutions around investment research and portfolio risk.", icon: "icon-investments.svg"},
      { title: "Banking", description: "Explore solutions around credit risk and fraud detection.", icon: "icon-bank.svg"},
      { title: "Insurance", description: "Explore solutions around underwriting and claims automation.", icon: "icon-insurance.svg"},
      { title: "Technology", description: "Explore solutions around embedded AI feature enhancements.", icon: "icon-technology.svg"},
      { title: "Government", description: "Explore solutions around public threats, disease outbreaks, and logistics.", icon: "icon-government.svg"},
    ]
  },

  features: {
    isReducedMargin: true,
    className: "fluid-images",
    rows: [
      {
        label: "Data Store",
        title: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis. You can also choose from a wide collection of public and premium datasets available in our data store for immediate use.",
        img: "data-illustration.svg",
        link: {
          link: "/data",
          name: "Explore Data Store"
        }
      },
      {
        label: "AutoML Taxonomy",
        title: "Auto Machine-Learning Taxonomy",
        description: "Our Taxonomy generator uses AutoML to automate classifiers for your industry documents. Or, if you want a quicker start, you can use our pre-built classifiers or simply upload your own to Accern.",
        img: "taxonomy-illustration.svg",
        link: {
          link: "/auto-taxonomy",
          name: "Explore AutoML Taxonomy"
        }
      },
      {
        label: "Adaptive NLP Models",
        title: "Adaptive NLP Models",
        description: "Browse one of the largest collections of adaptive NLP models for finance, which you can use immediately. In addition, you can retrain each of our models to fit your needs or simply upload your own NLP models.",
        img: "adaptive-models-illustration.svg",
        link: {
          link: "/adaptive-nlp",
          name: "Explore Adaptive NLP Models"
        }
      },
      {
        label: "Deployments",
        title: "Secured & Flexible Deployment Options",
        description: "We have a wide variety of deployment options to fit your security needs. If you want advanced enterprise-grade security, we can deploy and manage a private dedicated cloud instance or set up an on-premise deployment for you.",
        img: "deployment-illustration.svg",
        link: {
          link: "/deployments",
          name: "Explore Deployments"
        }
      },
      {
        label: "Integrations",
        title: "Seamless Workflow Integrations",
        description: "We have hundreds of integrations with popular business applications and databases, which allows for seamless import of your data to Accern and quick export of your AI solutions to your everyday workflow apps.",
        img: "integrations-illustrations.svg",
        link: {
          link: "/integrations",
          name: "Explore Integrations"
        }
      },
    ]
  },

  aiplatform: {
    label: "Accern AI Platform",
    titleEF: "Build and deploy",
    title: "AI solutions in minutes.",
    className: "pt-0",
    columns: [
      { title: "Data Scientist", icon: "icon-data-scientist.svg", link: "" },
      { title: "Business Analysts", icon: "icon-business-analysts.svg", link: "" },
      { title: "Data Engineer", icon: "icon-data-engineer.svg", link: "" },
      { title: "Software Developer", icon: "icon-software-developer.svg", link: "" },
      { title: "IT Professionals", icon: "icon-it-professionals.svg", link: "" },
    ]
  },

  awards: {
    label: "Award & Recognition",
    columns:
      [
        { name: "Forbes 30 Under 30", description: "Enterprise Tech", logo: "forbes.png", link: "#" },
        { name: "Top 10 AI Software", description: "O’Reilly and Intel AI", logo: "oreilly.png", link: "#" },
        { name: "Best Data Analysis", description: "Benzinga FinTech Awards", logo: "benzinga.png", link: "#" },
        { name: "Top Text Parser", description: "J.P.Morgan", logo: "jpmorgan.svg", link: "#" },
      ]
  },

  advantages: {
    img: "advantages-illustration.svg",
    columns:
      [
        { title: "Ready for Business", description: "Get started with our ready-made AI industry solutions to accelerate your business immediately.", icon: "icon-box.svg" },
        { title: "Build in Minutes", description: "Build AI solutions within minutes and deploy it by using our no-code AI platform.", icon: "icon-clock.svg" },
        { title: "Enterprise Secure and Scalable", description: "Your data is highly secured with our enterprise-grade platform, and we can scale up or down based on your needs.", icon: "icon-shield.svg" },
      ]
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

  ourmission: {
    label: "Our Mission",
    title: "We are accelerating AI adoption for enterprises with a no-code development platform.",
    titleCL: "mw-580",
    description: "Some of the world's best data science teams are using Accern to accelerate their NLP and Predictive Modeling workflows.",
    link: {
      name: "Learn More",
      link: "/company",
    }
  }
}