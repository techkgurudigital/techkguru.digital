"use client";

import Link from "next/link";

export default function HowItWork() {
  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="how-it-work-content">
              <div className="section-title">
                <h3>how it work</h3>
                <h2>
                  Our Process for Seamless <span>Digital Services</span>
                </h2>
                <p>
                  Our process is designed to make onboarding and service usage
                  simple and hassle-free. From registration to live
                  transactions, we guide you at every step to ensure smooth and
                  secure operations.
                </p>
              </div>

              <div className="how-it-work-btn">
                <Link href="/contact" className="btn-default">
                  learn more
                </Link>
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="col-lg-6">
            <div className="work-steps-box">
              {/* Step 1 */}
              <div className="work-step-item">
                <div className="work-step-item-content">
                  <h3>step</h3>
                  <h2>Quick Onboarding & Verification</h2>
                  <p>
                    We start with a simple registration and verification process
                    to understand your business or agent requirements and ensure
                    compliance with applicable guidelines.
                  </p>
                </div>
                <div className="work-step-item-no">
                  <h2>01</h2>
                </div>
              </div>

              {/* Step 2 */}
              <div className="work-step-item">
                <div className="work-step-item-content">
                  <h3>step</h3>
                  <h2>Service Setup & Activation</h2>
                  <p>
                    Once verified, required services such as AEPS, BBPS,
                    payments, or travel are configured and activated on your
                    account for immediate use.
                  </p>
                </div>
                <div className="work-step-item-no">
                  <h2>02</h2>
                </div>
              </div>

              {/* Step 3 */}
              <div className="work-step-item">
                <div className="work-step-item-content">
                  <h3>step</h3>
                  <h2>Start Transacting & Growing</h2>
                  <p>
                    Begin offering digital and fintech services to your
                    customers with real-time transactions, reporting tools, and
                    ongoing support to help you grow your business.
                  </p>
                </div>
                <div className="work-step-item-no">
                  <h2>03</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
