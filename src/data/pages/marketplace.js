export const page = {
  hero: {
    label: "Accern AI Marketplace",
    title: "<strong>AI</strong> Use Cases",
    titleCL: "mw-500",
    description: "Implement ready-made use cases and accelerate your time to value.",
    descriptionCL: "mw-400",
    img: "pricing-hero-illustration.svg",
  },
  getstarted: {
    title: "Get started",
    description: "Request a trial of our platform and start accelerating AI for your organization.",
    placeholder: "Email address",
    link: {
      name: "Request Trial",
      modal: "request"
    }
  },
  useCases: {
    labelPopularInsurance: "Popular Insurance Use Cases",
    labelPopularAssetManagement: "Popular Asset Management Use Cases",
    labelPopularBanking: "Popular Banking Use Case",
    findUseCase: {
      label: "Use case recommendation",
      title: "Find Your Ideal Use Case",
      button: "Continue",
      steps: [
        {plahecolder: "I work at a(an)", label: "Company"},
        {plahecolder: "I am part of the", label: "Function"},
        {plahecolder: "My role is a"},
        {plahecolder: "I am looking for use cases that can"},
      ],
      form: {

      }
    },
    search: {
      label: "Find a use case",
    },
    industries: {
      label: "Filter by Industries",
      labelFilter: "Use Case By Industry",
      options: [
        { label: "All", value: "All" },
        { label: "Asset Management", value: "Asset Management", variant: "primary", description: "AI use cases built for Asset Management.", img: "spec-icon-settings.svg" },
        { label: "Banks", value: "Banks", description: "AI use cases built for Banking", variant: "primary", img: "spec-icon-bank.svg"},
        { label: "Insurance", value: "Insurance", description: "AI use cases built for Insurance.", variant: "primary", img: "spec-icon-shield.svg" },
      ]
    },
    workflows: {
      label: "Filter by Workflows",
      labelFilter: "Use Case by Workflow",
      options: [
        { label: "All", value: "All" },
        { label: "Smart Alerts", value: "Smart Alerts", variant: "advanced", img: "use-case-advanced.svg", description: "Automate your workflow with" },
        { label: "Smart Extraction", value: "Smart Extraction", variant: "pink", img: "use-case-pink.svg", description: "Automate your workflow with" },
        { label: "Smart Insights", value: "Smart Insights", variant: "danger", img: "use-case-danger.svg", description: "Automate your workflow with" },
        { label: "Smart Recommendations", value: "Smart Recommendations", variant: "light", img: "use-case-light.svg", description: "Automate your workflow with" },
        { label: "Smart Search", value: "Smart Search", variant: "secondary", img: "use-case-secondary.svg", description: "Automate your workflow with" },
        { label: "Smart Summaries", value: "Smart Summaries", variant: "red", img: "use-case-red.svg", description: "Automate your workflow with" },
        { label: "Smart Verification", value: "Smart Verification", variant: "primary", img: "use-case-primary.svg", description: "Automate your workflow with" },
      ]
    },
    solutions: {
      label: "Filter by Solution",
      labelFilter: "Use Case By Solutions",
      options: [
        { label: "All", value: "All" },
        { label: "Claims Management", value: "Claims Management", variant: "red", description: "AI use cases built for", img: "solution-icon-14.svg" },
        { label: "Credit Risk", value: "Credit Risk", variant: "light", description: "AI use cases built for", img: "solution-icon-11.svg" },
        { label: "Customer Experience", value: "Customer Experience", variant: "danger", description: "AI use cases built for", img: "solution-icon-9.svg" },
        { label: "Customer Retention", value: "Customer Retention", variant: "red", description: "AI use cases built for", img: "solution-icon-8.svg" },
        { label: "Equity Research", value: "Equity Research", variant: "secondary", description: "AI use cases built for", img: "solution-icon-12.svg" },
        { label: "ESG Investing", value: "ESG Investing", variant:"primary", description: "AI use cases built for", img: "solution-icon-3.svg" },
        { label: "Event-Driven Investing", value: "Event-Driven Investing", variant:"advanced", description: "AI use cases built for", img: "solution-icon-2.svg" },
        { label: "Financial Crimes", value: "Financial Crimes", variant:"danger", description: "AI use cases built for", img: "solution-icon-7.svg" },
        { label: "Fundamental Research", value: "Fundamental Research", variant:"pink", description: "AI use cases built for", img: "solution-icon-6.svg" },
        { label: "Long/Short Equity", value: "Long/Short Equity", variant:"danger", description: "AI use cases built for", img: "solution-icon-5.svg" },
        { label: "Merger Arbitrage", value: "Merger Arbitrage", variant:"red", description: "AI use cases built for", img: "solution-icon-4.svg" },
        { label: "Mergers & Acquisitions", value: "Mergers & Acquisitions", variant:"danger", description: "AI use cases built for", img: "solution-icon-13.svg" },
        { label: "Product Recommendations", value: "Product Recommendations", variant:"secondary", description: "AI use cases built for", img: "solution-icon-10.svg" },
        { label: "Quantitative Research", value: "Quantitative Research", variant:"primary", description: "AI use cases built for", img: "solution-icon-1.svg" },
        { label: "Underwriting", value: "Underwriting", variant:"primary", description: "AI use cases built for", img: "solution-icon-1.svg" },
      ]
    },
    list: [
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Credit Risk Analytics",
        description: "Gain insights into a company's credit health"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "ESG Analytics",
        description: "Gain insights into a company's ESG practices"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "COVID-19 Analytics",
        description: "Gain insights into how COVID-19 is affecting a company"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "M&A Anaytics",
        description: "Gain insights into merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Macro Analytics",
        description: "Gain insights into macroeconomy activities"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Speculation Analytics",
        description: "Gain insights into corporate action rumors"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Analyst Rating Analytics",
        description: "Gain insights into performance ratings for a company"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Trade War Analytics",
        description: "Gain insights into how trade wars affect a company"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Competitive Analytics",
        description: "Gain insights into a company's competitors "
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Legal Action Analytics",
        description: "Gain insights into legal actions against a company"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "U.S Equities Analytics",
        description: "Gain insights into events affecting US publicly traded companies"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "International Equities Analytics",
        description: "Gain insights into events affecting international publicly traded companies"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Commodities Analytics",
        description: "Gain insights into events affecting commodities"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Forex Analytics",
        description: "Gain insights into events affecting forex"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Cryptocurrency Analytics",
        description: "Gain insights into events affecting cryptocurrencies"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "S&P 500 Analytics",
        description: "Gain insights into events affecting the S&P 500 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Russell 1000 Analytics",
        description: "Gain insights into events affecting the Russell 1000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Russell 2000 Anaytics",
        description: "Gain insights into events affecting the Russell 2000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Russell 3000 Analytics",
        description: "Gain insights into events affecting the Russell 3000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Wilshire 5000 Analytics",
        description: "Gain insights into events affecting the Wilshire 5000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "NASDAQ 100 Analytics",
        description: "Gain insights into events affecting the NASDAQ 100 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "S&P Asia 50 Analytics",
        description: "Gain insights into events affecting the S&P Asia 50 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "STOXX Europe 600 Analytics",
        description: "Gain insights into events affecting the STOXX Europe 600 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "China SSE 180 Analytics",
        description: "Gain insights into events affecting the China SSE 180 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "India Nifty 50 Analytics",
        description: "Gain insights into events affecting the India Nifty 50 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Nikkei 225 Analytics",
        description: "Gain insights into events affecting the Nikkei 225 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "FTSE 100 Analytics",
        description: "Gain insights into events affecting the FTSE 100 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "S&P Europe 350 Analytics",
        description: "Gain insights into events affecting the S&P Europe 350 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "China CSI 300 Analytics",
        description: "Gain insights into events affecting the China CSI 300 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Nikkei 400 Analytics",
        description: "Gain insights into events affecting the Nikkei 400 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "2020 U.S. Election Analytics",
        description: "Gain insights how the 2020 U.S. election is affect a company"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "SEC Form 10-K Analytics",
        description: "Gain insights into a company's form 10-K"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "SEC Form 10-Q Analytics",
        description: "Gain insights into a company's form 10-Q"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "SEC Form 8-K Analytics",
        description: "Gain insights into a company's form 8-K"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Insights",
        name: "Earnings Transcript Analytics",
        description: "Gain insights into a company's earnings transcript"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-K"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-Q Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-Q"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "SEC Form 8-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 8-K"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "Earnings Transcript KPIs",
        description: "Extract a company's key performance indicators from earnings transcriptions"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "Business Performance KPIs",
        description: "Extract a company's key performance indicators from the news"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "Bankruptcy KPIs",
        description: "Extract a company's key bankruptcy details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "Lawsuit KPIs",
        description: "Extract a company's key lawsuit details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "ESG KPIs",
        description: "Extract a company's key ESG details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Quantitative Research",
        workflow: "Smart Extraction",
        name: "Valuation KPIs",
        description: "Extract a company's key valuation details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Credit Risk Analytics",
        description: "Gain insights into a company's credit health"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "COVID-19 Analytics",
        description: "Gain insights into how COVID-19 is affecting a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "M&A Anaytics",
        description: "Gain insights into merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Macro Analytics",
        description: "Gain insights into macroeconomy activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Speculation Analytics",
        description: "Gain insights into corporate action rumors"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Trade War Analytics",
        description: "Gain insights into how trade war is affecting a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Competitive Analytics",
        description: "Gain insights into a company's competitors "
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "Legal Action Analytics",
        description: "Gain insights into legal actions against a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Insights",
        name: "2020 U.S. Election Analytics",
        description: "Gain insights into how the 2020 U.S. election will affect a company",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Bankruptcy Summaries",
        description: "Auto-generate summaries on bankruptcy activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Corporate Action Summaries",
        description: "Auto-generate summaries on corporate action activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Laws and Regulations Summaries",
        description: "Auto-generate summaries on laws and regulation activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Legal Action Summaries",
        description: "Auto-generate summaries on legal action activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "M&A Summaries",
        description: "Auto-generate summaries on merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Business Development Summaries",
        description: "Auto-generate summaries on business development activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "COVID-19 Summaries",
        description: "Auto-generate summaries on COVID-19 activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Summaries",
        name: "Trade War Summaries",
        description: "Auto-generate summaries on trade war activities"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Extraction",
        name: "Bankruptcy KPIs",
        description: "Extract a company's key bankruptcy details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Extraction",
        name: "Lawsuit KPIs",
        description: "Extract a company's key lawsuit details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Extraction",
        name: "ESG KPIs",
        description: "Extract a company's key ESG details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a company",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "COVID-19 Alerts",
        description: "Get real-time COVID-19 alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "M&A Alerts",
        description: "Get real-time merger and acquisition alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Macro Alerts",
        description: "Get real-time macroeconomic alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Trade War Alerts",
        description: "Get real-time trade war alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "2020 U.S. Election Alerts",
        description: "Get real-time 2020 U.S. election alerts"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Legal Action Alerts",
        description: "Get real-time legal action alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Event-Driven Investing",
        workflow: "Smart Alerts",
        name: "Laws and Regulations Alerts",
        description: "Get real-time law and regulation alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "ESG Investing",
        workflow: "Smart Insights",
        name: "ESG Analytics",
        type: "discover",
        description: "Gain insights into a company's ESG practices",
        "Data": "A",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "ESG Investing",
        workflow: "Smart Summaries",
        name: "ESG Summaries",
        description: "Auto-generate summaries on ESG activities"
      },
      {
        industry: "Asset Management",
        solution: "ESG Investing",
        workflow: "Smart Extraction",
        name: "ESG KPIs",
        description: "Extract a company's key ESG details from documents"
      },
      {
        industry: "Asset Management",
        solution: "ESG Investing",
        workflow: "Smart Alerts",
        name: "ESG Alerts",
        description: "Get real-time ESG alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Merger Arbitrage",
        workflow: "Smart Insights",
        name: "M&A Anaytics",
        description: "Gain insights into merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Merger Arbitrage",
        workflow: "Smart Summaries",
        name: "M&A Summaries",
        description: "Auto-generate summaries on merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Merger Arbitrage",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Merger Arbitrage",
        workflow: "Smart Alerts",
        name: "M&A Alerts",
        description: "Get real-time merger and acquisition alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity ",
        workflow: "Smart Insights",
        name: "U.S Equities Analytics",
        description: "Gain insights into events affecting US publicly traded companies"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "International Equities Analytics",
        description: "Gain insights into events affecting international publicly traded companies"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Commodities Analytics",
        description: "Gain insights into events affecting commodities"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Forex Analytics",
        description: "Gain insights into events affecting forex"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Cryptocurrency Analytics",
        description: "Gain insights into events affecting cryptocurrencies"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "S&P 500 Anaytics",
        description: "Gain insights into events affecting the S&P 500 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Russell 1000 Analytics",
        description: "Gain insights into events affecting the Russell 1000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Russell 2000 Anaytics",
        description: "Gain insights into events affecting the Russell 2000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Russell 3000 Analytics",
        description: "Gain insights into events affecting the Russell 3000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Wilshire 5000 Analytics",
        description: "Gain insights into events affecting the Wilshire 5000 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "NASDAQ 100 Analytics",
        description: "Gain insights into events affecting the NASDAQ 100 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "S&P Asia 50 Analytics",
        description: "Gain insights into events affecting the S&P Asia 50 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "STOXX Europe 600 Analytics",
        description: "Gain insights into events affecting the STOXX Europe 600 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "China SSE 180 Analytics",
        description: "Gain insights into events affecting the China SSE 180 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "India Nifty 50 Analytics",
        description: "Gain insights into events affecting the India Nifty 50 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Nikkei 225 Analytics",
        description: "Gain insights into events affecting the Nikkei 225 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "FTSE 100 Analytics",
        description: "Gain insights into events affecting the FTSE 100 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "S&P Europe 350 Analytics",
        description: "Gain insights into events affecting the S&P Europe 350 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "China CSI 300 Analytics",
        description: "Gain insights into events affecting the China CSI 300 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Long/Short Equity",
        workflow: "Smart Insights",
        name: "Nikkei 400 Analytics",
        description: "Gain insights into events affecting the Nikkei 400 constituents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Bankruptcy Summaries",
        description: "Auto-generate summaries on bankruptcy activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "SEC Form 10-K Financial Summaries",
        description: "Auto-generate summaries from a company's form 10-K"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "SEC Form 10-Q Financial Summaries",
        description: "Auto-generate summaries from a company's form 10-Q"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "SEC Form 8-K Financial Summaries",
        description: "Auto-generate summaries from a company's form 8-K"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Earnings Transcript Summaries",
        description: "Auto-generate summaries on a company's earnings transcript",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Competitive Summaries",
        description: "Auto-generate summaries on a company's competition"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Corporate Action Summaries",
        description: "Auto-generate summaries on corporate action activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "ESG Summaries",
        description: "Auto-generate summaries on ESG activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Laws and Regulations Summaries",
        description: "Auto-generate summaries on law and regulation activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Legal Action Summaries",
        description: "Auto-generate summaries on legal action activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "M&A Summaries",
        description: "Auto-generate summaries on merger and acquisition activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Business Development Summaries",
        description: "Auto-generate summaries on business development activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "COVID-19 Summaries",
        description: "Auto-generate summaries on COVID-19 activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Summaries",
        name: "Trade War Summaries",
        description: "Auto-generate summaries on trade war activities"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-K"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-Q Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-Q"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "SEC Form 8-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 8-K"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Earnings Transcript KPIs",
        description: "Extract a company's key performance indicators from earnings transcripts"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Business Performance KPIs",
        description: "Extract a company's key performance indicators from the news"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Bankruptcy KPIs",
        description: "Extract a company's key bankruptcy details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Lawsuit KPIs",
        description: "Extract a company's key lawsuit details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "ESG KPIs",
        description: "Extract a company's key ESG details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Valuation KPIs",
        description: "Extract a company's key valuation details from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Company Catagorical Information ",
        description: "Extract a company's catagorical information such as industry and sector from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Company Suppliers",
        description: "Extract information on a company's suppliers from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Company Executives",
        description: "Extract insights on a company's executives from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Company Subsidaries",
        description: "Extract insights on a company's subsidaries from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Extraction",
        name: "Company Products",
        description: "Extract insights on a company's product from documents"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Investment Themes",
        description: "Auto-tag your documents with investment themes for intelligent filtering",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Financial Securities",
        description: "Auto-tag your documents with financial securities for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Executives",
        description: "Auto-tag your documents with executives for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Products",
        description: "Auto-tag your documents with products for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Locations",
        description: "Auto-tag your documents with locations for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Source",
        description: "Auto-tag your documents with source for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Language",
        description: "Auto-tag your documents with language for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Industry",
        description: "Auto-tag your documents with industry for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Sort Content by Date",
        description: "Sort your documents based on timestamps identified"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative sentiment"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant content"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "ESG Alerts",
        description: "Get real-time ESG alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "COVID-19 Alerts",
        description: "Get real-time COVID-19 alerts on a company",
        "Popular Use Case by Section": "A"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "M&A Alerts",
        description: "Get real-time merger and acquisition alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Macro Alerts",
        description: "Get real-time macroeconomic alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Trade War Alerts",
        description: "Get real-time trade war alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "2020 U.S. Election Alerts",
        description: "Get real-time 2020 U.S. election alerts"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Legal Action Alerts",
        description: "Get real-time legal action alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Laws and Regulations Alerts",
        description: "Get real-time law and regulation alerts on a company"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Portfolio Company Alerts",
        description: "Get real-time alerts on events affecting your portfolio"
      },
      {
        industry: "Asset Management",
        solution: "Fundamental Research",
        workflow: "Smart Alerts",
        name: "Industry Alerts",
        description: "Get real-time alerts on events affecting your industry"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Insights",
        name: "Anti-Money Laundering Analytics",
        description: "Gain insights into anti-money laundering activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Insights",
        name: "Customer Legal Action Analytics",
        description: "Gain insights into legal actions against a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Insights",
        name: "Customer Credit Risk Analytics",
        description: "Gain insights into credit risk activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Customer Legal Action Summaries",
        description: "Auto-generate summaries on legal actions against a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Customer Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Anti-Money Laundering Summaries",
        description: "Auto-generate summaries on anti-money laundering activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Extraction",
        name: "Basic Individual Customer KYC Information",
        description: "Extract an individual customer's basic information for KYC"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Extraction",
        name: "Basic Corporate Customer KYC Information",
        description: "Extract a corporate customer's basic information for KYC"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by AML Themes",
        description: "Auto-tag your documents by AML themes for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your documents by customers for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents by positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative sentiment"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant content"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Legal Action Alerts",
        description: "Get real-time legal action alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Anti-Money Laundering Alerts",
        description: "Get real-time anti-money laundering alerts on a customer",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Competitive Banking Analytics",
        description: "Gain insights into a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Credit Risk Analytics",
        description: "Gain insights into credit risk activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Counterparty Risk Analytics",
        description: "Gain insights into counterparty risk related to a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Churn Analytics",
        description: "Gain insights into churn activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Summaries",
        name: "Competitive Banking Summaries",
        description: "Auto-generate summaries on a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Summaries",
        name: "Customer Credit Risk Summaries",
        description: "Auto-generate summaries on a customer's credit risk activities "
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Summaries",
        name: "Customer Counterparty Risk Summaries",
        description: "Auto-generate summaries on a customer's counterparty risk"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Summaries",
        name: "Customer Churn Summaries",
        description: "Auto-generate summaries on churn activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Bank Retention Themes",
        description: "Auto-tag your document by bank retention themes for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your document by customers for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Banking Products",
        description: "Auto-tag your document by banking products for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant customer feedback"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Competitive Banking Alerts",
        description: "Get real-time alerts on a bank's competitiors"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Counterparty Risk Alerts",
        description: "Get real-time alerts on a customer's counterparty risk"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Legal Action Alerts",
        description: "Get real-time legal action alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Churn Alerts",
        description: "Get real-time churn alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Competitive Banking Analytics",
        description: "Gain insights into a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Meeting Notes Analytics",
        description: "Gain insights into customer meeting notes"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Banking Conversation Analytics",
        description: "Gain insights into customer conversations via chat and emails",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Competitive Banking Summaries",
        description: "Auto-generate summaries on a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Meeting Notes Summaries",
        description: "Auto-generate summaries based on customer meeting notes"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Banking Conversation Summaries",
        description: "Auto-generate summaries based on customer conversations"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Customer Experience Themes",
        description: "Auto-tag your documents with customer experience themes for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your documents with customers for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Banking Products",
        description: "Auto-tag your documents with banking products for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant customer feedback"
      },
      {
        industry: "Banks",
        solution: "Customer Experience",
        workflow: "Smart Recommendations",
        name: "Banking FAQ Chatbot",
        description: "Auto-recommend answers to customers' questions",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Competitive Banking Analytics",
        description: "Gain insights into a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Customer Churn Analytics",
        description: "Gain insights into churn activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Banking Products Analytics",
        description: "Gain insights into a bank's products"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Competitive Banking Summaries",
        description: "Auto-generate summaries on a bank's competitors"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Customer Churn Summaries",
        description: "Auto-generate summaries on churn activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Banking Products Summaries",
        description: "Auto-generate summaries on a bank's products"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Filter Content by Banking Products",
        description: "Auto-tag your documents with banking products for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative product sentiment for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Banks",
        solution: "Product Recommendations",
        workflow: "Smart Alerts",
        name: "Customer Churn Alerts",
        description: "Get real-time churn alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Insights",
        name: "Customer Credit Risk Analytics",
        description: "Gain insights into credit risk activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Insights",
        name: "Counterparty Risk Analytics",
        description: "Gain insights into counterparty risk related to a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Summaries",
        name: "Customer Legal Action Summaries",
        description: "Auto-generate summaries on legal actions againsts a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Summaries",
        name: "Customer Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Summaries",
        name: "COVID-19 Summaries",
        description: "Auto-generate summaries on COVID-19 activities related to a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Extraction",
        name: "Bankruptcy KPIs",
        description: "Extract a customer's key bankruptcy details from documents"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Extraction",
        name: "Lawsuit KPIs",
        description: "Extract a customer's key lawsuit details from documents"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Extraction",
        name: "Bank Transaction Catagories",
        description: "Extract key catagories from a customer's bank statement transaction details",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Extraction",
        name: "Bank Transaction Values",
        description: "Extract key financials from a customer's bank statement "
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Search",
        name: "Filter Transaction by Catagories",
        description: "Auto-tag a customer's bank statement transactions with key catagories for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Alerts",
        name: "Customer Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Alerts",
        name: "Customer Legal Action Alerts",
        description: "Get real-time legal action alerts on a customer"
      },
      {
        industry: "Banks",
        solution: "Credit Risk",
        workflow: "Smart Alerts",
        type: "discover",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Credit Risk Analytics",
        description: "Gain insights into a company's credit health"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "ESG Analytics",
        description: "Gain insights into a company's ESG practice"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "COVID-19 Analytics",
        description: "Gain insights into how COVID-19 is affecting a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "M&A Anaytics",
        description: "Gain insights into merger and acquisition activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Macro Analytics",
        description: "Gain insights into macroeconomic activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Speculation Analytics",
        description: "Gain insights into corporate action rumors"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Analyst Rating Analytics",
        description: "Gain insights into performance ratings for a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Trade War Analytics",
        description: "Gain insights into how trade wars are affecting a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Competitive Analytics",
        description: "Gain insights into a company's competitors "
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Legal Action Analytics",
        description: "Gain insights into legal actions against a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "U.S Equities Analytics",
        description: "Gain insights into events affecting US publicly traded companies"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "International Equities Analytics",
        description: "Gain insights into events affecting international publicly traded companies"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "S&P 500 Anaytics",
        description: "Gain insights into events affecting the S&P 500 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Russell 1000 Analytics",
        description: "Gain insights into events affecting the Russell 1000 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Russell 2000 Anaytics",
        description: "Gain insights into events affecting the Russell 2000 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Russell 3000 Analytics",
        description: "Gain insights into events affecting the Russell 3000 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Wilshire 5000 Analytics",
        description: "Gain insights into events affecting the Wilshire 5000 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "NASDAQ 100 Analytics",
        description: "Gain insights into events affecting the NASDAQ 100 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "S&P Asia 50 Analytics",
        description: "Gain insights into events affecting the S&P Asia 50 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "STOXX Europe 600 Analytics",
        description: "Gain insights into events affecting the STOXX Europe 600 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "China SSE 180 Analytics",
        description: "Gain insights into events affecting the China SSE 180 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "India Nifty 50 Analytics",
        description: "Gain insights into events affecting the India Nifty 50 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Nikkei 225 Analytics",
        description: "Gain insights into events affecting the Nikkei 225 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "FTSE 100 Analytics",
        description: "Gain insights into events affecting the FTSE 100 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "S&P Europe 350 Analytics",
        description: "Gain insights into events affecting the S&P Europe 350 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "China CSI 300 Analytics",
        description: "Gain insights into events affecting the China CSI 300 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Nikkei 400 Analytics",
        description: "Gain insights into events affecting the Nikkei 400 constituents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "2020 U.S. Election Analytics",
        description: "Gain insights into how the 2020 U.S. election will affect a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "SEC Form 10-K Analytics",
        description: "Gain insights into a company's form 10-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "SEC Form 10-Q Analytics",
        description: "Gain insights into a company's form 10-Q"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "SEC Form 8-K Analytics",
        description: "Gain insights into a company's form 8-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Insights",
        name: "Earnings Transcript Analytics",
        description: "Gain insights into a company's earnings transcript"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Bankruptcy Summaries",
        description: "Auto-generate summaries on bankruptcy activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "SEC Form 10-K Financial Summaries",
        description: "Auto-generate summaries from a company's form 10-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "SEC Form 10-Q Financial Summaries",
        description: "Auto-generate summaries from a company's form 10-Q"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "SEC Form 8-K Financial Summaries",
        description: "Auto-generate summaries from a company's form 8-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Earnings Transcript Summaries",
        description: "Auto-generate summaries on a company's earnings transcript"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Competitive Summaries",
        description: "Auto-generate summaries on a company's competition"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Corporate Action Summaries",
        description: "Auto-generate summaries on corporate action activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "ESG Summaries",
        description: "Auto-generate summaries on ESG activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Laws and Regulations Summaries",
        description: "Auto-generate summaries on laws and regulations activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Legal Action Summaries",
        description: "Auto-generate summaries on legal action activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "M&A Summaries",
        description: "Auto-generate summaries on merger and acquisition activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Business Development Summaries",
        description: "Auto-generate summaries on business development activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "COVID-19 Summaries",
        description: "Auto-generate summaries on COVID-19 activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Summaries",
        name: "Trade War Summaries",
        description: "Auto-generate summaries on trade war activities"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "SEC Form 10-Q Financial KPIs",
        description: "Extract a company's key performance indicators from the form 10-Q"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "SEC Form 8-K Financial KPIs",
        description: "Extract a company's key performance indicators from the form 8-K"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Earnings Transcript KPIs",
        description: "Extract a company's key performance indicators from earnings transcriptions"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Business Performance KPIs",
        description: "Extract a company's key performance indicators from the news"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Bankruptcy KPIs",
        description: "Extract a company's key bankruptcy details from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Lawsuit KPIs",
        description: "Extract a company's key lawsuit details from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "ESG KPIs",
        description: "Extract a company's key ESG details from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Valuation KPIs",
        description: "Extract a company's key valuation details from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Company Catagorical Information ",
        description: "Extract a company's catagorical information such as industry and sector from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Company Suppliers",
        description: "Extract insights on a company's suppliers from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Company Executives",
        description: "Extract insights on a company's executives from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Company Subsidaries",
        description: "Extract insights on a company's subsidaries from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Extraction",
        name: "Company Products",
        description: "Extract insights on a company's products from documents"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Investment Themes",
        description: "Auto-tag your documents with investment themes for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Financial Securities",
        description: "Auto-tag your documents with financial securities for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Executives",
        description: "Auto-tag your documents with executives for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Products",
        description: "Auto-tag your documents with products for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Locations",
        description: "Auto-tag your documents with locations for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Source",
        description: "Auto-tag your documents with source for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Language",
        description: "Auto-tag your documents with language for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Industry",
        description: "Auto-tag your documents with industry for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Sort Content by Date",
        description: "Sort your documents based on timestamps identified"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative sentiment"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant content"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "ESG Alerts",
        description: "Get real-time ESG alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "COVID-19 Alerts",
        description: "Get real-time COVID-19 alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "M&A Alerts",
        description: "Get real-time merger and acquisition alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Macro Alerts",
        description: "Get real-time macroeconomy alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Trade War Alerts",
        description: "Get real-time trade war alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "2020 U.S. Election Alerts",
        description: "Get real-time 2020 U.S. election alerts"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Legal Action Alerts",
        description: "Get real-time legal action alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Laws and Regulations Alerts",
        description: "Get real-time law and regulation alerts on a company"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Portfolio Company Alerts",
        description: "Get real-time alerts on events affecting your portfolio"
      },
      {
        industry: "Banks",
        solution: "Equity Research",
        workflow: "Smart Alerts",
        name: "Industry Alerts",
        description: "Get real-time alerts on events affecting your industry"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Insights",
        name: "M&A Anaytics",
        description: "Gain insights into merger and acquisition activities"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Insights",
        name: "Competitive Analytics",
        description: "Gain insights into a company's competitors "
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Insights",
        name: "Meeting Notes Analytics",
        description: "Gain insights into customer meeting notes"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Summaries",
        name: "Competitive Summaries",
        description: "Auto-generate summaries on a company's competition"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Summaries",
        name: "M&A Summaries",
        description: "Auto-generate summaries on merger and acquisition activities"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Summaries",
        name: "Business Development Summaries",
        description: "Auto-generate summaries on business development activities"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Summaries",
        name: "Meeting Notes Summaries",
        description: "Auto-generate summaries based on customer meeting notes"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "M&A KPIs",
        description: "Extract a company's key M&A details from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Valuation KPIs",
        description: "Extract a company's key valuation details from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Company Catagorical Information ",
        description: "Extract a company's catagorical information such as industry and sector from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Company Suppliers",
        description: "Extract information on a company's suppliers from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Company Executives",
        description: "Extract information on a company's executives from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Company Subsidaries",
        description: "Extract information on a company's subsidaries from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Extraction",
        name: "Company Product",
        description: "Extract information on a company's products from documents"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Filter Content by M&A Themes",
        description: "Auto-tag your documents with merger and acquisition themes for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Filter Content by Companies",
        description: "Auto-tag your documents with companies for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Filter Content by Executives",
        description: "Auto-tag your documents with executives for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Filter Content by Industry",
        description: "Auto-tag your documents with industries for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative sentiment"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevancy content"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Alerts",
        name: "M&A Alerts",
        description: "Get real-time mergers and acquisition alerts on a company",
        "Popular Use Case by Section": "B"
      },
      {
        industry: "Banks",
        solution: "Mergers & Acquisitions",
        workflow: "Smart Alerts",
        name: "Industry Alerts",
        description: "Get real-time alerts on events affecting your industry"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Insights",
        type: "discover",
        name: "Anti-Money Laundering Analytics",
        description: "Gain insights into anti-money laundering activities related to a customer",
        "Popular Use Case by Section": "I"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Customer Legal Action Summaries",
        description: "Auto-generate summaries on legal actions againsts a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Customer Credit Risk Summaries",
        description: "Auto-generate summaries on credit risk activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Summaries",
        name: "Anti-Money Laundering Summaries",
        description: "Auto-generate summaries on anti-money laundering activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Extraction",
        name: "Basic Individual Customer KYC Information",
        description: "Extract an individual customer's basic information for KYC"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Extraction",
        name: "Basic Corporate Customer KYC Information",
        description: "Extract a corporate customer's basic information for KYC"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by AML Themes",
        description: "Auto-tag your documents with AML themes for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your documents with customers for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative sentiment"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant content"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Customer Legal Action Alerts",
        description: "Get real-time legal action alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Financial Crimes",
        workflow: "Smart Alerts",
        name: "Anti-Money Laundering Alerts",
        description: "Get real-time anti-money laundering alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Competitive Insurance Analytics",
        description: "Gain insights into an insurance firm's competitors"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Credit Risk Analytics",
        description: "Gain insights into credit risk activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Counterparty Risk Analytics",
        description: "Gain insights into counterparty risk related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Insights",
        name: "Customer Churn Analytics",
        description: "Gain insights into churn activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Summaries",
        name: "Customer Churn Summaries",
        description: "Auto-generate summaries on churn activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Insurance Retention Themes",
        description: "Auto-tag your documents with insurance retention themes for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your documents with customers for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Filter Content by Insurance Products",
        description: "Auto-tag your documents with insurance products for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant customer feedback"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Bankruptcy Alerts",
        description: "Get real-time bankruptcy alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Legal Action Alerts",
        description: "Get real-time legal action alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Retention",
        workflow: "Smart Alerts",
        name: "Customer Churn Alerts",
        description: "Get real-time churn alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Competitive Insurance Analytics",
        description: "Gain insights into an insurance firm's competitors"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Meeting Notes Analytics",
        description: "Gain insights into customer meeting notes"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Insights",
        name: "Insurance Conversation Analytics",
        description: "Gain insights into customer conversations via chats and emails",
        "Popular Use Case by Section": "I"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Competitive Insurance Summaries",
        description: "Auto-generate summaries on an insurance firm's competitors"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Meeting Notes Summaries",
        description: "Auto-generate summaries based on customer meeting notes"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Summaries",
        name: "Insurance Conversation Summaries",
        description: "Auto-generate summaries based on customer conversations"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Customer Experience Themes",
        description: "Auto-tag your documents with customer experience themes for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Customers",
        description: "Auto-tag your documents with customers for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Insurance Products",
        description: "Auto-tag your documents with insurance products for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative sentiment for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Search",
        name: "Sort Content by Relevance",
        description: "Sort your documents based on the most relevant customer feedback"
      },
      {
        industry: "Insurance",
        solution: "Customer Experience",
        workflow: "Smart Recommendations",
        name: "Insurance FAQ Chatbot",
        description: "Auto-recommend answers to customers questions",
        "Popular Use Case by Section": "I"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Competitive Insurance Analytics",
        description: "Gain insights into an insurance firm's competitors"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Customer Churn Analytics",
        description: "Gain insights into churn activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Insights",
        name: "Insurance Products Analytics",
        description: "Gain insights into an insurance firm's products"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Competitive Insurance Summaries",
        description: "Auto-generate summaries on an insurance firm's competitors"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Customer Churn Summaries",
        description: "Auto-generate summaries on churn activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Summaries",
        name: "Insurance Products Summaries",
        description: "Auto-generate summaries on a insurance firm's products"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Filter Content by Insurance Products",
        description: "Auto-tag your documents with insurance products for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Filter Content by Sentiment",
        description: "Auto-tag your documents with positive or negative product sentiment for intelligent filtering"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Search",
        name: "Sort Content by Sentiment",
        description: "Sort your documents based on positive or negative customer feedback"
      },
      {
        industry: "Insurance",
        solution: "Product Recommendations",
        workflow: "Smart Alerts",
        name: "Customer Churn Alerts",
        description: "Get real-time churn alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Insights",
        name: "COVID-19 Analytics",
        description: "Gain insights into how COVID-19 is affecting a customer"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Insights",
        name: "Natural Diaster Analytics",
        description: "Gain insights into how a natural diaster event is affecting a customer",
        "Popular Use Case by Section": "I"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Summaries",
        name: "COVID-19 Summaries",
        description: "Auto-generate summaries on COVID-19 activities related to a customer"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Extraction",
        name: "Claims Information",
        description: "Extract standard claims information required for providing a payout"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Verification",
        name: "Claim Identification ",
        description: "Identify if a customer's claim is valid",
        "Popular Use Case by Section": "I"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Alerts",
        name: "COVID-19 Alerts",
        description: "Get real-time COVID-19 alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Claims Management",
        workflow: "Smart Alerts",
        name: "Customer Credit Risk Alerts",
        description: "Get real-time credit risk alerts on a customer"
      },
      {
        industry: "Insurance",
        solution: "Underwriting",
        workflow: "Smart Insights",
        name: "Customer Credit Risk Analytics",
        description: "Gain insights into a customer's credit health"
      },
      {
        industry: "Insurance",
        solution: "Underwriting",
        workflow: "Smart Extraction",
        name: "Insurance Application Information",
        description: "Extract standard insurance application information required for underwriting",
        "Popular Use Case by Section": "I"
      }
    ]
  },
}