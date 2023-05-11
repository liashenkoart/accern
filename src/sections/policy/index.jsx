import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./SupportPolicy.scss"

const PrivacyPolicy = ({ isVisible, page }) => {

  return (
    <div className={`privacy-policy pt-0 sect-spacer ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <p>This Technical Support and Maintenance Policy (the <strong>“Policy”</strong>) describes the support provided by Accern to Customers using the Software in any of the available hosting or deployment models for the Software.</p>
            <h4>1. Policy  Coverage</h4>
            <ul>
              <li><strong>Validity:</strong> This Policy governs the Customer’s installation, operation and/or remote access and use of the Software for the permissible duration of such use, per the applicable Order.  The term of this Policy shall be automatically extended if the term of the underlying Order is also extended.</li>
              <li><strong>Scope:</strong> This Policy does not apply to any software, equipment, or services not purchased from Accern, nor to any of Customer’s other infrastructure or IT security settings.  Unless Customer licenses the Software in Accern’s SaaS deployment model, Customer bears full responsibility for the installation and hosting of the Software (including the installation of any maintenance updates, except to the extent that Accern provides installation services).  Customer’s responsibility extends to any technical or performance or compliance issues associated with hosting.</li>
              <li><strong>Exclusions:</strong> Accern shall not be obligated to provide support for the Software if the Software is used in a manner contrary to Accern’s then current documentation, or if any Error reported by Customer is found by Accern to be due to a cause other than the Software functionality delivered by Accern.  The Policy does not apply if the Customer is in breach of the Agreement or of any Order.</li>
            </ul>
            <h4>2. Support Contacts</h4>
            <ul>
              <li>Customer will contact Accern technical support at <a href="mailto:support@accern.com">support@accern.com</a> to report any Error.</li>
              <li>Customer may contact Accern technical support by emailing <a href="mailto:support@accern.com">support@accern.com</a> to request information regarding the use, configuration or operation of the Accern Software and of related tools running on any supported environment.</li>
              <li>As part of any Order execution process, Customer will provide Accern with a primary technical support contact for any support-related communications with Accern, and promptly advise Accern of any changes.</li>
            </ul>
            <h4>3. Incident Management</h4>
            <ul>
              <li>Accern will use commercially reasonable efforts, commensurate with the severity and impact of an Error  affecting the operation of the Software so that the Software will perform substantially consistent with its documentation.</li>
              <li>Customer shall conduct reasonable and adequate research with respect to any reported Error or related issue prior to contacting Accern for assistance.  Customer will respond promptly to all reasonable Accern requests for information, documentation, technical assistance, and other assistance regarding any such Error.</li>
              <li>Each reported Error will be logged, prioritized, and tracked by Accern as an incident, using a tracking number for Customer to reference when contacting Accern about the incident.  An incident will remain open until the incident is resolved or a mitigation plan has been defined.</li>
              <li><strong>Incident Response and Status Reporting</strong></li>
            </ul>
            <p>With Customer's written permission, Accern may access system logs and application logs held by Customer for the sole purpose of providing proactive support and Error correction.  This may require a remote network connection to the Customer’s instance of the Software, or Customer can establish an offline means of getting this information to Accern personnel in a manner conducive to providing efficient support (e.g. posting logs to a secure ftp site).</p>
            <ul>
              <li><strong>Incident Prioritization</strong></li>
            </ul>
            <div className="table-overflow">
              <table className="table table-bordered">
                <thead className="bg-light">
                  <tr>
                    <th>INCIDENT PRIORITY</th>
                    <th>INITIAL RESPONSE TARGET</th>
                    <th>STATUS REPORTING: UPDATE TARGET</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>P 1</td>
                    <td>Within 1 Business Hour</td>
                    <td>Updated within 4 Business Hours</td>
                  </tr>
                  <tr>
                    <td>P 2</td>
                    <td>Within 2 Business Hours</td>
                    <td>Updated every Business Day</td>
                  </tr>
                  <tr>
                    <td>P 3</td>
                    <td>Within 8 Business Hours</td>
                    <td>Updated every 3 Business Days</td>
                  </tr>
                  <tr>
                    <td>P 4</td>
                    <td>Within 2 Business Days</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>The priority level of a reported Error will be determined by Accern in its discretion.  Accern will use reasonable efforts to deliver a solution or a mitigation plan to correct any reported Error as follows:</p>
            <div className="table-overflow">
              <table className="table table-bordered">
                <thead className="bg-light">
                  <tr>
                    <th>PRIORITY</th>
                    <th>EXAMPLE</th>
                    <th>ACCERN RESPONSIBILITIES</th>
                    <th>CUSTOMER RESPONSIBILITIES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>P 1</td>
                    <td className="bg-light">The Software or a critical feature of the Software is completely inoperable or unavailable.</td>
                    <td>Support team works to resolve or mitigate Error during Business Hours, with resolution efforts continuing after Business Hours (subject to resource availability) in the case of Errors which are reported by Customer during Business Hours.</td>
                    <td>- Technical support contact and resources available during Business Hours, until a resolution or workaround is in place.<br />- Ability to promptly provide necessary diagnostic information.</td>
                  </tr>
                  <tr>
                    <td>P 2</td>
                    <td className="bg-light">Important features of the Software are not functioning or are unavailable, but there is some capacity to operate the Software.</td>
                    <td>Support team works to resolve or mitigate Error during Business Hours.</td>
                    <td>- Technical support contact and resources available during Business Hours.<br />- Ability to promptly provide necessary diagnostic information.</td>
                  </tr>
                  <tr>
                    <td>P 3</td>
                    <td className="bg-light">The Software suffers a partial, non-critical loss of functionality or availability.  (This classification applies to all unexpected interruptions to or processing issues with Accern’s asynchronous data feed or data analytics subscription offerings.)</td>
                    <td>Support team works to resolve or mitigate Error during Business Hours</td>
                    <td>- Technical support contact and resources available during Business Hours.<br />- Ability to provide promptly necessary diagnostic information.</td>
                  </tr>
                  <tr>
                    <td>P 4</td>
                    <td className="bg-light">A condition whereby functionality of the Software is not affected, but a change is desired solely for aesthetic or functional reasons.</td>
                    <td>Thorough understanding of the Customer request for review by Accern’s technical team.  Accern may (in its discretion) address the feature request as part of its product management process.</td>
                    <td>Technical support contact to provide  use cases for the feature request, and specifics on requested functionality</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>[NOTE: Customized support offerings are available on request.]</p>

            <h4>4. Software Maintenance</h4>
            <ul>
              <li>Accern may, in its discretion and during the Term of an applicable Order, make available to Customer updates and/or upgrades to the Software or any other materials provided by Accern.</li>
              <li>Accern does not warrant, and Customer acknowledges that it is not relying on any representation that the operation of the Software will be uninterrupted or error-free, or that errors will be corrected, or that Accern will update or upgrade the Software.</li>
            </ul>
            <h4>5. Availability and Change</h4>
            <ul>
              <li>Accern will use reasonable efforts to notify Customers who use the Software in the SaaS deployment model proactively of any Software unavailability due to scheduled maintenance windows, or promptly upon the occurrence of any emergency outages.</li>
              <li>Customer acknowledges that Software provided in the SaaS deployment model is subject to change over time.  Accern will use reasonable efforts to announce such changes to Customer through the technical support channels described in this Policy.</li>
            </ul>
            <h4>6. Supporting Definitions</h4>
            <ul>
              <li><strong>“Business Day”</strong> means Monday through Friday (Eastern Standard Time, USA), excluding holidays observed by Accern.</li>
              <li><strong>“Business Hours”</strong> means 9:00 a.m. to 5:00 p.m. (Eastern Standard Time, USA) on Business Days.</li>
              <li><strong>“Error”</strong> means any functional non-conformity, malfunction, or continuing unavailability incident reported by Customer, which affects the operation of the Software.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PrivacyPolicy;