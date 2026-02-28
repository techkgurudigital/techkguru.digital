"use client";

import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";

export default function PrivacyPolicy() {
  return (
    <>
    <Header/>
    <PageHeader title="Privacy Polocy" breadcrumb="privacy policy" />
    <div className="page-privacy-policy">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">            

            {/* Content */}
            <div className="privacy-content">

              <p className="!mt-8">
                TechkGuru Digital (“we”, “our”, “us”) values your privacy and is committed to protecting
                the personal and business information of users who access or use our website and services.
              </p>

              <p>
                By accessing or using our website and services, you agree to the terms outlined in this Privacy Policy.
              </p>

              <h4 className="mb-3">1. Information We Collect</h4>

              <h5>1.1 Personal Information</h5>
              <ul>
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Address details</li>
                <li>Date of birth (where required)</li>
                <li>Identity and address proof (KYC)</li>
              </ul>

              <h5>1.2 Business Information</h5>
              <ul>
                <li>Business name and address</li>
                <li>GST or registration details</li>
                <li>Bank account details</li>
              </ul>

              <h5>1.3 Transaction Information</h5>
              <ul>
                <li>Transaction amounts</li>
                <li>Dates & timestamps</li>
                <li>Service type</li>
                <li>Status and reference numbers</li>
              </ul>

              <h5>1.4 Technical Information</h5>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device info</li>
                <li>Usage logs</li>
              </ul>

              <h4 className="mb-3">2. How We Use Your Information</h4>
              <ul>
                <li>Provide and manage services</li>
                <li>Onboarding & verification</li>
                <li>Process transactions</li>
                <li>Legal compliance</li>
                <li>Support & communication</li>
                <li>Improve platform performance</li>
                <li>Prevent fraud</li>
              </ul>

              <h4 className="mb-3">3. KYC & Compliance</h4>
              <p>
                Certain services require mandatory KYC as per regulatory guidelines.
                Failure may lead to service delay or suspension.
              </p>

              <h4 className="mb-3">4. Information Sharing</h4>
              <ul>
                <li>Authorized banking partners</li>
                <li>Regulatory authorities</li>
                <li>Operational service providers</li>
                <li>Legal obligations</li>
              </ul>

              <h4 className="mb-3">5. Data Security</h4>
              <p>
                We use secure systems, restricted access, and monitoring. However,
                no internet transmission is 100% secure.
              </p>

              <h4 className="mb-3">6. Data Retention</h4>
              <p>
                Data is retained only as long as required for compliance and services
                and then securely deleted or anonymized.
              </p>

              <h4 className="mb-3">7. Cookies</h4>
              <p>
                Cookies improve functionality and experience. You may disable them in browser settings.
              </p>

              <h4 className="mb-3">8. User Responsibilities</h4>
              <ul>
                <li>Keep login credentials secure</li>
                <li>Provide accurate information</li>
                <li>Report unauthorized access immediately</li>
              </ul>

              <h4 className="mb-3">9. Third-Party Links</h4>
              <p>
                We are not responsible for third-party privacy practices.
              </p>

              <h4 className="mb-3">10. Children’s Privacy</h4>
              <p>
                Services are not for individuals under 18.
              </p>

              <h4 className="mb-3">11. Policy Updates</h4>
              <p>
                Updates will be posted with revised dates.
              </p>

              <h4 className="mb-3">12. Contact Us</h4>
              <div className="contact-box">
                <p><strong>TechkGuru Digital</strong></p>
                <p>📧 info@techguru.digital</p>
                <p>📞 +91 99889 91533</p>
              </div>

              <h4 className="mb-3">13. Consent</h4>
              <p>
                By using our website and services, you agree to this Privacy Policy.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
