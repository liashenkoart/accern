export const page = {
  hero: {
    label: "ACCERN",
    title: "Terms of Use",
    titleCL: "mw-580",
  },
  navigation: [
    { name: "Home", icon: "home", target: "dc-home" },
    {
      name: "Accern AI Platform", icon: "layout", subs: [
        { name: "History & Overview", target: "dc-overview" },
      ]
    },
    {
      name: "Index", icon: "data", subs: [
        { name: "Document", target: "dc-document" },
        { name: "Document Cluster", target: "dc-document-cluster" },
        { name: "Theme", target: "dc-theme" },
        { name: "Signal", target: "dc-signal" },
        { name: "Metadata", target: "dc-metadata" },
        { name: "Derived Analytics", target: "dc-derived-analytics" },
      ]
    },
    {
      name: "Analytics", icon: "activity", subs: [
        { name: "signal_id", target: "dc-signal_id" },
        { name: "doc_id", target: "dc-doc_id" },
        { name: "doc_source", target: "dc-doc_source" },
        { name: "doc_type", target: "dc-doc_type" },
        { name: "doc_content", target: "dc-crawled_at" },
        { name: "harvested_at", target: "dc-harvested_at" },
        { name: "published_at", target: "dc-published_at" },
        { name: "provider_id", target: "dc-provider_id" },
        { name: "doc_title", target: "dc-doc_title" },
        { name: "doc_url", target: "dc-doc_url" },
        { name: "provider_doc_id", target: "dc-provider_doc_id" },
        { name: "doc_sentiment", target: "dc-doc_sentiment" },
        { name: "doc_cluster_id", target: "dc-doc_cluster_id" },
        { name: "signal_tag", target: "dc-signal_tag" },
        { name: "signal_relevance", target: "dc-signal_relevance" },
        { name: "signal_sentiment", target: "dc-signal_sentiment" },
        { name: "primary_signal", target: "dc-primary_signal" },
        { name: "entity_accern_id", target: "dc-entity_accern_id" },
        { name: "entity_relevance", target: "dc-entity_relevance" },
        { name: "entity_sentiment", target: "dc-entity_sentiment" },
        { name: "entity_source", target: "dc-entity_source" },
        { name: "entity_ticker", target: "dc-entity_ticker" },
        { name: "entity_exch_code", target: "dc-entity_exch_code" },
        { name: "entity_name", target: "dc-entity_name" },
        { name: "entity_type", target: "dc-entity_type" },
        { name: "entity_indices", target: "dc-entity_indices" },
        { name: "entity_figi", target: "dc-entity_figi" },
        { name: "entity_country", target: "dc-entity_country" },
        { name: "entity_share_class", target: "dc-entity_share_class" },
        { name: "entity_region", target: "dc-entity_region" },
        { name: "entity_sector", target: "dc-entity_sector" },
        { name: "entity_hits", target: "dc-entity_hits" },
        { name: "entity_text", target: "dc-entity_text" },
        { name: "entity_attributes", target: "dc-entity_attributes" },
        { name: "event_accern_id", target: "dc-event_accern_id" },
        { name: "event_relevance", target: "dc-event_relevance" },
        { name: "event_sentiment", target: "dc-event_sentiment" },
        { name: "event_group", target: "dc-event_group" },
        { name: "event_name", target: "dc-event_name" },
        { name: "event_hits", target: "dc-event_hits" },
        { name: "event_text", target: "dc-event_text" },
        { name: "event_attributes", target: "dc-event_attributes" },
      ]
    },
    {
      name: "Appendix A", icon: "circle-info", subs: [
        { name: "Rest API overview", target: "dc-api-overview" },
        { name: "Filters", target: "dc-filters" },
        { name: "Getting Data from the API", target: "dc-getting-data" },
      ]
    },
    {
      name: "FAQs", icon: "help-circle", subs: [
        { name: "How can I download data in csv format for a given date?", target: "dc-how-download" },
        { name: "How can I get data in batches?", target: "dc-how-can-get-batches" },
        { name: "How can I get all data for a specific Ticker on a given date?", target: "dc-how-can-get-ticker" },
      ]
    },
  ],
  documentation: {
    sections: [
      {
        title: "API Documentation",
        titleCL: "mb-0",
        label: "Accern AI Platform",
        id: "dc-home",
        column1: [
          { type: "html", content: "<img class='mb-5' src='../assets/img/blank-img.png'><h3>Getting Started</h3><p>This document describes all the analytics that are processed by Accern's AI Platform. These analytics become part of Accern's APIs and are also provided in the historical data samples. Through this document, we aim to provide a thorough understanding of the various analytics that Accern provides, whether it's through the real-time API or the visual dashboards. This document also provides answers for some of the frequently asked questions. For better readability, we have grouped these questions within the relevant analytics' section.</p><h3>Accern V5 API Analytics (Powered by Accern's Adaptive NLP Features)</h3><p>In this section, we will describe the data and all the analytics that are part of the historical data and as the V5 API. For some of these analytics, we will also provide you scenarios where these metrics can be used effectively.</p><div class='text-center'><img class='w-50 my-5' src='../assets/img/graph.png'></div>" },
        ]
      },
      {
        label: "Accern AI Platform",
        title: "Overview",
        titleCL: "mb-5",
        id: "dc-overview",
        column1: [
          { type: "html", content: "<p>Accern accelerates AI workflows for enterprises with a no-code development platform. The best data teams from the world's leading organizations, such as Allianz, IBM, and Jefferies, are using Accern to build and deploy AI solutions powered by our adaptive NLP and forecasting features. Headquartered in New York, NY, Accern is a Forbes 30 Under 30 company and venture-backed by Fusion Fund, Allianz Life Ventures, and many others. For more information on how we can accelerate AI adoption for your organization, visit <a href='./'>accern.com</a>.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Document",
        titleCL: "mb-5",
        id: "dc-document",
        column1: [
          { type: "html", content: "<p>We classify any individual textual information, such as news articles, tweets, financial documents, blog posts etc., as a document.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Document Cluster (group)",
        titleCL: "mb-5",
        id: "dc-document-cluster",
        column1: [
          { type: "html", content: "<p>A document cluster is a group of contextually similar documents. A new document cluster is formed when our document clustering algorithm is unable to find a related document cluster for an document. An document cluster can contain multiple documents, however, an document can be part of only one document cluster.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Theme",
        titleCL: "mb-5",
        id: "dc-theme",
        column1: [
          { type: "html", content: "<p>We define themes as parts of text that provide similar information about an entity/event or both. A document can contain multiple themes, and a theme may be shared across multiple documents.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Signal",
        titleCL: "mb-5",
        id: "dc-signal",
        column1: [
          { type: "html", content: "<p>A theme contained within a document is called a signal.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Metadata",
        titleCL: "mb-5",
        id: "dc-metadata",
        column1: [
          { type: "html", content: "<p>We define any information extracted directly from a document as its metadata. Metadata includes information like hyperlinks, publish time, etc.</p>" },
        ]
      },
      {
        label: "Index",
        title: "Derived Analytics",
        titleCL: "mb-5",
        id: "dc-derived-analytics",
        column1: [
          { type: "html", content: "<p>Analytics that are generated by Accern's analytics engines using the metadata information is classified as derived analytics.</p>" },
        ]
      },
      {
        label: "analytics",
        title: "signal_id",
        titleCL: "mb-5",
        id: "dc-signal_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Uniquely identifiable ID that is randomly generated.</p><p><strong>Process: </strong>Each signal is a theme extracted from the document. While creating a signal, a random unique identifier function is used to create the ID that is used as a string value.</p><ul><li>Data Type: String (Unique ID)</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_id",
        titleCL: "mb-5",
        id: "dc-doc_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Unique ID assigned to the document.</p><p><strong>Process: </strong>For every document that is processed (news, blog, etc.) we have a unique ID associated with it that helps us identify specific articles. One document can have multiple signals associated with it.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_source",
        titleCL: "mb-5",
        id: "dc-doc_source",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>The original source of the document.</p><p><strong>Process: </strong>We look up a parent source of the information. If the domain information is not available, the doc_source is extracted from the unique URL of the article. For the local database, the doc_source information is either set to 'custom', or any other category value provided to us.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_type",
        titleCL: "mb-5",
        id: "dc-doc_type",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Classifies document based on where the article/document is published and its mode of access.</p><p><strong>Process: </strong>To determine the doc_type , we first look at the mode through which we found the document. For instance, if a document is found in one of the RSS feeds, then the doc_type will be set to 'Feed'. If it was accessed through a premium news feed API, then the value is set to 'Premium News'; or when it was accessed via SEC's EDGAR database, then the value is set to 'SEC Filing', and so on. Next, we use the doc_source information to classify whether the document is news or blog. Accern actively maintains a mapping between doc_source by doc_type , like news/blogs. When a new source is encountered for which there's no historical data or news/blog mapping, the default value is set to 'blog'. These sources are then reviewed by the Accern team and the mapping files are updated periodically.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: [news, blog, dowjones, ache]</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_content",
        titleCL: "mb-5",
        id: "dc-crawled_at",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Content of the original document. By default, this content is encrypted for legal reasons.</p><p><strong>Process: </strong>The original text of the document as scraped/extracted from the source.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "harvested_at",
        titleCL: "mb-5",
        id: "dc-harvested_at",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>The time when the original document was crawled (at time).</p><p><strong>Process: </strong>This info is generated at the time of the document being actually crawled.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "published_at",
        titleCL: "mb-5",
        id: "dc-published_at",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>The time when the doc was pushed to pipeline for processing.</p><p><strong>Process: </strong>If published date is extractable from document, it’s used, otherwise it’s the timestamp of when the document was crawled or provided to Accern.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "provider_id",
        titleCL: "mb-5",
        id: "dc-provider_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>ID of the data provider.</p><p><strong>Process: </strong>N/A</p><ul><li>Data Type: Int</li><li>Value Range: Positive integers</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_title",
        titleCL: "mb-5",
        id: "dc-doc_title",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>The title of the original document.</p><p><strong>Process: </strong>N/A</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_url",
        titleCL: "mb-5",
        id: "dc-doc_url",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Online URL for the original document.</p><p><strong>Process: </strong>The original URL of the document as extracted from the source.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "provider_doc_id",
        titleCL: "mb-5",
        id: "dc-provider_doc_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Document ID given by a third party data provider.</p><p><strong>Process: </strong>ID of the document that was assigned by the original source.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_sentiment",
        titleCL: "mb-5",
        id: "dc-doc_sentiment",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>The average sentiment of all entities and events in a document.</p><p><strong>Process: </strong>A simple averaging of all the signal_sentiment in a document, which in turn are overall signal sentiments.</p><ul><li>Data Type: Double</li><li>Value Range: [-100, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "doc_cluster_id",
        titleCL: "mb-5",
        id: "dc-doc_cluster_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is a unique identifier for clusters to which a given article belongs. By tracking a doc_cluster_id , a user can trace how different articles evolved over time.</p><p><strong>Process: </strong>We group similar documents into clusters. Once these clusters are identified, an average cluster sentiment is computed by taking the mean of doc_sentiment of all the documents in the cluster. This metric can be effectively used in tracking the market mood for a cluster.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "signal_tag",
        titleCL: "mb-5",
        id: "dc-signal_tag",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is a theme identifier.</p><p><strong>Process: </strong>It is formed by the combination of the entity_accern_id and event_accern_id.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "signal_relevance",
        titleCL: "mb-5",
        id: "dc-signal_relevance",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Overall relevance of the signal.</p><p><strong>Process: </strong>It is calculated as the average of entity and event relevance. The entity and event mentioned are the ones present in the signal itself.</p><ul><li>Data Type: Double</li><li>Value Range: [0, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "signal_sentiment",
        titleCL: "mb-5",
        id: "dc-signal_sentiment",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Overall sentiment of the signal.</p><p><strong>Process: </strong>It is calculated as the average of entity and event sentiment. The entity and event mentioned are the ones present in the signal itself.</p><ul><li>Data Type: Double</li><li>Value Range: [-100, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "primary_signal",
        titleCL: "mb-5",
        id: "dc-primary_signal",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Boolean indicator for whether a signal is primary or not.</p><p><strong>Process: </strong>Max signal relevance is calculated for each document. The signal(s) with the signal relevance equal to max signal relevance are classified as primary signals.</p><ul><li>Data Type: Boolean</li><li>Value Range: [True, False]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_accern_id",
        titleCL: "mb-5",
        id: "dc-entity_accern_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Accern id of the entity</p><p><strong>Process: </strong>Entities are extracted by Accern's proprietary entity extraction models. Once an entity is extracted from a theme, we retrieve its Accern ID available in our databases and update the entity_accern_id value.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_relevance",
        titleCL: "mb-5",
        id: "dc-entity_relevance",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Scores an entity based on the emphasis with which it is mentioned in a document.</p><p><strong>Process: </strong>To determine the relevance of an entity, we consider the following two factors - a) the number of times an entity is mentioned in the article, and b) the positions within the text where the entity is mentioned. We then combine these two factors into a single relevance score. Entities that are mentioned frequently and appear earlier in the document receive higher relevance scores than entities that are mentioned relatively fewer times and mostly in the later sections of the document. It is important to note that there may be multiple highly-relevant entities in a document. On the contrary, we reject any document that does not contain any relevant entity.</p><ul><li>Data Type: Double</li><li>Value Range: [0, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_sentiment",
        titleCL: "mb-5",
        id: "dc-entity_sentiment",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>This is the sentiment value calculated for each entity based on the text surrounding it.</p><p><strong>Process: </strong>We calculate the sentiment using Accern’s proprietary sentiment analysis models.</p><ul><li>Data Type: Double</li><li>Value Range: [-100, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_source",
        titleCL: "mb-5",
        id: "dc-entity_source",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Identifies which knowledge graph was used for this entity (primary or custom).</p><p><strong>Process: </strong>Entities present in our databases are classified as ‘primary’ and the ones added by the client are classified as ‘custom’.</p><ul><li>Data Type: String</li><li>Value Range: [“primary”, “custom”]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_ticker",
        titleCL: "mb-5",
        id: "dc-entity_ticker",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the traded ticker symbols of the extracted entity.</p><p><strong>Process: </strong>Entities are extracted by Accern's proprietary entity extraction models. Once an entity is extracted from a theme, we retrieve its traded symbol available in our databases and update the entity_ticker value. Our ticker symbol database gets updated every night with information such as initial public offerings (IPOs), symbol change, sector/industry update, entity name update etc.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: Symbols for global equities, commodities, forex and cryptocurrencies</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_exch_code",
        titleCL: "mb-5",
        id: "dc-entity_exch_code",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the exchange code of the stock exchange where the entity is traded.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_exch_code field.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: All Global Exchanges</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_name",
        titleCL: "mb-5",
        id: "dc-entity_name",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the name of the company as it is registered on the stock exchange.</p><p><strong>Process: </strong>Accern has access to the list of all companies traded on each stock exchange. We actively maintain this 'Entities' database with important corporate events that may affect an entity's name, sector, stock ticker, etc.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: All Global Equities, Commodities, Cryptocurrencies and Forex</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_type",
        titleCL: "mb-5",
        id: "dc-entity_type",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the type of entity, such as public equity, commodity, cryptocurrency etc.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_type field.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: [US_EQUITY, INTERNATIONAL_EQUITY, FOREX, COMMODITY, CRYPTOCURRENCY]</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_indices",
        titleCL: "mb-5",
        id: "dc-entity_indices",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is a list of popular indices where the entity is a constituent.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_indices field.</p><ul><li>Data Type: Array of Strings</li><li>Value Range: [US_EQUITY, INTERNATIONAL_EQUITY, FOREX, COMMODITY, CRYPTOCURRENCY]</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_figi",
        titleCL: "mb-5",
        id: "dc-entity_figi",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Figi Code of the entity (asset class).</p><p><strong>Process: We refer to the 'Entities' database and update the entity_figi field.</strong></p><ul><li>Data Type: String</li><li>Value Range: Please see openfigi.com</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_country",
        titleCL: "mb-5",
        id: "dc-entity_country",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the parent country of the entity.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_country field.</p><ul><li>Data Type: String</li><li>Value Range: Global</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_share_class",
        titleCL: "mb-5",
        id: "dc-entity_share_class",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Share class Figi code for entity (asset class).</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_share_class field.</p><ul><li>Data Type: String</li><li>Value Range: Please see openfigi.com</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_region",
        titleCL: "mb-5",
        id: "dc-entity_region",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the region where the entity is traded.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_region field.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: All major regions</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_sector",
        titleCL: "mb-5",
        id: "dc-entity_sector",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>It is the sector the entity belongs to.</p><p><strong>Process: </strong>We refer to the 'Entities' database and update the entity_sector field.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: All major sectors</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_hits",
        titleCL: "mb-5",
        id: "dc-entity_hits",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: Hit word(s) of the entity.</strong></p><p><strong>Process: </strong>A list of words is generated for the entity hits by the Accern proprietary API. A distinct list of hits is then extracted for the entity_hits field.</p><ul><li>Data Type: Array of Strings</li><li>Value Range: All Global Equities, Commodities, Cryptocurrencies and Forex</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_text",
        titleCL: "mb-5",
        id: "dc-entity_text",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Text surrounding the tagged entity.</p><p><strong>Process: </strong>Accern’s proprietary API recognizes the relevant text surrounding the tagged entity in order to update the entity_text field.</p><ul><li>Data Type: Array of Strings</li><li>Value Range: ~[1, 17] words</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "entity_attributes",
        titleCL: "mb-5",
        id: "dc-entity_attributes",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Additional information associated with the entity.</p><p><strong>Process: We refer to the 'Entities' database and update the entity_attributes field.</strong></p><ul><li>Data Type: A map of string (key) and type Any (value)</li><li>Value Range: N/A</li><li>Analytics Type: Metadata</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_accern_id",
        titleCL: "mb-5",
        id: "dc-event_accern_id",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Accern ID of the event</p><p><strong>Process: </strong>Events are extracted by Accern's proprietary event extraction models. Once an event is extracted from a theme, we retrieve its Accern ID available in our databases and update the event_accern_id value.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_relevance",
        titleCL: "mb-5",
        id: "dc-event_relevance",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Scores an event based on the emphasis with which it is mentioned in a document.</p><p><strong>Process: </strong>To determine the relevance of an event, we consider the following two factors - a) the number of times an event is mentioned in the article, and b) the positions within the text where the event is mentioned. We then combine these two factors into a single relevance score. events that are mentioned frequently and appear earlier in the document receive higher relevance scores than events that are mentioned relatively fewer times and mostly in the later sections of the document. It is important to note that there may be multiple highly-relevant events in a document. On the contrary, we reject any document that does not contain any relevant event.</p><ul><li>Data Type: Double</li><li>Value Range: [0, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_sentiment",
        titleCL: "mb-5",
        id: "dc-event_sentiment",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>This is the sentiment value calculated for each event based on the text surrounding it.</p><p><strong>Process: </strong>We calculate the sentiment using Accern’s proprietary sentiment analysis models.</p><ul><li>Data Type: Double</li><li>Value Range: [-100, 100]</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_group",
        titleCL: "mb-5",
        id: "dc-event_group",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Event groups are the broader financial events category that contain multiple related events.</p><p><strong>Process: </strong>Accern has developed a financial event tree that contains over 25+ financial event groups, 250+ financial events, and over a million financial phrases. A financial event can only be part of one event_group, whereas, each event_group can contain multiple financial events. Once a financial event is extracted by the event extraction model, we search for the parent group in our database and update the event_group field.</p><ul><li>Data Type: String (Categorical)</li><li>Value Range: 25+ Unique Financial Event Groups</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_name",
        titleCL: "mb-5",
        id: "dc-event_name",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Financial events extracted from the stories.</p><p><strong>Process: </strong>We actively maintain this 'Events' database that contains the important corporate events. Each signal contains a unique financial event for a specific company.</p><ul><li>Data Type: String</li><li>Value Range: N/A</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_hits",
        titleCL: "mb-5",
        id: "dc-event_hits",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Text (words/phrases) as the event was found in the document.</p><p><strong>Process: </strong>A list of words is generated for the event hits by the Accern proprietary API. A distinct list of hits is then extracted for the event_hits field.</p><ul><li>Data Type: Array of Strings</li><li>Value Range: All events from Accern’s “Events” database</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_text",
        titleCL: "mb-5",
        id: "dc-event_text",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Text surrounding the tagged event.</p><p><strong>Process: </strong>Accern’s proprietary API recognizes the relevant text surrounding the tagged event in order to update the event_text field.</p><ul><li>Data Type: Array of Strings</li><li>Value Range: ~[1, 17] words</li><li>Analytics Type: Derived</li></ul>"
          }
        ]
      },
      {
        label: "analytics",
        title: "event_attributes",
        titleCL: "mb-5",
        id: "dc-event_attributes",
        column1: [
          {
            type: "html",
            content: "<p><strong>Definition: </strong>Additional information associated with the event.</p><p><strong>Process: </strong>We refer to the 'Events' database and update the entity_attributes field.</p><ul><li>Data Type: A map of string (key) and type Any (value)</li><li>Value Range: N/A</li><li>Analytics Type: Metadat</li></ul>"
          }
        ]
      },
      {
        label: "Apendix A",
        title: "Rest API Overview",
        titleCL: "mb-5",
        id: "dc-api-overview",
        column1: [
          { type: "html", content: "<p>Accern provides a REST API for Accern AI Platform. Each article is processed according to the use case configuration made during the API creation process. By default, the API requests will return the most recent 100 documents.</p>" },
          { type: "html", content: "<p>1. For each use case, the URL generated will have a domain name, a pipeline ID and pipeline token.<br> Below is an example of an API URL</p>" },
          {
            type: "code", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN' },
            ]
          },
          { type: "html", content: "<p class='mt-4'><strong>Example:</strong><br>DOMAIN: <span class='text-primary'>acme.accern.com</span><br>PIPELINE_ID: d-test-casecase<br>PIPELINE_TOKEN: zxxSOMETOKENxxxa<br>The final URL will be as below:</p>" },
          {
            type: "code", content: [
              { language: "api", code: 'https://acme.accern.com/d-testcasecase/hyperion/v2/alphas?token=zxxSOMETOKENxxxa' },
            ]
          },
          { type: "html", content: "<p class='mt-4'>A user can get this URL from Accern AI Platform > Use Case > Data delivery section > API URL FieldResponse Format</p><p>By default, the response from the API feed is in JSON format. You can also download the data as a CSV file.</p><p>To download, just replace “alphas” from the URL with “alphas.csv”</p>" },
          {
            type: "code", class:"mb-4", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas.csv?token=PIPELINE_TOKEN' },
            ]
          },
          {
            type: "code", content: [
              { language: "api", code: 'https://acme.accern.com/d-testcasecase/hyperion/v2/alphas.csv?token=zxxSOMETOKENxxxa' },
            ]
          },
        ],
      },
      {
        label: "Apendix A",
        title: "Filters",
        titleCL: "mb-5",
        id: "dc-filters",
        column1: [
          { type: "html", content: "<p>The data feed resulting from the API can be filtered on the following fields, using them as URL parameters:</p>" },
          {
            type: "code", class:"mb-4", title: "STANDARD API URL:", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN' },
            ]
          },
          {
            type: "code", class:"mb-4", title: "STANDARD CSV URL:", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas.csv?token=PIPELINE_TOKEN' },
            ]
          },
          {
            type: "code", class:"mb-4", title: "LAST_ID: For backfill to get signals after the given ID:", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&last_id=100' },
            ]
          },
          {
            type: "code", class:"mb-4", title: "DATE: For getting data harvested on a certain date (Entry Format: UTC Date, i.e. YYYYMMDD)", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&date=20200101' },
            ]
          },
          {
            type: "code", class:"mb-4", title: "ENTITY_TICKER**: For getting specific entities based on tickers (Entry format: comma separated list)", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&entity_ticker=AAPL,GOOG,MSFT' },
            ]
          },
          {
            type: "code", class:"mb-4", title: "EVENT**: For getting data for specific events (comma separated list)", content: [
              { language: "api", code: '' },
            ]
          },
          {
            type: "code", class:"mb-4", notification:"AND ACQUISITIONS", title: "EVENT_GROUP**: For getting data for specific event groups (comma separated list) = always available", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&event_group=ESG,MERGERS' },
            ]
          },
          { type: "html", content: "<p>** = only when available in model pack chosen during API set up</p>" },
        ],
      },
      {
        label: "Apendix A",
        title: "Getting Data from the API",
        titleCL: "mb-5",
        id: "dc-getting-data",
        column1: [
          { type: "html", content: "<p>Accern AI Platform API generates results in both JSON and CSV response formats which can be accessed via the same API, as shown below.</p>" },
          {
            type: "code", class:"mb-4", title: "# Get data from the APIs without any filters", content: [
              { language: "javascript", code: 'df_json = pd.read_json(JSON_API_URL)\ndf_csv = pd.read_csv(CSV_API_URL)' },
            ]
          },
          { type: "html", content: "<p>By default, the API call returns the most-recent 100 signals and all the analytics chosen at the time of pipeline creation. To get data going back further, or to get data from a specific date onwards, or to get data for a specific date only, you can use the <strong>last_id</strong>, <strong>from</strong>, and/or <strong>date</strong> fields accordingly. Additional information about the polling methods and analytics definitions can be found in the onboarding materials - analytics guide and Accern AI Platform walkthrough.</p>" },
          {
            type: "code", class:"mb-4", title: "For this analysis we will be using the CSV response", content: [
              { language: "javascript", code: 'df_csv\nIn - df_csv.shape\nOut - (100, 49)\nIn - df_csv.columns\nOut - Index(["id", "signal_id", "doc_id","new_doc_cluster", "doc_cluster_id", "doc_cluster_count", "doc_cluster_sentiment_avg", "doc_cluster_sentiment_stdev", "doc_title", "doc_content", "doc_source", "doc_type", "doc_url", "provider_doc_id", "provider_id", "doc_sentiment", "signal_tag", "signal_relevance", "signal_sentiment", "primary_signal", "entity_accern_id", "entity_relevance", "entity_sentiment", "entity_source", "entity_ticker", "entity_exch_code", "entity_name", "entity_type", "entity_indices", "entity_figi", "entity_country", "entity_share_class", "entity_region", "entity_sector", "entity_hits", "entity_text", "entity_attributes", "event_id", "event_group", "event", "event_attributes", "event_hits", "event_text", "event_relevance", "event_sentiment", "published_at", "crawled_at", "created_at", "harvested_at"], dtype="object")' },
            ]
          },
          { type: "html", content: "<p>To get all of the data for a specific <strong>date</strong>, you can set the date field to a specific date in the YYYYMMDD format. For example, if you want to get all the data for March 19, 2020, you can set the filter in the API as <strong>date=20200319</strong>. Below is an example with the updated API call and response. Note that the final output returned has more data than the default 100 rows. This is because we are asking the system to return the whole day's data for the specified date.</p>" },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - CSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&date=20200319"\nIn - df_csv = pd.read_csv(CSV_API_URL)\nIn - pd.to_datetime(df_csv["harvested_at"]).dt.date.unique()\nOut - array([datetime.date(2020, 3, 19)], dtype=object)\nIn - df_csv.shape\nOut - (20680, 49)' },
            ]
          },
          { type: "html", content: "<p>Filtering the data based on a combination of fields.</p>" },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - # Goal: To filter the API by a given list of companies.\n# Filters:\n# 1. entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AM ZN,WMT,V\nCSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AMZN,WMT,V"\nIn - df_csv = pd.read_csv(CSV_API_URL)\ndf_csv["entity_ticker"].unique()\nOut - array(["F", "GOOG", "AAPL", "AMZN", "FB", "WMT", "MSFT"], dtype=object)' },
            ]
          },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - # Goal: To filter the API by a given list of companies and date.\n# Filters:\n# 1. entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AM,ZN,WMT,V\n# 2. date=20200319\nCSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&entity_ticker=AAPL,MSFT,GOOG,TSLA,F,G19E,FB,AMZN,WMT,V&date=20200319"\nIn - df_csv = pd.read_csv(CSV_API_URL)\npd.to_datetime(df_csv["harvested_at"]).dt.date.unique()\nOut - array([datetime.date(2020, 3, 19)], dtype=object)' },
            ]
          },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - # Goal: To filter the API by a given list of companies, date and event_group\n# Filters:\n# 1. entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AM,ZN,WMT,V\n# 2. date=20200319\n# 3. event_group=Disaster\nCSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AMZN,WMT,V&date=20200319"\nIn - df_csv = pd.read_csv(CSV_API_URL)\ndf_csv["event_group"].unique()\nOut - array(["Disaster"], dtype=object)' },
            ]
          },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - # Goal: To filter the API by a given list of companies, date, event_group and entity_relevance\n# Filters:\n# 1. entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AM,ZN,WMT,V\n#2. date=20200319\n#3. event_group=Disaster\n#4. entity_relevance=100\nCSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AMZN,WMT,V&date=20200319&entity_relevance=90"\nIn - df_csv = pd.read_csv(CSV_API_URL)\ndf_csv["entity_relevance"].unique()\nOut - array([100.])' },
            ]
          },
          {
            type: "code", class:"mb-4", content: [
              { language: "javascript", code: 'In - # Goal: To filter the API by a given list of companies, date, event_group, entity_relevance and event_relevance\n# Filters:\n# 1. entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AM,ZN,WMT,V\n#2. date=20200319\n#3. event_group=Disaster\n#4. entity_relevance=100\n#5. event_relevance=100\nCSV_API_URL = "https://demo.accern.com/d-042168-coronavirussigna/hyperion/v2/alphas.csv?token=ffdec4c60e7ed203ba324c0cfa3bd650d77a420c182c588074ac2a996e1ec48b&entity_ticker=AAPL,MSFT,GOOG,TSLA,F,GE,FB,AMZN,WMT,V&date=20200319&entity_relevance=100&event_relevance=100"\nIn - df_csv = pd.read_csv(CSV_API_URL)\ndf_csv["event_relevance"].unique()\nOut - array([100.])' },
            ]
          },
        ],
      },
      {
        label: "FAQs",
        title: "How can I download data in csv format for a given date?",
        titleCL: "mb-5",
        id: "dc-how-download",
        column1: [
          { type: "html", content: "<p>To download the data you just need to replace alphas with alphas.csv in your URL. Then you can use the filter DATE and provide a date.</p>" },
        ],
        column2: [
          {
            type: "code", notification: "NOTE: from=20191212", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&date=20191212' },
              { language: "csv", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas.csv?token=PIPELINE_TOKEN&date=20191212' }
            ]
          },
        ]
      },
      {
        label: "FAQs",
        title: "How can I get data in batches?",
        titleCL: "mb-5",
        id: "dc-how-can-get-batches",
        column1: [
          { type: "html", content: "<p>By default the API request returns the most recent 100 articles. You can get data in batches of 100.</p><p><strong>To do:</strong><br> Step A. Make an API request with last_id=0</p>" },
          {
            type: "code", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&last_id=0' },
            ]
          },
          { type: "html", content: "<p class='mt-4'>The successful response will have a last_id in the JSON payload.</p>" },
          {
            type: "code", content: [
              { language: "json", code: '{\n first_id: 0,\n last_id: 100,\n total: 100,\n signals: [ { ... } ]\n}' },
            ]
          },
          { type: "html", content: "<p class='mt-4'><strong>Step B.</strong> Use the last_id from the previous response to make the next API call.</p>" },
          {
            type: "code", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&last_id=100' },
            ]
          },
          { type: "html", content: "<p class='mt-4'>Repeat Step B until you reach the last article where the total will be 0. This means there are no signals in the payload. This way you can walk through the data and download batches.</p>" },
        ],
      },
      {
        label: "FAQs",
        title: "How can I get all data for a specific Ticker on a given date?",
        titleCL: "mb-5",
        id: "dc-how-can-get-ticker",
        column1: [
          { type: "html", content: "<p>A user can mix filters from the URL parameters example.</p>" },
          {
            type: "code", content: [
              { language: "api", code: 'https://DOMAIN/PIPELINE_ID/hyperion/v2/alphas?token=PIPELINE_TOKEN&date=20200101&entity_ticker=AAPL' },
            ]
          },
          { type: "html", content: "<p class='mt-4'>This will give the user data for ticker AAPL for the date Jan 1st, 2020.</p>" },
        ],
      },
      
    ]
  }
}