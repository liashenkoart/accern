export const page = {
  hero: {
    label: "Accern PRICING",
    title: "Flexible plans that <strong>grow</strong> with you.",
    titleCL: "mw-500",
    description: "As businesses grow, needs change. We will support and adapt based on your needs.",
    descriptionCL: "mw-400",
    img: "pricing-hero-illustration.svg",
  },

  cta: {
    description: "All plans are by business unit. For an enterprise-wide plan, please contact us at <strong><a href='mailto:solutions@accern.com'>solutions@accern.com</a></strong>. ",
  },

  getInTouch: {
    title: "Still have questions?",
    description: "Let us know and we’ll put you on the right path.",
    button: {
      name: "GET IN TOUCH",
      modal: "requestQuote"
    }
  },

  pricing: {
    packages: {
      button: {
        name: "Select Package",
      },
      unitsDescription: "*1 Unit = 2,000 Unicode characters = 1 logical page",
      unitsNotification: "<strong>Units:</strong> Number of logical pages analyzed and delivered",
      labelMonthly: "Monthly Units Included",
      labelFeatures: "Features",
      includedLabels: ["Monthly units included", "Authorized users included", "Simultaneously running models"],
      features: [
        {
          name: "AutoML Taxonomy",
          list: [
            { id: 1, name: "Accern finance taxonomy" },
            { id: 2, name: "Accern community taxonomy" },
            { id: 3, name: "Custom taxonomy builder" },
            { id: 4, name: "AutoML taxonomy generator" }
          ]
        },
        {
          name: "General Adaptive NLP Models",
          list: [
            { id: 5, name: "Document classification" },
            { id: 6, name: "Classification hits" },
          ]
        },
        {
          name: "Financial Adaptive NLP Models",
          list: [
            { id: 7, name: "Entity classification" },
            { id: 8, name: "Theme classification" },
            { id: 9, name: "Relevance analysis" },
            { id: 10, name: "Investment sentiment analysis" },
            { id: 11, name: "Financial securities mapping" },
          ]
        },
        {
          name: "Train Adaptive NLP Models ",
          list: [
            { id: 12, name: "Entity classification" },
            { id: 13, name: "Theme classification" },
            { id: 14, name: "Relevance analysis" },
            { id: 15, name: "Sentiment analysis" },
          ]
        },
        {
          name: "Data Store",
          list: [
            { id: 16, name: "35,000+ global public news websites" },
            { id: 17, name: "1 Billion+ global public blogs" },
            { id: 18, name: "EDGAR 10K/10Q SEC filings" },
            { id: 19, name: "Premium data sources" },
          ]
        },
        {
          name: "Upload Your Own",
          list: [
            { id: 20, name: "Documents" },
            { id: 21, name: "Websites" },
            { id: 22, name: "Taxonomy" },
            { id: 23, name: "NLP Models" },
          ]
        },
        {
          name: "Deployment",
          list: [
            { id: 25, name: "Secured cloud instance" },
            { id: 24, name: "Reserved elastic cloud storage" },
            { id: 26, name: "Real-Time API access" },
            { id: 27, name: "Historic query access" },
          ]
        },
        {
          name: "Integrations",
          list: [
            { id: 28, name: "Built-in Kibana visual platform" },
            { id: 29, name: "Built-in Kafka connectors" },
            { id: 30, name: "3rd party enterprise integrations" },
          ]
        },
        {
          name: "Admin Control & Security",
          list: [
            { id: 31, name: "Admin console and user manager" },
            { id: 32, name: "User sharing permissions" },
            { id: 33, name: "System access and audit logs" },
            { id: 34, name: "256-bit AES and SSL/TLS encrypt" },
            { id: 35, name: "Data loss prevention" },
          ]
        },
        {
          name: "SUPPORT",
          list: [
            { id: 36, name: "Standard support" },
          ]
        },
      ],
      list: [
        {
          name: "Basic",
          icon: "bolt",
          price: "$1,000",
          priceLabel: "Billed annually",
          description: "Explore AI",
          monthlyUnits: "100,000*",
          users: "Unlimited Authorized Users",
          labelAddon: "*Use up to <strong>1,000,000 Monthly</strong> Units via Add-On",
          included: ["100,000*", "1", "5"],
          features: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
            { id: 5, },
            { id: 6, },
            { id: 7, },
            { id: 8, },
            { id: 9, },
            { id: 10, },
            { id: 11, },
            { id: 16, },
            { id: 19, description: "Add-on" },
            { id: 20, },
            { id: 21, },
            { id: 24, },
            { id: 25, description: "25GB", className: "text-primary" },
            { id: 26, },
            { id: 27, },
            { id: 28, },
            { id: 29, },
            { id: 30, description: "1", className: "text-primary" },
            { id: 34, },
            { id: 35, },
            { id: 36, },
          ],
        },
        {
          name: "Professional",
          icon: "bolt-1",
          price: "$2,500",
          priceLabel: "Billed annually",
          description: "Adopt AI",
          monthlyUnits: "500,000*",
          users: "Unlimited Authorized Users",
          labelAddon: "*Use up to <strong>1,000,000 Monthly</strong> Units via Add-On",
          included: ["250,000*", "5", "10"],
          features: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
            { id: 5, },
            { id: 6, },
            { id: 7, },
            { id: 8, },
            { id: 9, },
            { id: 10, },
            { id: 11, },
            { id: 16, },
            { id: 17, },
            { id: 19, description: "Add-on" },
            { id: 20, },
            { id: 21, },
            { id: 22, },
            { id: 23, },
            { id: 24, },
            { id: 25, description: "100GB", className: "text-primary" },
            { id: 26, },
            { id: 27, },
            { id: 28, },
            { id: 29, },
            { id: 30, description: "2", className: "text-primary" },
            { id: 31, },
            { id: 32, },
            { id: 33, },
            { id: 34, },
            { id: 35, },
            { id: 36, },
          ],
        },
        {
          name: "Premium",
          icon: "bolt-2",
          price: "$5,000",
          priceLabel: "Billed annually",
          description: "Scale AI",
          monthlyUnits: "1,000,000*",
          users: "Unlimited Authorized Users*",
          labelAddon: "*Use up to <strong>1,000,000 Monthly</strong> Units via Add-On",
          included: ["1,000,000*", "Unlimited", "Unlimited"],
          isHighlighted: true,
          features: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
            { id: 4, },
            { id: 5, },
            { id: 6, },
            { id: 7, },
            { id: 8, },
            { id: 9, },
            { id: 10, },
            { id: 11, },
            { id: 12, description: "Add-on" },
            { id: 13, description: "Add-on" },
            { id: 14, description: "Add-on" },
            { id: 15, description: "Add-on" },
            { id: 16, },
            { id: 17, },
            { id: 18, },
            { id: 19, description: "Add-on" },
            { id: 20, },
            { id: 21, },
            { id: 22, },
            { id: 23, },
            { id: 24, },
            { id: 25, description: "500GB", className: "text-primary" },
            { id: 26, },
            { id: 27, },
            { id: 28, },
            { id: 29, },
            { id: 30, description: "3", className: "text-primary" },
            { id: 31, },
            { id: 32, },
            { id: 33, },
            { id: 34, },
            { id: 35, },
            { id: 36, },
          ],
        }
      ]
    }
  },

  addons: {
    title: "Explore our Add-ons",
    description: "Explore and add a wide range of premium data, models, integrations, and services to advance your business needs.",
    className: "pb-2",
    list: [
      {
        name: "Units",
        description: "Additional Units are charged based on Customer’s actual consumption of Additional Units in each volume tier. The Additional Unit prices apply to each volume tier separately, i.e., a lower unit price for Additional Units in the next volume tier does not change the higher Unit Price charged for Customer’s consumption of Units in the preceding volume tier.",
        isUnits: true,
        table: {
          type: "simple",
          head: [
            { name: "From Unit", width: "25%", className: "text-primary" },
            { name: "UP TO UNIT", width: "30%", className: "text-gray" },
            { name: "per add. unit", width: "30%", className: "text-gray" },
            { name: "Monthly Total for<br> Add. Units", width: "200px", className: "text-primary" },
          ],
          body: [
            [
              { content: "100,000", className: "text-dark" },
              { content: "499,999", className: "text-gray" },
              { content: "$0.0025", className: "text-gray" },
              { content: "$250", className: "text-dark" },
            ],
            [
              { content: "500,000", className: "text-dark" },
              { content: "999,999", className: "text-gray" },
              { content: "$0.0024", className: "text-gray" },
              { content: "$1250", className: "text-dark" },
            ],
            [
              { content: "1,000,000", className: "text-dark" },
              { content: "9,999,999", className: "text-gray" },
              { content: "$0.0022", className: "text-gray" },
              { content: "$2,450", className: "text-dark" },
            ],
            [
              { content: "10,000,000", className: "text-dark" },
              { content: "49,999,999", className: "text-gray" },
              { content: "$0.0019", className: "text-gray" },
              { content: "$22,250", className: "text-dark" },
            ],
            [
              { content: "50,000,000", className: "text-dark" },
              { content: "99,999,999", className: "text-gray" },
              { content: "$0.0015", className: "text-gray" },
              { content: "$98,250", className: "text-dark" },
            ],
            [
              { content: "100,000,000", className: "text-dark" },
              { content: "" },
              { content: "" },
              { link: { name: "Contact Us", link: "/contact" } },
            ],
          ]
        }
      },
      {
        name: "Support Plans",
        table: {
          type: "without-border",
          head: [
            { name: "", width: "25%" },
            { name: "<h3>Standard</h3><span class='text-primary'>Included in all licenses</span>", className: "pr-5 pl-5 pt-3 pb-3" },
            { name: "<h3>Premier</h3><span class='text-primary'>20% of net subscription<br>fees, billed annually.</span>", className: "pr-5 pl-5 pt-3 pb-3" },
            { name: "<h3>Premier Plus</h3><span class='text-primary'>30% of net subscription<br> fees, billed annually.</span>", className: "pr-5 pl-5 pt-3 pb-3" },
          ],
          body: [
            [
              { content: "Guided journeys", className: "text-dark" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Webinars and events", className: "text-dark" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Access to all white papers", className: "text-dark" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Phone and email (ET business hours) ", className: "text-dark" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Incident Response SLO", className: "text-dark" },
              { content: "24 hours", className: "text-primary text-center" },
              { content: "6 hours", className: "text-primary text-center" },
              { content: "3 hours", className: "text-primary text-center" },
            ],
            [
              { content: "Dedicated success manager", className: "text-dark" },
              { icon: "icon-close", className: "text-error text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Platform and solution set up assistance", className: "text-dark" },
              { icon: "icon-close", className: "text-error text-center" },
              { icon: "allow", className: "text-primary text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
            [
              { content: "Solution developer support", className: "text-dark" },
              { icon: "icon-close", className: "text-error text-center" },
              { icon: "icon-close", className: "text-error text-center" },
              { icon: "allow", className: "text-primary text-center" },
            ],
          ]
        }
      },
      {
        name: "Premium Data Sources",
        table: {
          type: "simple-border",
          head: [
            { name: "Premium Data Providers", width: "25%", className: "" },
            { name: "Premium Source Coverage", width: "50%", className: "" },
            { name: "Price", width: "25%", className: "" },
          ],
          body: [
            [
              { content: "Dow Jones Institutional Newswire", className: "text-primary fw-500" },
              { content: "Global Equities, FX & Fixed Income News, Press Release Wire, Energy and Commodities Wire<br><span class='text-gray'>Historical data and headlines available</span>" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Morningstar - Investment Research Reports", className: "text-primary fw-500" },
              { content: "Thesis/Business Strategy and Outlook, Valuation/Fair Value & Profit Drivers Risk/Risk & Uncertainty, Bulls Say/Bears Say, Financial Health Management/Stewardship, Economic Moat , Stock Analyst Note<br><span class='text-gray'>Historical data available</span>" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "FactSet", className: "text-primary fw-500" },
              { content: "Transcripts, EDGAR filings<br><span class='text-gray'>Historical data available</span>" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Naviga", className: "text-primary fw-500" },
              { content: "Newspapers, business and financial news, newswires, portal magazines, journals, broadcast transcripts, regulatory filings, government documents, press releases, blogs<br><span class='text-gray'>Historical data available</span>" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Socialgist", className: "text-primary fw-500" },
              { content: "Reddit, VKontakte, Weibo, Disqus, Tencent, VerticalScope Quora, message boards, reviews, videos, broadcast news<br><span class='text-gray'>Historical data available</span>" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
          ]
        }
      },
      {
        name: "Premium Models",
        table: {
          type: "simple-border",
          body: [
            [
              { content: "Foreign Language Translation<br><span class='text-gray fw-400 font-italic'>Powered by Google</span>", width: "25%", className: "text-primary fw-500" },
              { content: "Over 100 foreign language translations available.", width: "50%", },
              { link: { name: "Request quote", modal: "requestQuote" }, width: "25%", },
            ],
            [
              { content: "Private Taxonomy", className: "text-primary fw-500", },
              { content: "Your custom taxonomy will be private from third parties." },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Adaptive NLP Model Trainer", className: "text-primary fw-500" },
              { content: "Entity Classification, Theme Classification, Relevance Analysis, Sentiment Analysis" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
          ]
        }
      },
      {
        name: "Deployments & Integrations",
        table: {
          type: "simple-border",
          body: [
            [
              { content: "Dedicated private infrastructure (single-tenant)<br><span class='text-gray fw-400 font-italic'>*Available only for Premium and Enterprise plans</span>", width: "25%" },
              { content: "Access to a private dedicated infrastructure for extra security purposes.", width: "50%" },
              { link: { name: "Request quote", modal: "requestQuote" }, width: "25%" },
            ],
            [
              { content: "Elastic cloud storage (1TB)", },
              { content: "Additional cloud storage for uploading large amounts of data into Accern for analysis. " },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Per integration" },
              { content: "Additional access to third-party delivery (export) options to connect to your workflow. " },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Accern server (on-premise)" },
              { content: "Deploy Accern on-premise or on your cloud server." },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
          ]
        }
      },
      {
        name: "Services",
        table: {
          type: "simple-border",
          body: [
            [
              { content: "Add custom public sources", width: "25%" },
              { link: { name: "Request quote", modal: "requestQuote" }, width: "75%", },
            ],
            [
              { content: "Build custom taxonomy" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Build custom NLP model" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Build custom document parsers" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Train custom adaptive NLP model" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Build custom integration" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Build custom visual dashboard" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
            [
              { content: "Build and set up your use case" },
              { link: { name: "Request quote", modal: "requestQuote" } },
            ],
          ]
        }
      }
    ]
  },

  faq: {
    label: "FAQ",
    list:
      [
        { question: "How do units work?", answer: "A unit is a computational power required to store and process one page of a document. Accern considers one page each chunk of 2000 Unicode characters in a document. For example, a document up to 2,000 Unicode characters would equal one page and therefore require 1 unit to process. While a document over 2,000 and under 4,000 Unicode characters would equal two pages and therefore require 2 units to process. Documents that are imported are free. Accern only charges for documents that your use case outputs." },
        { question: "How long are your contracts?", answer: "All of our contracts require a minimum of one-year commitment, billed annually." },
        { question: "What currencies do you accept?", answer: "We currently only accept the USD currency." },
        { question: "Can I upgrade or downgrade my plan later?", answer: "You can upgrade your plan at any time. However, you are free to downgrade your plan at each annual cycle." },
        { question: "What payments do you accept?", answer: "We accept Wire Transfers, ACH, and Credit/Debit (Visa, MasterCard, American Express, and Discover)." }
      ]
  }
}