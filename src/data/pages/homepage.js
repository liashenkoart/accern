export const page = {
  hero: {
    variant: "simple-video",
    label: "Powered by Artificial Intelligence",
    title: "Accelerate AI Workflows for <span class='text-special-primary'>Financial Services</span> with a No-Code AI Platform.",
    titleCL: "mw-620",
    video: "home-page-video.mp4",
    url: "https://www.youtube.com/embed/0hK7Rholb2c?autoplay=1",
    isVideoModal: true,
    button: {
      name: "Get Started",
      variant: "primary-arrow",
      link: "/login"
    },
    additional: "<span class='text-primary fw-500'>1,000+ AI Use Cases</span> Deployed By Enterprise Teams.",
    brands: [
      { link: "", logo: "logo-google-c.png", className: "preset-img-3" },
      { link: "", logo: "logo-jefferies.png", className: "preset-img-3" },
      { link: "", logo: "logo-allianz-c.png", className: "preset-img-4" },
      { link: "", logo: "logo-moodys-c.png", className: "preset-img-3" },
      { link: "", logo: "logo-ibm-c.png", className: "preset-img-6" },
    ]
  },

  awardsAndPress: {
    label: "Awards and press",
    title: "Accern's Recognition in the <span class='text-special-primary-dark'>Media</span>",
    titleCL: "mw-450",
    className: "bg-primary-cover-5",
    button: {
      name: "View Newsroom",
      variant: "link",
      link: "/newsroom",
    },
    columns: [
      { logo: "forbes-img.png", className: "icon-carousel", /* link: {link: "https://www.fusionfund.com/"} */ },
      { logo: "fortune.svg", className: "icon-carousel-2", },
      { logo: "cropped-AlleyWatch_header-compressor.png", className: "icon-carousel-4", },
      { logo: "ceomoney_logo_lg.png", className: "icon-carousel-4", },
      { logo: "logo-ibt.svg", className: "icon-carousel", },
      { logo: "quartz-logo.svg", className: "icon-carousel-1", },
      { logo: "twincities-logo.svg", className: "icon-carousel", },
      { logo: "routers.svg", className: "icon-carousel", },
      { logo: "EIN_claim-color_positive.svg", className: "icon-carousel", },
      { logo: "yahoo_finance_en-US_h_p_financev2.png", className: "icon-carousel-2", },
      { logo: "logo-cision-pr.png", className: "icon-carousel", },
    ],
    columns2: [
      { logo: "INSURTECH_100_Black_ground-1.png", className: "icon-carousel-4", /* link: {link: "https://www.fusionfund.com/"} */ },
      { logo: "plug-and-play-logo-blue.png", className: "icon-carousel-2", },
      { logo: "data-trade-logo.svg", className: "icon-carousel-4", },
      { logo: "benzinga-logo.png", className: "icon-carousel", },
      { logo: "financial-report-logo.png", className: "icon-carousel", },
      { logo: "crn-logo.png", className: "icon-carousel-1", },
      { logo: "cnyb_logo_illus5_2015redesign_black.png", className: "icon-carousel", },
      { logo: "Benzinga-logo-navy.svg", className: "icon-carousel-3", },
      { logo: "prn_cision_logo_desktop.png", className: "icon-carousel-2", },
    ]
  },

  aiMarketplace: {
    label: "AI Marketplace",
    title: "Ready-made use cases for <span class='text-special-primary-dark'>Financial Services</span>",
    description: "Over 400 ready-made use cases are available for immediate deployment across asset management, banking, insurance, and more.",
    variant: "case",
    button: {
      name: "Explore AI Marketplace",
      variant: "link",
      link: "/marketplace",
    },
  },

  ourmission: {
    label: "Our Mission",
    title: "We accelerate innovation for financial enterprises with a no-code AI platform.",
    titleCL: "mw-580",
    description: "Some of the world's best data science teams are using Accern to accelerate their NLP and Predictive Modeling workflows.",
    className: "bg-primary-05",
    columns: [
      {
        icon: "icon-ready-for-bussines.svg",
        title: "Ready for Business",
        description: "Get started with our ready-made AI industry use cases to accelerate your business immediately."
      },
      {
        icon: "icon-settings.svg",
        title: "Build in Minutes",
        description: "Build AI solutions within minutes and deploy it by using our no-code AI platform."
      },
      {
        icon: "icon-secure-and-scalable.svg",
        title: "Secure and Scalable",
        description: "Your data is highly secured with our enterprise-grade platform, we can scale up or down based on your needs."
      },
    ]
  },

  featuredClient: {
    clients: [
      {
        label: "FEATURED CUSTOMER",
        title: "The Next Alpha team put $10 million and four years into the Next Alpha AI technology. It could have easily been double the cost and effort without the help from Accern.",
        img: "next-alpha-avatar.png",
        button: {
          name: "View all Customer Stories",
          link: "/customers"
        }
      }
    ]
  },

  resources: {
    label: "Resources",
    title: "Learning <span class='text-special-primary-dark'>Resources</span>",
    titleCL: "mw-800",
    description: "Our resources cover everything you need to start building your own AI use cases without code.",
    links: [
      {
        title: "Blog",
        description: "Discover the world of AI through thought leaderships articles and community content.",
        icon: "icon-blog-a.svg",
        link: "/blog",
        size: "4",
        theme: "t1"
      },
      {
        title: "Pricing",
        description: "Accern features flexible pricing options that grow with you.",
        icon: "icon-pricing-a.svg",
        link: "/pricing",
        size: "4",
        theme: "t2"
      },
      {
        title: "Careers",
        description: "Help us in democratizing AI and making data accessible to everyone.",
        icon: "icon-careers-a.svg",
        link: "/careers",
        size: "4",
        theme: "t3"
      },
      {
        title: "Accern University",
        description: "Accern University is your guide to uncovering Accern. We cover everything you need — from navigating the platform to expert features.",
        descriptionCL: "mw-520",
        icon: "icon-accern-university-a.svg",
        link: "/university",
        size: "8",
        theme: "t4"
      },
      {
        title: "Reference",
        description: "Uncover each feature and interface component in Accern through detailed documentation.",
        icon: "icon-documentation-a.svg",
        link: "/documentation",
        size: "4",
        theme: "t5"
      },
    ]
  },

  services: {
    label: "No-Code AI Platform",
    title: "Build and Deploy <span class='text-special-primary-dark'>AI Use</span> <span class='text-special-primary-dark'>Cases</span> In Minutes",
    className: "pt-0",
    columns: [
      {
        title: "Data Store",
        subTitle: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis. You can also choose from a wide collection of public and premium datasets available in our data store for immediate use.",
        label: "Select Or Upload Your Data",
        video: "data-store-feature.mp4",
        icons: [
          {img: "data-icon-1.png"},
          {img: "data-icon-2.png"},
          {img: "data-icon-3.png"},
          {img: "data-icon-4.png"},
          {img: "data-icon-5.png"},
          {img: "data-icon-6.png"},
          {img: "data-icon-7.png"},
          {count: "+30"},
        ],
        button: {
          name: "Explore Data Store",
          link: "/data"
        },
      },
      {
        title: "Taxonomy",
        subTitle: "Unstructured Data Compatibility",
        description: "Our Taxonomy generator uses AutoML to automate classifiers for your industry documents. Or, if you want a quicker start, you can use our pre-built classifiers or simply upload your own to Accern.",
        label: "Select Or Create Your Taxonomy",
        video: "taxonomy-feature.mp4",
        blocks: [
          {
            title: "Public Companies",
            description: "40,000+",
            img: "taxonomy-icon-1.png"
          },
          {
            title: "Private Companies",
            description: "10,000+",
            img: "taxonomy-icon-2.png"
          },
          {
            title: "Commodities",
            description: "60+",
            img: "taxonomy-icon-3.png"
          },
          {
            title: "C-Suite Executives",
            description: "10,000+",
            img: "taxonomy-icon-4.png"
          },
          {
            title: "Financial Events",
            description: "200+",
            img: "taxonomy-icon-5.png"
          },
          {
            title: "Forex",
            description: "19+",
            img: "taxonomy-icon-6.png"
          },
          {
            title: "Theme Classifiers",
            description: "35+",
            img: "taxonomy-icon-7.png"
          },
          {
            title: "Products",
            description: "20,000+",
            img: "taxonomy-icon-8.png"
          }
        ],
        button: {
          name: "Explore Taxonomy",
          link: "/auto-taxonomy"
        },
      },
      {
        title: "Adaptive NLP Models",
        subTitle: "Unstructured Data Compatibility",
        description: "Browse one of the largest collections of adaptive NLP models for finance, which you can use immediately. In addition, you can retrain each of our models to fit your needs or simply upload your own NLP models.",
        label: "Select Or Trial Your Models",
        video: "nlp-feature.mp4",
        bars: [
          {
            name: "Entity Extraction Accuracy", perc: "99.7"
          },
          {
            name: "Event Extraction Accuracy", perc: "96.55"
          },
          {
            name: "Relevancy Identification Accuracy", perc: "99.7"
          },
          {
            name: "Sentiment Analysis Accuracy", perc: "93.5"
          }
        ],
        button: {
          name: "Explore Adaptive NLP Models",
          link: "/adaptive-nlp"
        },
      },
      {
        title: "Delivery",
        subTitle: "Unstructured Data Compatibility",
        description: "We have hundreds of integrations with popular business applications and databases, which allows for seamless import of your data to Accern and quick export of your AI solutions to your everyday workflow apps.",
        label: "Select or Connect Your Workflow Apps",
        video: "delivery-feature.mp4",
        icons: [
          {img: "delivery-icon-1.png"},
          {img: "delivery-icon-2.png"},
          {img: "delivery-icon-3.png"},
          {img: "delivery-icon-4.png"},
          {img: "delivery-icon-5.png"},
          {img: "delivery-icon-6.png"},
          {img: "delivery-icon-7.png"},
          {img: "delivery-icon-8.png"},
        ],
        button: {
          name: "Explore Delivery",
          link: "/deployments"
        },
      },
    ]
  }
}