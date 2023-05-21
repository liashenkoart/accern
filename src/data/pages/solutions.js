export const page = {
  hero: {
    label: "Our Solutions",
    title: "<strong>AI-powered insights</strong> for Financial Services",
    titleCL: "mw-500",
    descriptionCL: "mw-400",
    variant: "lines",
    theme: "primary v2",
    button: {
      name: "Get Started",
      link: "/contact",
      variant: "primary-arrow"
    }
  },
  solutions: {
    industries: {
      labelFilter: "Industry Solutions",
      options: [
        { label: "All", value: "All" },
        { label: "Asset Management", value: "Asset Management", link: "/asset-management", variant: "primary", description: "AI use cases built for Asset Management.", img: "spec-icon-settings.svg" },
        { label: "Banking", link:"/bankers", value: "Banking", description: "AI use cases built for Banking", variant: "primary", img: "spec-icon-bank.svg"},
        { label: "Insurance", link: "/insurance", value: "Insurance", description: "AI use cases built for Insurance.", variant: "primary", img: "spec-icon-shield.svg" },
        { label: "Asset Owners", link: "/asset-owners", value: "Asset Owners", description: "AI use cases built for Asset Owners.", variant: "primary", img: "icon-wealth-management.svg" },
        { label: "Private Markets", link: "/private-markets", value: "Private Markets", description: "AI use cases built for Banking", variant: "primary", img: "icon-private-markets.svg" },
        { label: "Quantitative Management", link: "/quantitative-managers", value: "Quantitative Management", description: "AI use cases built for Quantitative Management", variant: "primary", img: "spec-icon-settings.svg" },
      ]
    },
    workflows: {
      labelFilter: "Workflow Solutions",
      options: [
        { label: "All", value: "All" },
        { label: "Smart Alerts", value: "Smart Alerts", link: "/smart-alerts", variant: "advanced", img: "use-case-advanced.svg"},
        { label: "Smart Extraction", value: "Smart Extraction", link: "/smart-extraction", variant: "pink", img: "use-case-pink.svg"},
        { label: "Smart Insights", value: "Smart Insights", link: "/smart-insights", variant: "primary", img: "use-case-primary.svg"},
        { label: "Smart Recommendations", value: "Smart Recommendations", link: "/smart-recommendations", variant: "light", img: "use-case-light.svg"},
        { label: "Smart Search", value: "Smart Search", link: "/smart-search", variant: "secondary", img: "use-case-secondary.svg"},
        { label: "Smart Summaries", value: "Smart Summaries", link: "/smart-summaries", variant: "red", img: "use-case-red.svg"},
        { label: "Smart Verification", value: "Smart Verification", link: "/smart-verification", variant: "danger", img: "use-case-danger.svg"},
      ]
    },
    function: {
      labelFilter: "Function Solutions",
      options: [
        { label: "All", value: "All" },
        { label: "Claims Management", link: "/claims-management", value: "Claims Management", variant: "red", img: "solution-icon-14.svg" },
        { label: "Credit Risk", link: "/credit-risk", value: "Credit Risk", variant: "light", img: "solution-icon-11.svg" },
        { label: "Customer Experience", link: "/customer-experience", value: "Customer Experience", variant: "danger", img: "solution-icon-9.svg" },
        { label: "Customer Retention", link: "/customer-retention", value: "Customer Retention", variant: "red", img: "solution-icon-8.svg" },
        { label: "Equity Research", link: "/equity-research", value: "Equity Research", variant: "secondary", img: "solution-icon-12.svg" },
        { label: "ESG Investing", link: "/esg-investing", value: "ESG Investing", variant:"primary", img: "solution-icon-3.svg" },
        { label: "Event-Driven Investing", link: "/event-driven-investing", value: "Event-Driven Investing", variant:"advanced", img: "solution-icon-2.svg" },
        { label: "Financial Crimes", link: "/financial-crimes", value: "Financial Crimes", variant:"danger", img: "solution-icon-7.svg" },
        { label: "Fundamental Research", link: "/fundamental-research", value: "Fundamental Research", variant:"pink", img: "solution-icon-6.svg" },
        { label: "Long/Short Equity", link: "/long-short-equity", value: "Long/Short Equity", variant:"danger", img: "solution-icon-5.svg" },
        { label: "Merger Arbitrage", link: "/merger-arbitrage", value: "Merger Arbitrage", variant:"red", img: "solution-icon-4.svg" },
        { label: "Mergers & Acquisitions", link: "/mergers-acquisitions", value: "Mergers & Acquisitions", variant:"danger", img: "solution-icon-13.svg" },
        { label: "Product Recommendations", link: "/product-recommendations", value: "Product Recommendations", variant:"secondary", img: "solution-icon-10.svg" },
        { label: "Quantitative Research", link: "/quantitative-research", value: "Quantitative Research", variant:"primary", img: "solution-icon-1.svg" },
        { label: "Underwriting", link: "/underwriting", value: "Underwriting", variant:"primary", img: "solution-icon-1.svg" },
      ]
    },
    users: {
      labelFilter: "Users Solutions",
      options: [
        { label: "All", value: "All" },
        { label: "Business Leaders", value: "Business Leaders", img: "icon-business-leaders.svg", link: "/business-leaders"},
        { label: "Business Analyst", value: "Business Analyst", img: "icon-business-analyst.svg", link: "/business-analyst"},
        { label: "Data Scientist", value: "Data Scientist", img: "icon-data-scientist-n.svg", link: "/data-scientist"},
        { label: "Data Engineers", value: "Data Engineers", img: "icon-data-engineers.svg", link: "/data-engineers"},
        { label: "Software Developers", value: "Software Developers", img: "icon-software-developers.svg", link: "/software-developers"},
        { label: "Product Managers", value: "Product Managers", img: "icon-product-managers.svg", link: "/product-managers"},
      ]
    },
  },
}