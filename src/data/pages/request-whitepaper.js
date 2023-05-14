export const page = {
  hero: {
    variant: "simple",
    label: "Asset Management WHITEPAPER",
    title: "How text AI in <span class='text-special-primary'>Asset Management</span> text can be long",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    additional: "Over <span class='text-primary fw-500'>1,000+ AI Use Cases</span> Deployed By Enterprise Teams.",
    brands: [
      { link: "", logo: "logo-google-c.png", className: "preset-img-3" },
      { link: "", logo: "logo-jefferies.png", className: "preset-img-3" },
      { link: "", logo: "logo-allianz-c.png", className: "preset-img-4" },
      { link: "", logo: "logo-moodys-c.png", className: "preset-img-3" },
      { link: "", logo: "logo-ibm-c.png", className: "preset-img-6" },
    ]
  },

  requestForm: {
    className: "mt-s",
    about: {
      label: "About Whitepaper",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.",
      label_2: "Key Highlights",
      description_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip tests commodo consequat.",
      list: [
        {name: "Accern Platform Access"},
        {name: "XCode app name here"},
        {name: "Some test files here for the tutorial — <a href='#'>Download here</a>"}
      ]
    },
    form: {
      label: "Get Whitepaper",
      from: "Request Whitepaper",
      message: "We’ll be in touch shortly!",
      button: "Get Whitepaper",
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