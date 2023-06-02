export const page = {
  hero: {
    logo: "naviga.png",
    label: "Request more info",
    title: "<strong>Naviga's</strong> Data Sets",
    variant: "lines",
    theme: "advanced",
    className: "mb-5 mt-5"
  },

  requestForm: {
    about: {
      logo: "naviga-white.png",
      bg: "bg-advanced.png",
      description: "Naviga complies data from over 2,500 news media, broadcast, magazine, financial services and corporate clients in 45 countries.",
      label: "naviga"
    },
    form: {
      label: "Request Access",
      from: "Request Access Naviga",
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