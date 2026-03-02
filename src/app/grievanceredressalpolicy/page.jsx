"use client";

import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";

export default function grievanceredressalpolicy() {
  return (
    <>
      <Header />
      <PageHeader
        title="Grievance Redressal Policy"
        breadcrumb="Grievance Redressal Policy"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="terms-content">
              <p className="!mt-8">
                At TechkGuru Digital, customer satisfaction and service
                transparency are our top priorities. This policy explains how
                users can raise complaints and how grievances are resolved
                fairly.
              </p>

              <h4 className="mb-3">1. Objective</h4>
              <ul>
                <li>Provide a structured grievance handling mechanism</li>
                <li>Ensure prompt and transparent resolution</li>
                <li>Maintain trust and accountability</li>
              </ul>

              <h4 className="mb-3">2. Scope</h4>
              <p>This policy applies to all services including:</p>

              <ul>
                <li>AEPS</li>
                <li>BBPS</li>
                <li>Credit Card Bill Payment</li>
                <li>Payment Solutions</li>
                <li>Micro ATM (mATM)</li>
                <li>POS Services</li>
                <li>E-Commerce Solutions</li>
                <li>Travel Services</li>
                <li>Holiday Packages</li>
              </ul>

              <h4 className="mb-3">3. What Constitutes a Grievance</h4>
              <ul>
                <li>Failed or delayed transactions</li>
                <li>Settlement or refund concerns</li>
                <li>Service activation or deactivation issues</li>
                <li>Technical or portal problems</li>
                <li>Support or service quality complaints</li>
              </ul>

              <h4 className="mb-3">4. Grievance Redressal Officer</h4>
              <p>
                TechkGuru Digital <br />
                Email: grievance@techkguru.digital <br />
                Alternate: support@techguru.digital <br />
                Phone: +91 9988991533
              </p>

              <h4 className="mb-3">5. Grievance Redressal Process</h4>

              <h5 className="mb-2">Step 1: Submission of Complaint</h5>
              <ul>
                <li>User or business name</li>
                <li>Registered mobile or email</li>
                <li>Service type</li>
                <li>Transaction ID (if applicable)</li>
                <li>Detailed issue description</li>
              </ul>

              <h5 className="mb-2">Step 2: Acknowledgement</h5>
              <ul>
                <li>Acknowledgement within 48 working hours</li>
                <li>Reference number for tracking</li>
              </ul>

              <h5 className="mb-2">Step 3: Investigation & Resolution</h5>
              <ul>
                <li>Reviewed by concerned team</li>
                <li>May require additional information</li>
              </ul>

              <h5 className="mb-2">Step 4: Resolution Timeline</h5>
              <ul>
                <li>Simple issues: 3–5 working days</li>
                <li>Transaction/bank issues: 7–10 working days</li>
                <li>Complex cases: as per provider timelines</li>
              </ul>

              <h4 className="mb-3">6. Escalation Matrix</h4>
              <p>
                If not satisfied, users may escalate by replying with the
                reference number. All escalations are handled fairly and
                transparently.
              </p>

              <h4 className="mb-3">7. User Responsibilities</h4>
              <ul>
                <li>Provide accurate information</li>
                <li>Raise complaints promptly</li>
                <li>Cooperate during investigation</li>
              </ul>

              <h4 className="mb-3">8. Exclusions</h4>
              <ul>
                <li>User input errors</li>
                <li>Delays caused by banks or third parties</li>
                <li>Issues outside TechkGuru Digital services</li>
              </ul>

              <h4 className="mb-3">9. Confidentiality</h4>
              <p>
                All grievances are handled securely and only for resolution
                purposes.
              </p>

              <h4 className="mb-3">10. Policy Updates</h4>
              <p>
                This policy may be updated anytime. Continued use indicates
                acceptance.
              </p>

              <h4 className="mb-3">11. Acceptance</h4>
              <p>
                By using our services, you agree to this Grievance Redressal
                Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
