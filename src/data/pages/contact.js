export const page = {
  hero: {
    isForm: true,
    map: {
      locations: [
        { address: "55 Broadway,<br/>Suite 416<br/>New York, NY 10006<br/>+1 (347) 745-6649<br>info@accern.com", lat: 40.706851, lng: -74.013031, icon: "icon-new-york" },
        { address: "UMIYA Business Bay Tower 2,<br/>Cessna Business Park<br/>Bengaluru, Karnataka 560103", lat: 12.933843, lng: 77.694211, icon: "icon-bengaluru" },
      ],
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f6f6f6"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#c0c0c0"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#efefef"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f2f2f2"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        }
      ]
    },
    form: {
      label: "GET IN TOUCH",
      title: "Contact Us",
      message: "That's All, thank you!",
      button: "Submit",
      formType: "contactUs",
      fields: [
        { name: "first_name", type: "text", placeholder: "First Name", className: "advanced", required: true, pattern:".{2,}" },
        { name: "last_name", type: "text", placeholder: "Last Name", className: "advanced", required: true, pattern:".{2,}" },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "tel", placeholder: "Phone Number", className: "advanced" },
        { name: "company", type: "text", placeholder: "Company", className: "advanced"},
        { name: "title", type: "text", placeholder: "Title", className: "advanced"},
        { name: "country", type: "text", placeholder: "Country", className: "advanced"},
        { name: "subject", type: "text", placeholder: "Subject", className: "advanced"},
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", isFullWidth: true},
      ]
    }
  },

  emails: {
    columns: [
      { label: "Sales", link: {name: "solutions@accern.com", link: "mailto:solutions@accern.com" } },
      { label: "Media", link: {name: "media@accern.com", link: "mailto:media@accern.com"} },
      { label: "Investments", link: {name: "investments@accern.com", link: "mailto:investments@accern.com"} },
      { label: "Partnership", link: {name: "partners@accern.com", link: "mailto:partners@accern.com"}},
    ]
  },
}