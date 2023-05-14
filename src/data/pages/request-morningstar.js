export const page = {
  hero: {
    logo: "morningstar.png",
    label: "Request more info",
    title: "<strong>Morningstar's</strong> Global Equity Research Data Sets",
    variant: "lines",
    theme: "error",
    className: "mb-5 mt-5"
  },

  requestForm: {
    about: {
      logo: "morningstar-white.png",
      bg: "bg-error.png",
      description: "Morningstar is a financial services firm that provides a variety of investment research services. Over 150 analysts compile these data sets by analyzing funds, stock, and general market data.",
      label: "morningstar"
    },
    form: {
      label: "Request Access",
      from: "Request Access Morningstorm",
      message: "We’ll be in touch shortly!",
      button: "Request Access",
      variant: "bordered",
      succesModal: {
        name: "requestAccessMorningstorm",
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