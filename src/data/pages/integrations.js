export const page = {
  seo: {
    title: "Accern - Integrations",
    meta: [
      { name: "description", content: "Accern - Integrations" },
      { property: "og:title", content: "Accern - Integrations" }
    ],
  },
  hero: {
    label: "Integrations",
    title: "Seamlessly <strong>Integrate Accern</strong> in your workflow",
    titleCL: "mw-580",
    description: "We can import your data from your favorite applications and export it back seamlessly with our built-in integrations into popular applications and databases.",
    img: "integrations-illustrations.svg",
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

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    columns: [
      { title: "Data Store", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", icon: "icon-data.svg" },
      { title: "AutoML Taxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", icon: "icon-taxonomy.svg" },
      { title: "Adaptive NLP Models", description: "Check out various NLP models that you can use out-of-the-box or retrain for your needs.", icon: "icon-adaptive-nlp.svg" },
      { title: "Deployments", description: "Select from a list of secured deployment options.", icon: "icon-deployment.svg" },
    ]
  },

  socials: {
    type: "filter",
    filterAll: "All integrations",
    isGrouped: true,
    groups: [
      {
        name: "Database",
        columns: [
          { title: "Google BigQuery", icon: "icon-google-bigquery.png", iconH: "icon-google-bigquery-h.png" },
          { title: "MySQL", icon: "icon-mysql.png", iconH: "icon-mysql-h.png" },
          { title: "Microsoft Azure", icon: "icon-microsoft-azure.png", iconH: "icon-microsoft-azure-h.png" },
          { title: "PostgreSQL", icon: "icon-postgresql.png", iconH: "icon-postgresql-h.png" },
          { title: "MongoDB", icon: "icon-mongodb.png", iconH: "icon-mongodb-h.png" },
          { title: "Amazon Redshift", icon: "icon-amazon-redshift.png", iconH: "icon-amazon-redshift-h.png" },
          { title: "Snowflake", icon: "icon-snowflake.png", iconH: "icon-snowflake-h.png" },
        ]
      },
      {
        name: "Business Apps",
        columns: [
          { title: "Elastic Search", icon: "icon-elastic-search.png", iconH: "icon-elastic-search-h.png" },
          { title: "Salesforce", icon: "icon-salesforce.png", iconH: "icon-salesforce-h.png" },
          { title: "Google Sheets", icon: "icon-google-sheets.png", iconH: "icon-google-sheets-h.png" },
          { title: "Microsoft Excel", icon: "icon-microsoft-excel.png", iconH: "icon-microsoft-excel-h.png" },
          { title: "Slack", icon: "icon-slack.png", iconH: "icon-slack-h.png" },
          { title: "Dropbox", icon: "icon-dropbox.png", iconH: "icon-dropbox-h.png" },
          { title: "Google Drive", icon: "icon-google-drive.png", iconH: "icon-google-drive-h.png" },
          { title: "Microsoft OneDrive", icon: "icon-microsoft-onedrive.png", iconH: "icon-microsoft-onedrive-h.png" },
          { title: "Box", icon: "icon-boxn.png", iconH: "icon-boxn-h.png" },
        ]
      },
      {
        name: "BI Tools",
        columns: [
          { title: "Kibana", icon: "icon-kibana.png", iconH: "icon-kibana-h.png" },
          { title: "Sisense", icon: "icon-sisense.png", iconH: "icon-sisense-h.png" },
          { title: "ThoughSpot", icon: "icon-thoughspot.png", iconH: "icon-thoughspot-h.png" },
          { title: "Microsoft Power BI", icon: "icon-microsoft-power-bi.png", iconH: "icon-microsoft-power-bi-h.png" },
          { title: "Tableau", icon: "icon-tableau.png", iconH: "icon-tableau-h.png" },
          { title: "Looker", icon: "icon-looker.png", iconH: "icon-looker-h.png" },
          { title: "Periscope Data", icon: "icon-periscope-data.png", iconH: "icon-periscope-data-h.png" },
          { title: "QlikView", icon: "icon-qlikview.png", iconH: "icon-qlikview-h.png" },
        ]
      }
    ],
  },

  requestIntegration: {
    title: "Request integration",
    description: "Don’t see the integration you’re looking for? Request it now, and we will add it!",
    button: {
      name: "REQUEST integrations",
      modal: "request"
    }
  }
}