export const page = {
  seo: {
    title: "Accern - Careers",
    meta: [
      {name: "description", content: "Accern - Careers"},
      {property: "og:title", content: "Accern - Careers"}
    ],
  },
  hero: {
    label: "Careers",
    title: "Explore a career<br> at <strong>Accern</strong>",
    titleCL: "mw-580",
    description: "If you have a passion for impactful work, get excited about technological innovations, and are knowledge-driven then you will love what you do and thrive at Accern.",
    img: "careers-hero-illustration.png",
    button: {
      name: "OPEN POSITIONS",
      scrollTo: "open-positions"
    },
  },

  benefits: {
    label: "Benefits",
    title: "Join the next generation of AI product strategists, data scientists, developers, and tech-savvy business leaders.",
    titleCL: "w-100",
    columnsType: "columns-2",
    className: "blocks-type-2",
    columns: [
      { title: "Personal growth", description: "As one of the most innovative tech companies, we enable accelerated growth for our employees. Learn, grow, and challenge yourself to the next step in your career.", icon: "icon-taxonomy.svg"},
      { title: "Flexible paid time off", description: "We believe in a healthy work-life balance. We truly value and reward our employees with an unlimited vacation and sick day policy.", icon: "icon-adaptive-nlp.svg"},
      { title: "Competitive compensation", description: "We believe in happiness and health. We offer a competitive salary and health coverage, with 75 percent of employee and dependent medical, dental, and vision premium coverage, and $100 per month towards HSA plans.", icon: "icon-deployment.svg"},
      { title: "Diverse and inclusive team", description: "We pride ourselves on having a truly diverse and inclusive workforce. Our team is global, yet close-knit. You'll be welcomed by a global community of thinkers, doers, and creators.", icon: "icon-integrations.svg"},
      { title: "Home office resources", description: "We believe in equipping our team with home office equipment to support efficient work. We provide a MacBook, Display, and other resources for all employees.", icon: "icon-resources.svg"},
      { title: "Future offerings", description: "As Accern grows, our benefits package grows. We plan to add a 401K, commuter benefits, 529 college savings plan, gym and fitness/wellness plan, and more.", icon: "icon-offering.svg"},
    ]
  },


  getstarted: {
    title: "Careers",
    description: "Interested in joining us? Please check out our open positions.",
    descrCL: "mw-500",
    placeholder: "Email address",
    link: {
      name: "GET IN TOUCH",
      modal: "getInTouch"
    }
  },

  ourMission: {
    title: "Our Mission",
    description: "Democratize artificial intelligence. Impact the world.",
    descrCL: "mw-250",
    content: "To accelerate AI workflows for enterprises with a no-code development platform."
  },

  cover: {
    img: "careers-office.jpg",
    className: "mb-spacer"
  },

  remoteEnvironment: {
    title: "Flexible work from home and remote-friendly environment.",
    titleCL: "mw-800",
    description: "While our headquarters are in New York, more than half of our team is remote, working from locations ranging from India to Morocco to Canada. We make sure that everyone feels included and keep an open door policy.",
    descrCL: "mw-700",
    className: "pt-0",
    team: [
      {img:"team-1.png"},
      {img:"team-2.png"},
      {img:"team-3.png"},
      {img:"team-4.png"},
      {img:"team-5.png"},
      {img:"team-6.png"},
      {img:"team-7.png"},
      {img:"team-8.png"},
      {img:"team-9.png"},
      {img:"team-10.png"},
      {img:"team-11.png"},
      {img:"team-12.png"},
    ]
  },

  openPositions: {
    title: "Open Positions",
    className: "pt-0",
    button: {
      name: "VIEW MORE"
    },
    limit: 5,
    notFound: "Not Found",
    question: "Didn’t find a position that suits you? Don’t worry you can send us your CV and we will review it.<br><br>​​Email us at: <a href='mailto:careers@accern.com'>careers@accern.com</a>",
    locations: [
      {label: "All Locations", value: "All Locations"},
      {label: "New York City", value: "New York City"},
      {label: "Remote", value: "Remote"},
    ],
    departments: [
      {label: "All Departments", value: "All Departments"},
      {label: "Business Development", value: "Business Development"},
      {label: "Management", value: "Management"},
      {label: "Marketing", value: "Marketing"},
      {label: "Sales", value: "Sales"},
      {label: "Public Relations", value: "Public Relations"},
      {label: "Information Technology  Engineering", value: "Information Technology  Engineering"},
    ],
    positions: [
      {name: "AI Demand Generation Associate", location:"New York City", department: "Marketing, Sales, Business Development", content: "This role is responsible for developing and executing campaigns and programs to drive high quality leads to sales. You will work on generating customer demand for Accern through e-mail marketing campaigns, webinars, and partnership channel marketing in addition to qualifying all inbound leads coming through multiple channels.", link: "https://www.linkedin.com/jobs/search/?currentJobId=2023802479&f_C=3178234&geoId=92000000"},
      {name: "Director of AI Marketing", location:"New York City", department: "Marketing, Sales, Business Development", content: "We are searching for our first marketing hire, a Director of Marketing to lead the team in charge of messaging and positioning for Accern’s leading no-code AI platform, powering world-class financial services companies like Allianz, Jefferies, and Moody’s.", link: "https://www.linkedin.com/jobs/search/?currentJobId=2020992562&f_C=3178234&geoId=92000000"},
      {name: "AI Business Development Representative", location:"New York City", department: "Sales, Business Development", content: "Accern is currently seeking an AI Business Development Representative to join our team of enterprise sales professionals and help generate qualified leads.", link: "https://www.linkedin.com/jobs/search/?currentJobId=2020987702&f_C=3178234&geoId=92000000"},
      {name: "Senior DevOps Engineer", location:"New York City", department: "Information Technology  Engineering", content: "Accern is looking for a Senior DevOps Engineer to join our rapidly growing team.", link: "https://www.linkedin.com/jobs/search/?currentJobId=1960610158&f_C=3178234&geoId=92000000"},
    ]
  },
}