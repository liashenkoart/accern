import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./SupportPolicy.scss"

const PrivacyPolicy = ({ isVisible, page }) => {

  return (
    <div className={`privacy-policy pt-4 sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h3>I DATA PROTECTION POLICY (THE “DPP”)</h3>
            <h4>1 Policy Context: </h4>
            <ul>
              <li><strong>Roles and Responsibilities:</strong> Customer is and will at all times remain the Data Controller of Personal Data Processed by Accern as part of the Services.  Customer is responsible for compliance with its obligations as a Data Controller under the Data Protection Laws, including with regard to the transmission of Personal Data to Accern, and for providing any required notices and obtaining any required consents and/or authorizations from Data Subjects under the Data Protection Laws.  Accern is and will at all times remain a Data Processor of the Personal Data provided by Customer, and responsible for compliance with its resulting obligations as a Data Processor under the Data Protection Laws.</li>
              <li><strong>Personal Data Collection:</strong></li>
              <ul>
                <li>Personal Data Provided by Customer and/or Data Subjects:  This information is provided by the user and may include name, address, e-mail, phone number, credit card information, photograph, login, and password details.  This information may also be provided by third parties whom the user has authorized to share data with Accern.</li>
                <li>Personal Data Collected Automatically:</li>
                <ul>
                  <li>This information is collected automatically as the user interacts with the Accern Platform or website, and includes:</li>
                  <ul>
                    <li>Technical Information: may include the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, operating system and platform;</li>
                    <li>Information about visit: This  may include the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call our customer service number or social media handle used to connect with our customer service team.</li>
                    <li>Location data - IP addresses are collected and location is inferred based on IP location.</li>
                  </ul>
                </ul>
              </ul>
              <li><strong>How the Services use Personal Data:</strong></li>
              <ul>
                <li>Account Management:</li>
                <ul>
                  <li>Customer account administration;</li>
                  <li>Contract administration:  Managing financial transactions between the Customer and Accern (e.g., for subscription Charges).</li>
                </ul>
                <li>Notify Customer about changes and events in the service.</li>
                <li>Provide Customer with information about our products and services.</li>
                <li>Improve quality and effectiveness of the Services. </li>
                <li>Troubleshoot, analyze, test, research, and optimize the integrity and reliability of our Services. </li>
              </ul>
              <li><strong>How Personal Data is shared with Subprocessors, other platforms, or third parties:</strong></li>
              <ul>
                <li>Accern may share your information with organizations who process data on Accern’s behalf with the goal of supporting the services we provide.  Subprocessors will only use this data to perform their support functions. This includes:</li>
                <ul>
                  <li>Payment processing providers.</li>
                  <li>Analytics and search engine providers. </li>
                  <li>Emails and other communication providers.</li>
                  <li>User Authentication Providers</li>
                </ul>
              </ul>
              <li><strong>DPP Changes:</strong> Accern may from time to time review and revise this DPP and its related practices, policies, and procedures.  Accern will take reasonable measures to inform Customer and any affected Data Subjects of such changes using appropriate channels of communication.</li>
            </ul>
            <h4>2 Accern’s Role As Data Processor</h4>
            <ul>
              <li><strong>Technical and Organizational Measures:</strong>  Accern has implemented and will maintain appropriate technical and organizational security measures to safeguard the Processing of Personal Data.  These measures take into account the nature, scope and purposes of Processing, and are intended to protect Personal Data against the risks inherent on Processing, and in particular risks from accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data transmitted, stored or otherwise Processed in connection with the Services, including the information security measures described in Accern’s Information Security Policy (ISP).  Accern binds its personnel and any Subprocessors to comply with its ISP as well as with appropriate confidentiality obligations covering access to and use of such Personal Data.</li>
              <li><strong>Principles for Processing of Personal Data:</strong>  Accern adheres to the following principles for collecting, using, disclosing, storing, securing, accessing, transferring, or otherwise processing Personal Data</li>
              <ul>
                <li> Fairness:  process Personal Data lawfully, fairly, and in a transparent manner.</li>
                <li>Purpose Limitation:  process Personal Data for a specific, explicit, and legitimate purpose(s), consistent with Data Protection Laws.</li>
                <li>Proportionality:  process Personal Data that is adequate, relevant, and not excessive for the purpose(s) for which it is processed.</li>
                <li>Data Integrity:  keep Personal Data accurate, complete, and up-to-date as is reasonably necessary for the purpose(s) for which it is processed.</li>
                <li>Data Retention:  keep Personal Data in a form that is personally identifiable for no longer than necessary to accomplish the purpose(s), or other permitted purpose(s), for which the Personal Data was obtained.</li>
                <li>Data Security:  implement appropriate and reasonable technical and organizational measures to safeguard Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure, use, or access.  </li>
                <li>Subprocessing:  instruct and contractually require third parties processing Personal Data on behalf of Accern (if any), to: (i) process it only for purposes consistent with Accern’s purpose(s) for processing; and (ii) implement appropriate technical and organizational measures to safeguard the Personal Data.</li>
                <li>Individual Rights:  process Personal Data in a manner that respects individuals’ rights under Data Protection Laws.</li>
              </ul>
              <li><strong>Subprocessing:</strong></li>
              <ul>
                <li>Subject to the terms and restrictions of this DPP, Customer agrees that COMPAY may engage its affiliates and Subprocessors to assist in the delivery of the Services; provided that (i) such affiliates and Subprocessors must abide by the same level of data protection and security as Accern under this DPP with regard to the Processing of Personal Data, and (ii) Accern remains responsible at all times for the performance of the such affiliates’ and Subprocessors’ obligations in compliance with the terms of this DPP and of Data Protection Laws</li>
              </ul>
              <li><strong>Data Transfers (outside of the EEA):</strong></li>
              <ul>
                <li>Accern may access and Process Personal Data on a global basis as necessary to perform the Services, including for IT security purposes, maintenance, technical support and change management.  To the extent such global access involves a transfer of Personal Data originating from the European Economic Area (“EEA”) or Switzerland to Accern affiliates or Subprocessors located in countries outside the EEA or Switzerland that have not received a binding adequacy decision by the European Commission or by a competent national EEA data protection authority, such transfers are subject to (i) the terms of the EU Model Clauses incorporated into this DPP by reference; or (ii) other binding and appropriate transfer mechanisms that provide an adequate level of protection in compliance with Data Protection Laws, such as approved Binding Corporate Rules for Processors. For the purposes of the EU Model Clauses, Customer and Accern agree that (i) Customer will act as the data exporter on Customer’s own behalf and on behalf of any of Customer’s entities and users, (ii) Accern will act on its own behalf and/or on behalf of the relevant Accern affiliates as the data importers, (iii) any Subprocessors will act as ‘subcontractors’ pursuant to Clause 11 of the EU Model Clauses.</li>
              </ul>
              <li><strong>Retention, Retrieval and Deletion of Personal Data:</strong></li>
              <ul>
                <li>Accern may Personal Data for as long as it is required for the provision of the Services or other purposes described in this DPP, compliance with Data Protection Laws, maintenance of suppression lists, prevention of fraud and abuse, in connection with legal claims or proceedings, and to comply with tax, accounting, or other legal obligations.</li>
                <li>Following expiration or termination of the Services, Accern will make the Personal Data of Customer (as Data Controller) then-available in its Services environment available to Customer (or to another party in accordance with Customer’s instructions) for retrieval for a reasonable period of time.  Following the retrieval period, and when Accern no longer has a legitimate need to retain Personal Data, Accern will permanently delete or anonymize Personal Data in its Service environment, and Accern will (upon request) certify to Customer that the foregoing actions have been taken.</li>
              </ul>
            </ul>
            <h4>Obligations to Data Subjects</h4>
            <ul>
              <li><strong>Direct Access to Personal Data:</strong>  Accern will grant Customer electronic access to Accern’s environment that holds Personal Data to enable Customer to respond to requests from Data Subjects to exercise their rights under Applicable Data Protection Laws, including requests to access, delete or erase, restrict, rectify, receive and transmit, block access to or object to Processing of Personal Data. </li>
              <li><strong>Service Requests:</strong>  To the extent such electronic access is not available to Customer, Customer can submit a “service request” via Accern’s technical support channels, and provide detailed written instructions to Accern (including the Personal Data necessary to identify the Data Subject) on how to assist with such Data Subject requests in relation to Personal Data held in Accern’s environment.  Accern will promptly follow such instructions.  Accern and Customer will negotiate in good faith with respect to any charges or fees that may be incurred by Accern to comply with instructions that require the use of resources different from or in addition to those required for the provision of the Services.</li>
              <li><strong>Data Subject Requests:</strong>  If Accern directly receives any Data Subject requests regarding Personal Data, it will promptly pass on such requests to Customer without responding to the Data Subject if the Data Subject identifies Customer as the Data Controller.  If the Data Subject does not identify Customer as the Data Controller, Accern will instruct the Data Subject to contact the entity responsible for collecting their Personal Data.</li>
            </ul>
            <h4>Security Incident Management</h4>
            <ul>
              <li><strong>Initial Response and Mitigation:</strong>  Accern’s Security Incident response aims to promptly restore the confidentiality, integrity, and availability of the Service environment and Personal Data, to determine root causes.  Depending on the nature of the Security Incident, Accern may also involve law enforcement in its response.  Accern will work diligently to identify the root cause(s) of the Security Incident, mitigate any adverse effects, and work diligently to prevent a recurrence.</li>
              <li><strong>Notification:</strong>  Accern will, without undue delay after discovery, report to Customer any confirmed Security Incident, including (to the extent ascertainable and permitted by law) (i) a description of the nature and reasonably anticipated consequences of the Security Incident, (ii) the extent of affected Personal Data and Data Subjects, (iii) measures taken to mitigate any adverse effects, and (iv) any other information reasonably known or available to Accern that Customer may be required to disclose to a governmental authority or affected Data Subject in connection with the Security Incident.  </li>
              <li><strong>Cooperation:</strong>  To the extent allowed by the Data Protection Laws, Accern and Customer will cooperate in the conduct of any investigation of such Security Incident, cooperate in any legally required notification of Data Subjects and/or governmental authorities, and coordinate in good faith on developing the content of any related public statements.</li>
            </ul>
            <h4>Legally Required Disclosures</h4>
            <ul>
              <li>If Accern receives any subpoena, judicial, administrative or arbitral order of an executive or administrative agency, regulatory agency, or other governmental authority which relates to the Processing of Personal Data (“Disclosure Request”), it will promptly pass on such Disclosure Request to Customer without responding to it, unless otherwise required by applicable law (including to provide an acknowledgement of receipt to the authority making the Disclosure Request).  At Customer’s request, Accern will provide Customer with reasonable information in its possession that may be responsive to the Disclosure Request and any assistance reasonably required for Customer to respond to the Disclosure Request in a timely manner. </li>
            </ul>
            <h3>II Information Security Policy (the “ISP”)</h3>
            <h4>Scope of Applicability</h4>
            <p>Accern’s Software is offered either “as a Service” (“SaaS”) or as licensed Software for installation and use by Customer on a self-hosted basis (“Licensed Software”).  This ISP applies to data collected and hosted by Accern, which includes data collected Accern’s website, platform, events and surveys conducted by Accern. Both the SaaS and the Licensed Software versions of the Accern Platform implement security measures to protect data transport between its components and public network, but physical security, access control to the servers and usage of data is determined by the Customer’s own privacy policy or (in the case of Licensed Software) the hosting service of Customer’s choice. </p>
            <h4>Physical Security</h4>
            <ul>
              <li><strong>For Accern Software provided as SaaS:</strong>  Accern hosts its computing and network infrastructure using industry-leading public cloud infrastructure providers (like Amazon Web Services, and Google Cloud) who maintain and publicly disclose their security practices and certifications. </li>
              <li><strong>For Licensed Software:</strong>  Customer (if self-hosting) or Customer’s hosting provider is responsible for providing physical security measures.  Accern bears no responsibility for ascertaining the adequacy of any physical security measures (or logical access security) with regard to any Licensed Software not hosted by Accern or by a hosting provider under contract to Accern.</li>
            </ul>
            <h4>Logical Access Management and People Security</h4>
            <ul>
              <li><strong>User/Access Control:</strong>  Accern grants access to network and system resources on a need-to-know basis, and takes a policy-based management approach for new access, prompt access revocation when required, and periodic review of access lists to critical information resources.</li>
              <li><strong>Background Checks:</strong>  Accern performs appropriate personal and criminal background checks on its personnel at the time of hire (as permitted by applicable law), and requires its Subprocessors to do the same.</li>
              <li><strong>Training:</strong>  Accern conducts information security awareness training for its personnel on a regular basis</li>
            </ul>
            <h4>System, Platform, and Network Security</h4>
            <p>Accern uses (and insists that its third party service and/or hosting providers use) industry-standard information security measures and controls designed to protect information at rest and in transit, including firewalling devices, host-based and network-based intrusion prevention and intrusion detection technologies, and strict access rules to restrict access to its applications and systems inside hosting environments from which the Services are delivered, including without limitation:</p>
            <ul>
              <li><strong>Segregation of Personal Data:</strong>  Multi-tenant plans are secured by logical separation and access controls that prevents data for being accessed by other tenants even if sharing physical resources. Single tenant instances provide add an additional layer of protection through physical data isolation.  </li>
              <li><strong>Data Encryption:</strong>  Accern encrypts, using industry standard encryption sensitive data which Accern permanently stores in its environment; and all data transferred between services and outside its network.  Accern shall safeguard the security and confidentiality of all encryption keys associated with encrypted Personal Data.</li>
              <li><strong>Network Security:</strong>  All external communication with the Service uses SSL/TLS encryption with strong ciphers.</li>
              <li><strong>Security Event Monitoring:</strong>  Security events in Accern’s development and production environments are logged, monitored and addressed (via timely and documented actions).</li>
              <li><strong>Vulnerability Management:</strong>  Accern has implemented vulnerability management and penetration testing for the Service.  Accern maintains and tests incident response plans to promptly respond information security events and incidents, and promptly remediates any discovered vulnerabilities.</li>
              <li><strong>Secure development practices:</strong> Separation of production and development environments.</li>
            </ul>
            <h4>Business Continuity and Disaster Recovery</h4>
            <ul>
              <li><strong>Infrastructure Redundancies:</strong> Accern systems are deployed in multiple zones providing physical redundancies in case of disaster.</li>
              <li><strong>Data Backup and Disaster Recovery:</strong> Performed on a daily basis.</li>
            </ul>
            <h3>III Definitions (Supporting the DPP and ISP)</h3>
            <ul>
              <li>“Data Controller” means the person or entity which, alone or jointly with others, determines the purposes and means of the processing of Personal Data.</li>
              <li>"Data Processor" means, the person or entity which processes Personal Data on behalf of the Data Controller.</li>
              <li>“Data Protection Laws” means (i) Regulation (EU) 2016/679 of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (also referenced as the “General Data Protection Regulation” (or “GDPR”)), as well as any equivalent national implementing legislation; and (ii) any other data privacy or data protection law or regulation that applies to the Processing of Personal Data under this Data Protection Policy;</li>
              <li>“Data Subject” means an identified or identifiable (directly or indirectly, by reference to his or her Personal Data) natural person.</li>
              <li>“EU Model Clauses” means the standard contract clauses variously defined by the European Commission for inclusion into commercial agreements governing data transfer from EU-based Data Controllers to non-EU Data Controllers and/or non-EU Data Processors.  The EU Model Clauses are available at <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en</a> - see “Annex” to each referenced EU Commission decision.</li>
              <li>“Personal Data” means any information relating to a Data Subject, including his or her name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural living person.</li>
              <li>“Process” means to create, maintain, store, use as part of the provision of Services, and dispose of Personal Data.</li>
              <li>“Security Incident” means any unauthorized access to, use, manipulation, disclosure, destruction or loss of Personal Data, whether by an internal or external source or use of Personal Data in Accern’s environment or under Accern’s administrative control.</li>
              <li>“Services” means any software provided by Accern as well as customer support, training, and professional services associated to them.  Services includes then-current Accern platforms, APIs, and web sites.</li>
              <li>“Subprocessor” means a third party subcontractor, other than a Accern affiliate, engaged by Accern and which may Process Personal Data in accordance with this DPP.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;