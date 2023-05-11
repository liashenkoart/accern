export const page = {
  seo: {
    title: "Accern - Company",
    meta: [
      { name: "description", content: "Accern - Company" },
      { property: "og:title", content: "Accern - Company" }
    ],
  },
  hero: {
    label: "Company",
    title: "A World-Class, Data-Driven <strong>Team</strong>",
    titleCL: "mw-580",
    description: "Meet the team that accelerates AI for organizations around the world.",
    img: "company-illustration.svg",
    button: {
      name: "JOIN OUR TEAM",
      link: "mailto:careers@accern.com"
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

  brands: {
    label: "TRUSTED BY",
    className: "pt-4 pb-4 pt-lg-5 pb-lg-5",
    columns: [
      { logo: "logo-google.png", className: "preset-img-3" },
      { logo: "logo-jefferies.png", className: "preset-img-3" },
      { logo: "logo-moodys.png", className: "preset-img-3" },
      { logo: "logo-william-blair.png", className: "preset-img-4" },
      { logo: "logo-allianz.png", className: "preset-img-3" },
      { logo: "logo-salesforce.png", className: "preset-img-6" },
    ]
  },

  keyHighlights: {
    label: "KEY HIGHLIGHTS",
    columns: [
      { title: "2014", description: "Established in NYC", className: "pt-3 pb-3 pl-4 pr-4" },
      { title: "30+", description: "Data-driven Employees", className: "pt-3 pb-3 pl-4 pr-4" },
      { title: "50+", description: "Enterprise Customers", className: "pt-3 pb-3 pl-4 pr-4"},
      { title: "$15M", description: "Raised in Venture Capital", className: "pt-3 pb-3 pl-4 pr-4"},
    ]
  },

  investors: {
    label: "Investors",
    columns: [
      { logo: "logo-fusionfund.png", logoH: "logo-fusionfund-h.png", className: "icon-carousel", link: {link: "https://www.fusionfund.com/"}},
      { logo: "logo-allianz-g.png", logoH: "logo-allianz-g-h.png", className: "icon-carousel", link:{link: "http://www.allianzlifeventures.com/"}},
      { logo: "logo-vectr.png", logoH: "logo-vectr-h.png", className: "icon-carousel", link: {link: "https://vectr.co/"}},
      { logo: "logo-mightycapital.png", logoH: "logo-mightycapital-h.png", className: "icon-carousel-4", link: {link: "https://mighty.capital/"}},
      { logo: "logo-viaductventures.png", logoH: "logo-viaductventures-h.png", className: "icon-carousel", link:{link: "http://viaduct.vc/"}},
      { logo: "logo-plugandplay.png", logoH: "logo-plugandplay-h.png", className: "icon-carousel-2", link: {link: "https://www.plugandplaytechcenter.com/"}},
      { logo: "logo-visary.png", logoH: "logo-visary-h.png", className: "icon-carousel-6", link: {link: "https://visary.capital/"}},
      { logo: "logo-tmt.png", logoH: "logo-tmt-h.png", className: "icon-carousel-4", link: {link: "https://tmtinvestments.com/"}},
      { logo: "logo-wharton.png", logoH: "logo-wharton-h.png", className: "icon-carousel-4", link: {link: "https://www.whartonalumniangels.com"}},
      { logo: "logo-onramp.png", logoH: "logo-onramp-h.png", className: "icon-carousel-6", link: {link: "https://www.onrampinsuranceconference.com/"}},
      { logo: "logo-ctc.png", logoH: "logo-ctc-h.png", className: "icon-carousel-4", link: {link: "https://www.chicagotrading.com/"}},
      { logo: "logo-whiteshark.png", logoH: "logo-whiteshark-h.png", className: "icon-carousel-5", link: {link: "http://www.whitesharkmgmt.com/"}},
      { logo: "logo-affinity.png", logoH: "logo-affinity-h.png", className: "icon-carousel-6", link: {link: "https://www.affinityinvestmentgroup.com/"}},
      { logo: "logo-chetrit.png", logoH: "logo-chetrit-h.png", className: "icon-carousel-2", link: {link: "https://chetritventures.com/"}},
      { logo: "logo-gurtin.png", logoH: "logo-gurtin-h.png", className: "icon-carousel-4", link: {link: "https://www.gurtin.com/"}},
    ]
  },

  team: {
    title: "We are a knowledge-driven team of creators.",
    description: "A world-class team with backgrounds in big data, data science, artificial intelligence, and financial services.",
    type: "filter",
    version: "team",
    className: "pt-4 pb-4 pt-lg-5 pb-lg-5",
    isGrouped: true,
    groups: [
      {
        name: "Leaders",
        columns: [
          { title: "Kumesh Aroomoogan", description: "Co-founder and CEO", icon: "team-kumesh.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/kumesh/"}]},
          { title: "Dr. Anshul V. Pandey", description: "Co-founder and CTO", icon: "team-anshul.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/anshulvikrampandey"}]},
          { title: "Bradford Wilson Cook", description: "Chief Operating Officer", icon: "team-wilson.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/bradford-wilson-cook"}]},
          { title: "Riyaz Nakhooda", description: "VP of Strategic Partnerships", icon: "team-riyaz.svg", socials: [{type: "linked", link:"https://ca.linkedin.com/in/riyaz-nakhooda-928b3015"}]},
          { title: "Ahmed Shabbir", description: "VP of Engineering", icon: "team-ahmed.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/ahmedshabbir/"}]},
          { title: "Dr. Josua Krause", description: "VP of Data Science", icon: "team-josua.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/josuakrause"}]},
          { title: "Dr. Cristian Felix", description: "VP of Product", icon: "team-cristian.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/cristianfelix/pt"}]},
          { title: "Carlos Espejo", description: "VP of Big Data Infrastructure", icon: "team-carlos.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/carlos-espejo-6a48b618"}]},
        ]
      },
      {
        name: "Team Members",
        columns: [
          { title: "Kumesh Aroomoogan", description: "Co-founder and CEO", icon: "team-kumesh.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/kumesh/"}]},
          { title: "Dr. Anshul V. Pandey", description: "Co-founder and CTO", icon: "team-anshul.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/anshulvikrampandey"}]},
          { title: "Bradford Wilson Cook", description: "Chief Operating Officer", icon: "team-wilson.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/bradford-wilson-cook"}]},
          { title: "Riyaz Nakhooda", description: "VP of Strategic Partnerships", icon: "team-riyaz.svg", socials: [{type: "linked", link:"https://ca.linkedin.com/in/riyaz-nakhooda-928b3015"}]},
          { title: "Ahmed Shabbir", description: "VP of Engineering", icon: "team-ahmed.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/ahmedshabbir/"}]},
          { title: "Dr. Josua Krause", description: "VP of Data Science", icon: "team-josua.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/josuakrause"}]},
          { title: "Dr. Cristian Felix", description: "VP of Product", icon: "team-cristian.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/cristianfelix/pt"}]},
          { title: "Carlos Espejo", description: "VP of Big Data Infrastructure", icon: "team-carlos.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/carlos-espejo-6a48b618"}]},
          { title: "Karthik Tiruveedhi", description: "Senior DevOps Engineer", icon: "team-venkata.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/karthiktvs"}]},
          { title: "Yougui (Josh) Qu", description: "Customer AI Lead", icon: "team-yougui.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/yougui-qu"}]},
          { title: "Keenan Singh", description: "Customer Delivery Lead", icon: "team-keenan.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/keenan-singh-4856b811b"}]},
          { title: "Mayank Lamba", description: "Software Engineer", icon: "team-mayank.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/mayanklamba"}]},
          { title: "Yuxiang Zhang", description: "Senior Data Scientist", icon: "team-yuxiang.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/yuxiang-zhang-8990929b"}]},
          { title: "Shivendra Vikram Pandey", description: "Managing Director", icon: "team-shivendra.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/shivendraprofile"}]},
          { title: "Akhilesh Pandey", description: "Data Scientist", icon: "team-akhilesh.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/akhilesh12"}]},
          { title: "Edwin Sam Sundar", description: "Senior DevOps Engineer", icon: "team-edwin.svg", socials: [{type: "linked", link:"#"}]},
          { title: "Gaurav Kumar Singh", description: "Software Engineer", icon: "team-gaurav.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/gauravsinghaec"}]},
          { title: "Zahid Meer Khan", description: "Senior QA Engineer", icon: "team-zahid.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/zahidmeer"}]},
          { title: "Ayoub Kada", description: "UX/UI Lead", icon: "team-ayoub.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/ayoub-kada-906655a0/"}]},
          { title: "Prajwal Shet", description: "Customer Senior Analyst", icon: "team-prajwal.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/prajwal-shet"}]},
          { title: "Yue Shangguan", description: "Data Science Intern", icon: "team-yue.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/yue-shangguan"}]},
          { title: "Navneet Choudhary", description: "QA Manager", icon: "team-navneet.svg", socials: [{type: "linked", link:"https://in.linkedin.com/in/navneet-chaudhary"}]},
        ]
      },
      {
        name: "Board Members",
        columns: [
          { title: "Kumesh Aroomoogan", description: "Co-founder and CEO", icon: "team-kumesh.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/kumesh/"}]},
          { title: "Dr. Anshul V. Pandey", description: "Co-founder and CTO", icon: "team-anshul.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/anshulvikrampandey"}]},
          { title: "Lu Zhang", description: "Fusion Fund", icon: "team-lu-zhang.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/luzhangvc"}]},
          { title: "Emily Reitan", description: "Allianz Life Ventures", icon: "team-emily.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/emily-reitan-57015520"}]},
          { title: "Jennifer Vancini", description: "Mighty Capital", icon: "team-jennifer.svg", socials: [{type: "linked", link:"https://www.linkedin.com/in/jennifer-vancini-2765b4"}]},
        ]
      }
    ],
  },

  media: {
    label: "Media",
    className: "mb-s pb-g",
    columns: [
      { logo: "logo-international-times.png", className: "icon-carousel", link: {link: "https://www.ibtimes.com/how-ai-could-turn-social-media-stock-market-gold-2574125"}},
      { logo: "logo-forbes.png", className: "icon-carousel-2", link:{link: "https://www.forbes.com/sites/montymunford/2017/11/10/data-science-startup-accern-raises-2-1-million-in-pre-series-a-funding/#ebdd0d252566"}},
      { logo: "logo-venture-beat.png", className: "icon-carousel", link: {link: "https://venturebeat.com/2017/05/15/accern-raises-1-2-million-for-ai-to-curate-financial-news/"}},
      { logo: "logo-quartz.png", className: "icon-carousel-3", link: {link: "https://qz.com/1082389/quant-hedge-funds-are-gorging-on-alternative-data-in-pursuit-of-an-investing-edge/"}},
      { logo: "logo-reuters.png", className: "icon-carousel", link:{link: "https://www.reuters.com/article/us-investors-workers-sentiment-insight/does-a-happy-employee-make-for-a-healthy-stock-price-idUSKBN0MZ01V20150408"}},
    ]
  },

  awards: {
    label: "Award & Recognition",
    className: "pt-4 pb-4 pt-lg-5 pb-lg-5",
    isReducedMargin: true,
    columns: [
      { title: "Forbes 30 Under 30", description: "Enterprise Tech", icon: "icon-forbes.png", iconH: "icon-forbes-h.png", isExternal: true, link: "https://www.forbes.com/30-under-30/2018/enterprise-technology/#668451d2551c"},
      { title: "Top 10 AI Software", description: "O’Reilly and Intel AI", icon: "icon-oreilly.png", iconH: "icon-oreilly-h.png", isExternal: true, link: "https://conferences.oreilly.com/%rtifici%l-intelligence/ai-ca-2018/public/schedule/detail/71437"},
      { title: "Best Data Analysis", description: "Benzinga FinTech Awards", icon: "icon-benzinga.png", iconH: "icon-benzinga-h.png", isExternal: true, link: "https://www.benzinga.com/events/fintech-awards/listmakers/"},
      { title: "Top Text Parser", description: "J.P.Morgan", icon: "icon-morgan.png", iconH: "icon-morgan-h.png", isExternal: true, link: "https://www.cfasociety.org/cleveland/Lists/Eventsa20Calendar/Attachments/1045/BIG-Data_AI-JPMmay2017.pdf"},
      { title: "Best Specialist Product", description: "The Technical Analyst", icon: "icon-technical-analyst.png", isExternal: true, iconH: "icon-technical-analyst-h.png", link: "https://www.technicalanalyst.co.uk/awards/winners-and-finalists/"},
    ]
  },

  weAccelerating: {
    title: "We accelerate AI workflows for enterprises with a no-code development platform.",
    titleCL: "mb-0"
  },

  footer: {
    getstarted: {
      title: "Careers",
      description: "Interested in joining us? Please visit our open positions.",
      placeholder: "Email address",
      link: {
        name: "Request Trial",
        link: ""
      }
    },
  }
}