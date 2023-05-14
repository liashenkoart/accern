export const page = {
  hero: {
    variant: "simple",
    label: "Become a partner",
    title: "Help Democratize AI and Increase Data Accessibility with <span class='text-special-primary'>Accern</span>",
    titleCL: "mw-700",
    description: "Accern partners with companies to supply and distribute clean data and generate financial insights to researchers, analysts, and data science teams around the world.",
    descriptionCL: "mw-600",
    additional: "Enterprise teams can deploy AI-powered use cases <strong>3000x faster with Accern.</strong>",
    brandsCL: "mw-700",
    brands: [
      { link: "", logo: "logo-aws.png", className: "preset-img-6" },
      { link: "", logo: "logo-crux.png", className: "preset-img-3" },
      { link: "", logo: "morningstar.png", className: "preset-img-4" },
      { link: "", logo: "naviga.png", className: "preset-img-4" },
    ]
  },

  requestForm: {
    className: "mt-s",
    about: {
      label: "Partnership",
      description: "A variety of financial companies partner with Accern to scale the operations and processes of data ingestion and research and NLP extraction and analysis.",
      label_2: "Key Highlights",
      description_2: "What are some of the ways that financial companies can partner with Accern?",
      list: [
        {name: "Data Distribution"},
        {name: "Data Supply"},
        {name: "AI Use Cases"},
        {name: "NLP Research and Extraction"}
      ]
    },
    form: {
      label: "Become a partner",
      from: "Become a partner",
      message: "We’ll be in touch shortly!",
      button: "Submit",
      variant: "bordered",
      succesModal: {
        name: "requestAccessNaviga",
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