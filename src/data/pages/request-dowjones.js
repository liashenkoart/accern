export const page = {
  hero: {
    logo: "dowjones.png",
    logoCL: "preset-img-7",
    label: "Request more info",
    title: "<strong>Dow Jones</strong> Institutional News Service",
    titleCL: "mw-600",
    variant: "lines",
    theme: "light",
    className: "mb-5 mt-5"
  },

  requestForm: {
    about: {
      logo: "dowjones-white.png",
      bg: "bg-light.png",
      description: "Obtain broad, real-time coverage of equities, fixed income, foreign exchange, commodities, and energy markets from the reporting teams of Newswires, The Wall Street Journal, and Barron’s.",
      label: "Dow Jones"
    },
    form: {
      label: "Request Access",
      from: "Request Access Dow Jones",
      message: "We’ll be in touch shortly!",
      button: "Request Access",
      variant: "bordered",
      succesModal: {
        name: "request-success",
        title: "Thank you for selecting Accern!",
        description: "One of our representatives will contact you within 24 hours with your login details and access to additional resources on how to build your AI use cases. "
      },
      fields: [
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern: ".{2,}", isFullWidth: true, },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern: ".{2,}", isFullWidth: true, },
        { name: "title", type: "text", placeholder: "Job Title", className: "advanced", isFullWidth: true, },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true, isFullWidth: true, },
        { name: "company", type: "text", placeholder: "Company", className: "advanced", isFullWidth: true, },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced", isFullWidth: true, },
      ]
    },
  }



}