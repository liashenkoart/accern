export const page = {
  seo: {
    title: "Accern - Data",
    meta: [
      { name: "description", content: "Data" },
      { property: "og:title", content: "Data" },
      { property: "og:description", content: "We are accelerating AI adoption for enterprises with a no-code development platform."},
      { property: "og:image", content: "../../assets/img/logo.svg" },
    ],
  },
  hero: {
    label: "Data Store",
    title: "Select Datasets for Your <strong>AI Solutions</strong>",
    titleCL: "mw-580",
    description: "Accern comes integrated with one of the largest unstructured news, reports, and social media data marketplaces. In addition, you can upload your internal documents or existing data subscriptions to Accern to build your AI solutions.",
    img: "data-illustration.svg",
    variant: "fluid",
    button: {
      name: "GET A DEMO",
      modal: "request"
    },
    form: {
      isActive: false,
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

  integratedData: {
    title: "Integrated Data Marketplace",
    description: "We take care of the time-consuming process of procuring, licensing, cleaning, normalizing, and integrating various unstructured text data sources for you. Simply select the data source you are interested in using on our platform to activate it for your AI solution.",
    img: "integrated-data-illustration.svg",
    className: "bg-light",
    reverse: true,
  },

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    columns: [
      { title: "AutoML Taxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", link: "/auto-taxonomy", icon: "icon-taxonomy.svg"},
      { title: "Adaptive NLP Models", description: "Check out various NLP models that you can use out-of-the-box or retrain for your needs.", link: "/adaptive-nlp", icon: "icon-adaptive-nlp.svg"},
      { title: "Deployments", description: "Select from a list of secured deployment options.", link: "/deployments", icon: "icon-deployment.svg"},
      { title: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", link: "/integrations", icon: "icon-integrations.svg"},
    ]
  },

  dataSubscriptions: {
    title: "Connect Existing Data Subscriptions",
    titleCL: "mw-440",
    description: "We can help you navigate and connect your existing data subscription services to Accern in a secured environment.",
    className: "bg-light",
    columns: [
      { title: "Bloomberg", icon: "icon-bloomberg.png",},
      { title: "FactSet", icon: "icon-factset.png",},
      { title: "Markit", icon: "icon-markit.png",},
      { title: "Morningstar", icon: "icon-morningstar.png",},
      { title: "Refinitiv", icon: "icon-refinitive.png",},
      { title: "S&P Capital IQ", icon: "icon-capital.png",},
      { title: "SIX Financial", icon: "icon-financial.png",},
      { title: "Thomson Reuters", icon: "icon-thomson-reuters.png",},
      { title: "NewsCred", icon: "icon-news-cred.png",},
      { title: "Financial Times", icon: "icon-financial-times.png",},
    ]
  },

  internalData: {
    title: "Connect Your Internal Data",
    titleCL: "mw-440",
    description: "We are comptabile with multiple unstructured text data formats. Simply connect your internal data to our platform to build your AI solutions.",
    link: {link:"/integrations", name:"View Our Integrations"},
    columns: [
      { title: "Webpages", label: "(HTML)", icon: "icon-webpages.svg"},
      { title: "Data Feed", label: "(XML, JSON, CSV)", icon: "icon-data-feed.svg"},
      { title: "Emails", icon: "icon-emails.svg"},
      { title: "Word", label: "(DOCX)", icon: "icon-word.svg"},
      { title: "Excel", label: "(XLS)", icon: "icon-excel.svg"},
      { title: "Powerpoint", label: "(PPT)", icon: "icon-powerpoint.svg"},
      { title: "PDFs", label: "(PDF)", icon: "icon-pdf.svg"},
      { title: "Text Files", label: "(TXT)", icon: "icon-txt.svg"},
    ]
  },

  socials: {
    badgeSuccess: "In Platform",
    badgeError: "On Request",
    columns: [
      { title: "News", status: "online", badge: "In Platform",  description: "45,000 sources of global, regional and local news.", icon: "icon-news.svg", iconH: "icon-news-h.svg"},
      { title: "Blogs", status: "online", badge: "In Platform", description: "Over 1 billion indexed worldwide blogs.", icon: "icon-blogs.svg", iconH: "icon-blogs-h.svg"},
      { title: "Dow Jones", status: "online", badge: "In Platform", description: "Accern News Analytics, Powered By Dow Jones Institutional Newswire", icon: "icon-dow-jones.svg", iconH: "icon-dow-jones-h.svg"},
      { title: "SEC", status: "online", badge: "In Platform", description: "10Ks real-time SEC filings available to use in your AI solutions.", icon: "icon-sec.svg", iconH: "icon-sec-h.svg"},
      { title: "Broadcast News", status: "offline", badge: "On Request", description: "Transcripts of the U.S. TV & radio markets.", icon: "icon-broadcast-news.svg", iconH: "icon-broadcast-news-h.svg"},
      { title: "Videos", status: "offline", badge: "On Request", description: "A wide array of video hosting sites that hold a massive collection of content.", icon: "icon-videos.svg", iconH: "icon-videos-h.svg"},
      { title: "Reviews", status: "offline", badge: "On Request", description: "200+ review sites focused on consumer products and travel.", icon: "icon-reviews.svg", iconH: "icon-reviews-h.svg"},
      { title: "Message Boards", status: "offline", badge: "On Request", description: "Millions of global communities debating every topic imaginable.", icon: "icon-message-boards.svg", iconH: "icon-message-boards-h.svg"},
      { title: "VKontakte", status: "offline", badge: "On Request", description: "The largest social network and most-visited site in Russia.", icon: "icon-vkontakte.svg", iconH: "icon-vkontakte-h.svg"},
      { title: "Weibo", status: "offline", badge: "On Request", description: "China’s largest public social network.", icon: "icon-weibo.svg", iconH: "icon-weibo-h.svg"},
      { title: "Reddit", status: "offline", badge: "On Request", description: "The front page of the internet with deeply engaged community commenting.", icon: "icon-reddit.svg", iconH: "icon-reddit-h.svg"},
      { title: "Disqus", status: "offline", badge: "On Request", description: "The largest independent commenting platform reacting to news in real time.", icon: "icon-disqus.svg", iconH: "icon-disqus-h.svg"},
      { title: "Wordpress", status: "offline", badge: "On Request", description: "Posts and comments from Worldpress.com and popular WP-powered sites globally.", icon: "icon-wordpress.svg", iconH: "icon-wordpress-h.svg"},
      { title: "Verticalscope", status: "offline", badge: "On Request", description: "Hundreds of major communities covering a lot of topics.", icon: "icon-verticalscope.svg", iconH: "icon-verticalscope-h.svg"},
      { title: "Tencent", status: "offline", badge: "On Request", description: "Reactions to China’s news.", icon: "icon-tencent.svg", iconH: "icon-tencent-h.svg"},
      { title: "Twitter", status: "offline", badge: "On Request", description: "One of the largest microblogging services, with over 300 million tweets/day.", icon: "icon-twitter.svg", iconH: "icon-twitter-h.svg"},
    ]
  },

  dataPartner: {
    title: "Data Partner",
    description: "We’re always excited about new partnerships. Become Our Data Partner!",
    button: {
      name: "Become Our Data Partner",
      modal: "request"
    }
  }
}