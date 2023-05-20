export const page = {
  hero: {
    variant: "simple",
    label: "Become a partner",
    title: "Partner with us to accelerate AI for <span class='text-special-primary'>Financial Services</span>",
    titleCL: "mw-700",
    description: "Accern partners with technology, data, cloud, and consulting firms to accelerate AI within Financial Services.",
    descriptionCL: "mw-600",
    additional: "Enterprise teams can deploy AI-powered use cases <strong>75x faster with Accern.</strong>",
    brandsCL: "mw-700",
    brands: [
      { link: "", logo: "logo-aws.png", className: "preset-img-6" },
      { link: "", logo: "logo-snowflake.png", className: "preset-img-4" },
      { link: "", logo: "morningstar.png", className: "preset-img-4" },
      { link: "", logo: "logo-factset.png", className: "preset-img-4" },
      { link: "", logo: "logo-google-c.png", className: "preset-img-4" },
    ]
  },

  requestForm: {
    className: "mt-s",
    about: {
      label: "Partnership",
      description: "A variety of companies partner with Accern to create new revenue streams, accelerate sales, and generate added value to their customers.",
      label_2: "Key Highlights",
      description_2: "Companies can partner with Accern in the following way. Contact us for more information on each partner's route.",
      list: [
        {name: "Technology Partner"},
        {name: "Data Partner"},
        {name: "Cloud Partner"},
        {name: "Consulting Partner"},
        {name: "Referral Partner"}
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