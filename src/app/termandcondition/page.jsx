"use client";

import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";

export default function TermandCondition() {
  return (
    <>
      <Header />
      <PageHeader title="Term & Condition" breadcrumb="term and condition" />
        <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">  
      <div className="terms-content">
        <p className="!mt-8">
          Welcome to TechkGuru Digital (“Company”, “we”, “our”, “us”). These
          Terms & Conditions govern your access to and use of our website,
          platform, and services.
        </p>

        <h4 className="mb-3">1. Scope of Services</h4>
        <p>
          TechkGuru Digital provides fintech and digital services including:
        </p>

        <ul>
          <li>AEPS (Aadhar Enabled Payment Services)</li>
          <li>BBPS (Bharat Bill Payment System)</li>
          <li>Credit Card Bill Payment</li>
          <li>Payment Solutions</li>
          <li>Micro ATM (mATM)</li>
          <li>Point of Sale (POS)</li>
          <li>E-Commerce Solutions</li>
          <li>Travel Services</li>
          <li>Holiday Packages</li>
        </ul>

        <h4 className="mb-3">2. Eligibility</h4>
        <p>To use our services, you must:</p>

        <ul>
          <li>Be at least 18 years of age</li>
          <li>Provide accurate onboarding information</li>
          <li>Complete KYC verification</li>
          <li>Be legally capable of agreement</li>
        </ul>

        <h4 className="mb-3">3. User Registration & Account Responsibility</h4>
        <p>
          Users may be required to create an account and maintain secure
          credentials.
        </p>

        <h4 className="mb-3">4. KYC, Verification & Compliance</h4>
        <p>
          Mandatory KYC may apply. Failure may result in service suspension or
          termination.
        </p>

        <h4 className="mb-3">5. Service Usage & Restrictions</h4>
        <ul>
          <li>No illegal or fraudulent activity</li>
          <li>No bypassing security systems</li>
          <li>No unauthorized third-party service usage</li>
        </ul>

        <h4 className="mb-3">6. Transactions & Settlements</h4>
        <p>Transactions depend on banking networks and partners.</p>

        <h4 className="mb-3">7. Fees & Charges</h4>
        <ul>
          <li>Charges communicated separately</li>
          <li>Subject to change</li>
          <li>Non-refundable unless stated</li>
        </ul>

        <h4 className="mb-3">8. Refunds & Cancellations</h4>
        <p>Governed by Refund Policy. Some services may not be refundable.</p>

        <h4 className="mb-3">9. Third-Party Services</h4>
        <p>Services may rely on external providers.</p>

        <h4 className="mb-3">10. Data Privacy</h4>
        <p>Governed by our Privacy Policy.</p>

        <h4 className="mb-3">11. Suspension & Termination</h4>
        <p>Violation may result in service termination.</p>

        <h4 className="mb-3">12. Limitation of Liability</h4>
        <p>Liability limited as per law.</p>

        <h4 className="mb-3">13. Indemnification</h4>
        <p>User agrees to hold company harmless.</p>

        <h4 className="mb-3">14. Intellectual Property</h4>
        <p>All content belongs to TechkGuru Digital.</p>

        <h4 className="mb-3">15. Modifications</h4>
        <p>Terms may change anytime.</p>

        <h4 className="mb-3">16. Governing Law</h4>
        <p>Subject to Indian laws.</p>

        <h4 className="mb-3">17. Contact</h4>
        <p>
          Email: info@techkguru.digital <br />
          Phone: +91 99889 91533
        </p>

        <h4 className="mb-3">18. Acceptance</h4>
        <p>Using our services confirms acceptance of these Terms.</p>
      </div>
      </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
