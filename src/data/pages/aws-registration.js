export const page = {
  hero: {
    isForm: true,
    form: {
      label: "AWS MARKETPLACE",
      title: "Complete Registration",
      message: "That's All, thank you!",
      button: "Submit",
      succesModal: {
        name: "awsSuccess",
        title: "Thank you for selecting Accern!",
        description: "One of our representatives will contact you within 24 hours with your login details and access to additional resources on how to build your AI use cases. "
      },
      fields: [
        { name: "first_name", type: "text", placeholder: "Name", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last", className: "advanced", required: true, pattern: ".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "email_confirmation", type: "email", placeholder: "E-mail Confirmation", className: "advanced", required: true },
        { name: "company", type: "text", placeholder: "Company", className: "advanced" },
        { name: "title", type: "text", placeholder: "Title", className: "advanced" },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "country", type: "text", placeholder: "Country", className: "advanced" },
      ]
    },
    awsMarketplace: {
      title: "AWS Marketplace",
      description: "Accern AI Platform Registration",
      fields: [
        {
          name: "Selected Plan",
          value: "Professional Plan"
        },
        {
          name: "Term of Plan",
          value: "12 Months Contract"
        },
        {
          name: "AWS Customer ID",
          value: "670605043"
        },
      ]
    }
  },

  emails: {
    columns: [
      { label: "Sales", link: { name: "solutions@accern.com", link: "mailto:solutions@accern.com" } },
      { label: "Media", link: { name: "media@accern.com", link: "mailto:media@accern.com" } },
      { label: "Investments", link: { name: "investments@accern.com", link: "mailto:investments@accern.com" } },
      { label: "Partnership", link: { name: "partners@accern.com", link: "mailto:partners@accern.com" } },
    ]
  },
}