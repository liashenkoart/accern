export const page = {
  hero: {
    label: "Adaptive NLP Models",
    title: "The Largest Collection of <strong>Adaptive NLP Models</strong>",
    description: "Browse our collection of proprietary and third-party NLP models, which are powered by adaptive machine-learning. You can retrain any of our models or upload your own.",
    variant: "simple-video",
    video: "home-page-video.mp4",
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

  integratedNLP: {
    title: "The Largest Marketplace for Integrated Adaptive NLP Models",
    titleCL: "mw-440",
    className: "bg-light",
    description: "We have the largest collection of pre-trained and general adaptive NLP models, which you can select and use to build your AI solution.",
    items: [
      {
        name: "Document Classification",
        tag: "General",
        label: "6 features",
        details:
        {
          title: "Document Classification",
          description: "Accern is able to classify and transform your documents into a general structure format.",
          data: {
            "doc_title": "String, Title of the original document",
            "doc_source": "String, Original parent source where the doc is found",
            "doc_type": "String, Classifies stories based on where the stories are published and their mode of access",
            "doc_url": "String, Online url for original document",
            "doc_content": "String, Content of the original document",
            "published_at": "DateTime, The time the original doc was published on"
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Entity Classification",
        tag: "General",
        label: "4 features",
        details:
        {
          title: "Entity Classification",
          description: "Accern is able to classify various entities mentioned within your document.",
          data: {
            "entity_name": "String, Name of entity",
            "entity_hits": "String Array, Text where the entity was tagged",
            "entity_source": "String, Identifies which knowledge graph was used for this entity (primary or custom)",
            "entity_text": "String Array, Text where the entity was tagged",
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Theme Classification",
        tag: "General",
        label: "4 features",
        details:
        {
          title: "Theme Classification",
          description: "Accern is able to classify various themes mentioned within your document.",
          data:
          {
            "event_group": "String, The broader financial events category that contains multiple related events",
            "event": "String, Financial events extracted from the stories. Each signal contains a unique financial event for a specific company",
            "event_hits": "String Array, Text where the event was tagged",
            "event_text": "String Array, Text where the event was tagged",
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Sentiment Analysis",
        tag: "General",
        label: "4 features",
        details:
        {
          title: "Sentiment Analysis",
          description: "Accern’s proprietary sentiment has been trained for finance. We are able to scan and interpret content that has a positive or negative connotation in financial documents.",
          data:
          {
            "entity_sentiment": "Float, Sentiment associated with the entity",
            "event_sentiment": "Float, Sentiment for event in a document",
            "doc_sentiment": "Float, Average sentiment of all entities and events in document.",
            "signal_sentiment": "Float, Average sentiment of entity event pair"
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Relevance Analysis",
        tag: "General",
        label: "4 features",
        details:
        {
          title: "Relevance Analysis",
          description: "Accern is able to determine the relevancy of entities and themes within your documents.",
          data:
          {
            "primary_signal": "boolean, Highest relevance signal for a document",
            "entity_relevance": "Float, Location and occurrence score for an entity",
            "event_relevance": "Float, Location and occurrence score for an event",
            "signal_relevance": "Float, Average of location and occurrence score for entity and event in a signal",
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Summarization",
        tag: "General",
        label: "5 features",
        isComing: true,
        details:
        {
          title: "Summarization",
          description: "Accern’s proprietary sentiment has been trained for finance. We are able to scan and interpret content that has a positive or negative connotation in financial documents.",
          data: {},
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Foreign Language Translations",
        tag: "General",
        label: "3 features; 108+ translations",
        details:
        {
          title: "Foreign Language Translations",
          description: "Accern’s proprietary sentiment has been trained for finance. We are able to scan and interpret content that has a positive or negative connotation in financial documents.",
          isText: true,
          data: "Afrikaans,Albanian,Amharic,Arabic,Armenian,Azerbaijani,Basque,Belarusian,Bengali,Bosnian,Bulgarian,Catalan,Cebuano,Chichewa,Chinese,Corsican,Croatian,Czech,Danish,Dutch,English,Esperanto,Estonian,Filipino,Finnish,French,Frisian,Galician,Georgian,German,Greek,Gujarati,Haitian Creole,Hausa,Hawaiian,Hebrew,Hindi,Hmong,Hungarian,Icelandic,Igbo,Indonesian,Irish,Italian,Japanese,Javanese,Kannada,Kazakh,Khmer,Kinyarwanda,Korean,Kurdish (Kurmanji),Kyrgyz,Lao,Latin,Latvian,Lithuanian,Luxembourgish,Macedonian,Malagasy,Malay,Malayalam,Maltese,Maori,Marathi,Mongolian,Myanmar (Burmese),Nepali,Norwegian,Odia (Oriya),Pashto,Persian,Polish,Portuguese,Punjabi,Romanian,Russian,Samoan,Scots Gaelic,Serbian,Sesotho,Shona,Sindhi,Sinhala,Slovak,Slovenian,Somali,Spanish,Sundanese,Swahili,Swedish,Tajik,Tamil,Tatar,Telugu,Thai,Turkish,Turkmen,Ukrainian,Urdu,Uyghur,Uzbek,Vietnamese,Welsh,Xhosa,Yiddish,Yoruba,Zulu",
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "Financial Securities Mapping",
        tag: "Finance",
        tagCL: "text-danger",
        label: "9 features",
        details:
        {
          title: "Bloomberg OpenFigi Classifiers",
          description: "Accern allows you to map your documents to financial security codes and tickers. This enables you to combine your documents with your financial market data and much more.",
          data: {
            "entity_country": "String, Country where entity is from",
            "entity_region": "String, Region where entity is from",
            "entity_ticker": "String, The traded ticker symbols of the extracted entity",
            "entity_exchcode": "String, string, figi code of exchange where entity (asset class) is listed",
            "entity_figi": "String, string, figi code of entity (asset class)",
            "entity_indices": "String Array, A list of popular indices where the entity is a constituent (asset class)",
            "entity_sector": "String, Sector which entity belongs to",
            "entity_share_class": "String, Share class Fiji code for entity (asset class)",
            "entity_type": "String, Entity classification "
          },
          link: { modal: "request", name: "Request Trial" }
        }
      },
      {
        name: "PDF Parsing & OCR",
        tag: "General",
        label: "0 features",
        isComing: true,
        details:
        {
          title: "PDF Parsing & OCR",
          description: "",
          data: { },
          link: { modal: "request", name: "Request Trial" }
        }
      },
    ]
  },

  industryLeading: {
    title: "Industry Leading NLP Accuracy",
    titleCL: "mw-440",
    description: "We offer industry leading accuracy in entity and event extraction for finance. Our adaptive NLP models have undergone rigorous evaluations. Our benchmark datasets are available for customers to compare our models with third-party models to evaluate our performance.",
    rows: [
      {
        title: "Adaptive NLP Model Accuracy*",
        label: "*Based on US companies extractions.",
        link: { link: "#", name: "Request Whitepaper", modal: "request" },
        stats: [
          { name: "Entity Extraction Accuracy", value: 99.7 },
          { name: "Relevancy Identification Accuracy", value: 99.7 },
          { name: "Event Extraction Precision", value: 96.55 },
          { name: "Sentiment Analysis Accuracy", value: 93.5 },
        ]
      },
    ]
  },

  features: {
    rows: [
      {
        title: "Adaptive NLP Model Trainer",
        description: "We have a no-code, intuitive NLP model trainer that customers use to retrain our models for their specific solutions. With intelligent sampling of content, interactive tagging, and Q&A, you can train an NLP model in no time to be used in your AI solution.",
        img: "adaptive-nlp-trainer-illustration.svg",
      },
      {
        title: "Upload Your Own NLP Models",
        description: "If you have existing NLP models that you have spent months or years building, you can simply connect it to Accern for immediate use. We save you countless hours by allowing you to reuse what you have already built. You can also connect third-party NLP models to our platform.",
        img: "upload-nlp-models-illustration.svg",
      },
    ]
  },

  dataOutput: {
    title: "Data Output",
    titleCL: "mw-440",
    description: "We deliver your data in multiple formats and offer many popular connectors to stream your data directly to your end application or repository.",
    isShape: false,
    isGrouped: true,
    groups: [
      {
        name: "Data Feed Type",
        columns: [
          { title: "Streaming API", icon: "icon-streaming-api.svg", },
          { title: "Restful API", icon: "icon-restful-api.svg" },
          { title: "Historic API", icon: "icon-historic-api.svg" },
        ]
      },
      {
        name: "Data Formats",
        columns: [
          { title: "CSV", icon: "icon-csv.svg" },
          { title: "JSON", icon: "icon-json.svg" },
        ]
      }
    ]
  },

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    className: "bg-light mb-spacer",
    columns: [
      { title: "Data Store", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", link: "/data", icon: "icon-data.svg" },
      { title: "AutoML Taxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", link: "/auto-taxonomy", icon: "icon-taxonomy.svg" },
      { title: "Deployments", description: "Select from a list of secured deployment options.", link: "/deployments", icon: "icon-deployment.svg" },
      { title: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", link: "/integrations", icon: "icon-integrations.svg" },
    ]
  },
}