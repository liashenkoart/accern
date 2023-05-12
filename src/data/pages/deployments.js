export const page = {
  hero: {
    label: "Deployments",
    title: "Secured Flexible <strong>Deployment</strong> Options",
    description: "Accern provides enterprise-grade secured deployment options based on your needs.",
    img: "deployment-illustration.svg",
    variant: "fluid",
    button: {
      name: "GET A DEMO",
      modal: "request"
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

  features: {
    rows: [
      {
        title: "Secured Public Cloud",
        description: "To get started quickly, we offer a fully secure private cloud.  You will be on our shared infrastructure with your own private instance.  No need to worry about large overhead expenses and maintenance.",
        img: "public-cloud-illustration.svg",
        link: {
          modal: "request",
          name: "Get Setup Now"
        }
      },
      {
        title: "Enterprise Secured Dedicated Private Cloud",
        description: "We can set up an enterprise-grade secured dedicated private cloud environment for you so your data is completely protected. Accern will manage the infrastructure so you can focus on building AI solutions.",
        img: "private-cloud-illustration.svg",
        link: {
          modal: "request",
          name: "Get Setup Now"
        }
      },
      {
        title: "Enterprise Secured On-Premise Server",
        description: "We can deploy Accern on your enterprise-grade secured private cloud or servers anywhere in the world using Docker Swarm and Kubernetes. Our team of deployment experts will make sure you are up and running in no time.",
        img: "on-premise-illustration.svg",
        link: {
          modal: "request",
          name: "Get Setup Now"
        }
      },
    ]
  },

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    className: "bg-light mb-spacer",
    columns: [
      { title: "Data Store", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", icon: "icon-data.svg" },
      { title: "AutoML Taxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator. ", icon: "icon-taxonomy.svg" },
      { title: "Adaptive NLP Models", description: "Check out various NLP models that you can use out-of-the-box or retrain for your needs.", icon: "icon-adaptive-nlp.svg" },
      { title: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", icon: "icon-integrations.svg" },
    ]
  },
}