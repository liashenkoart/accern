export const page = {
  hero: {
    label: "Accern UNIVERSITY",
    title: "Whitepapers",
    titleCL: "mw-500",
    description: "This series of whitepapers offers valuable insights to how artificial intelligence can be used across the value chain across multiple industries.",
    descriptionCL: "mw-550",
  },
  whitePapers: {
    search: {
      label: "Find a Whitepaper",
    },
    button: {
      name: "Download Whitepaper",
      modal: "downloadWhitepaper",
      variant: "link",
    },
    industries: {
      label: "Filter by Industry",
      options: [
        { label: "All", value: "All" },
        { label: "Asset Management", value: "Asset Management"},
        { label: "Banks", value: "Banks"},
        { label: "Insurance", value: "Insurance"},
        { label: "Private Markets", value: "Private Markets"},
        { label: "Wealth Management", value: "Wealth Management"},
      ]
    },
    category: {
      label: "Filter by Category",
      options: [
        { label: "All", value: "All" },
        { label: "AI Technology Landscape", value: "AI Technology Landscape"},
        { label: "Category 2", value: "Category 2"},
        { label: "Category 3", value: "Category 3"},
        { label: "Category 4", value: "Category 4"},
      ]
    },
    list: [
      {
        id: 1,
        industry: "Asset Management",
        category: "AI Technology Landscape",
        label: "Asset Management",
        title: "How AI in Asset Management text",
        titleCL: "mw-600",
        for: "Artificial Intelligence for Asset Managers:",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis. You can also choose from a wide collection of public and premium datasets available in our data store for immediate use.",
        variant: "lines",
        theme: "primary v6"
      },
      {
        id: 2,
        industry: "Private Markets",
        category: "AI Technology Landscape",
        label: "Private Markets",
        title: "How AI in Private Markets text here",
        titleCL: "mw-600",
        for: "Artificial Intelligence for Private Markets:",
        description: "Browse one of the largest collections of adaptive NLP models for finance, which you can use immediately. In addition, you can retrain each of our models to fit your needs or simply upload your own NLP models.",
        variant: "lines",
        theme: "advanced v6"
      },
      {
        id: 3,
        industry: "Wealth Management",
        category: "AI Technology Landscape",
        label: "Wealth Management",
        title: "How AI in Wealth Management text here",
        titleCL: "mw-600",
        for: "Artificial Intelligence for Wealth Managers:",
        description: "This paper discusses the applications of Natural Language Processing (NLP) for wealth managers in providing client-centered approaches to financial guidance. Learn about the challenges wealth managers face in analyzing unstructured data and with building NLP models, and how no-code, AI-platforms enable a more efficient, cost-effective, and quicker adoption of NLP",
        variant: "lines",
        theme: "danger v6"
      }
    ]
  },
}