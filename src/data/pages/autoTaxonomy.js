export const page = {
  hero: {
    label: "AutoML Taxonomy",
    title: "Build industry taxonomy using <strong>AutoML</strong>",
    titleCL: "mw-580",
    description: "Accern provides a taxonomy generator that can help you build specific industry taxonomy at scale using AutoML. You can also use our pre-built taxonomy to get started immediately, or simply upload your own.",
    variant: "simple-video",
    video: "taxonomy-video.mp4",
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

  financeTaxonomy: {
    title: "Pre-Built Finance Taxonomy",
    titleCL: "mw-440",
    description: "We take care of the time-consuming process of building out a taxonomy for the financial service industry. Simply select the taxonomy you’re interested in using on our platform to apply it to your documents.",
    className: "bg-light",
    columns: [
      { title: "Public Companies", label: "40,000+", icon: "icon-public-companies.svg" },
      { title: "Private Companies", label: "10,000+", icon: "icon-private-companies.svg" },
      { title: "Cryptocurrencies", label: "100+", icon: "icon-cryptocurrencies.svg" },
      { title: "Commodities", label: "60+", icon: "icon-commodities.svg" },
      { title: "Forex", label: "19+", icon: "icon-forex.svg" },
      { title: "C-Suite Executives", label: "10,000+", icon: "icon-c-suite-executives.svg" },
      { title: "Products", label: "20,000+", icon: "icon-products.svg" },
      { title: "Subsidiaries", label: "10,000+", icon: "icon-subsidiaries.svg" },
      { title: "Themes Classifiers", label: "35+", icon: "icon-theme-classifiers.svg" },
      { title: "Financial Events", label: "200+", icon: "icon-financial-events.svg" },
    ]
  },

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    className: "bg-light mb-spacer",
    columns: [
      { title: "Data Store", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", icon: "icon-data.svg" },
      { title: "Adaptive NLP Models", description: "Check out various NLP models that you can use out-of-the-box or retrain for your needs.", icon: "icon-adaptive-nlp.svg" },
      { title: "Deployments", description: "Select from a list of secured deployment options.", icon: "icon-deployment.svg" },
      { title: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", icon: "icon-integrations.svg" },
    ]
  },

  features: {
    rows: [
      {
        title: "Adaptive Learning Entity Classification",
        titleCL: "mw-500",
        description: "Using Named Entity Recognition (NER), we are able to automate multiple variations from a list of entities such as companies, people, places, and more. You can use our existing data corpus or upload your own industry-specific corpus as a training set to build your entity's taxonomy.",
        img: "adaptive-learning-illustration.svg",
        link: {
          name: "Request Whitepaper",
          modal: "request"
        }
      },
      {
        title: "Adaptive Learning Theme Classification",
        titleCL: "mw-500",
        description: "Using Latent Dirichlet Allocation (LDA), we are able to automate multiple important themes related to your set of industry documents. Using adaptive learning models, we can keep generating new themes as they appear in documents.",
        img: "adaptive-learning-theme-illustration.svg",
        link: {
          name: "Request Whitepaper",
          modal: "request"
        }
      },
      {
        title: "Upload Your Own Taxonomy",
        description: "If you have an existing taxonomy that you have spent months or years building, you can simply connect it to Accern for immediate use. We save you countless hours by allowing you to reuse what you have already built.",
        img: "upload-taxonomy-illustration.svg",
      },
    ]
  },
}