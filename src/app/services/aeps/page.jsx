"use client";
import Header from "@/app/component/Header";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/component/PageHeader";
import Footer from "@/app/component/Footer";
import { useState } from "react";
import Preloader from "@/app/component/Preloader";

const faqs = [
  {
    q: "What transactions can be performed using AEPS?",
    a: "AEPS allows customers to perform basic banking transactions such as cash withdrawal, balance enquiry, and mini statement using Aadhaar-based biometric authentication.",
  },
  {
    q: "Is AEPS linked to a specific bank?",
    a: "AEPS works with Aadhaar-enabled bank accounts across supported banks, subject to availability and bank participation.",
  },
  {
    q: "Is biometric authentication mandatory for AEPS?",
    a: "Yes, biometric authentication is required to securely verify the customer’s identity before processing AEPS transactions.",
  },
];

export default function Aeps() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader />
      <Header />
      <PageHeader
        title="AEPS – Aadhaar Enabled Payment Services"
        breadcrumb="aeps"
      />
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-catagery-list wow fadeInUp">
                  <h3>Fintech Services</h3>
                  <ul>
                    <li>
                      <Link href="/services/aeps">AEPS</Link>
                    </li>
                    <li>
                      <Link href="/services/bbps">BBPS</Link>
                    </li>
                    <li>
                      <Link href="/services/creditcardbillpayment">
                        Credit Card Bill Payment
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/paymentsolutions">
                        Payment Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/pos">POS</Link>
                    </li>
                    <li>
                      <Link href="/services/matm">MATM</Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="sidebar-cta-box wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="cta-box-content">
                   
                    <h3>Need Help? We Are Here To Help You</h3>
                  </div>

                  <div className="cta-contact-info">
                    <div className="cta-info-item">
                      <p>Need help!</p>
                      <h3>+91 - 99889-91533</h3>
                    </div>

                    <div className="cta-info-item">
                      <p>E-mail now</p>
                      <h3>info@techkguru.digital</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <div className="service-single-content">
                <div className="service-featured-image">
                  <figure className="image-anime wow fadeInUp">
                    <Image
                      src="/images/aeps.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Aadhaar Enabled Payment Services (AEPS) is a bank-led
                    initiative that enables customers to perform basic banking
                    transactions using Aadhaar-based biometric authentication.
                    This service is designed to promote financial inclusion by
                    providing easy access to banking services without the need
                    to visit a physical bank branch. Through AEPS, customers can
                    access their bank accounts using Aadhaar credentials at
                    authorized service points operated by agents or merchants.
                    Transactions are processed securely using biometric
                    verification, ensuring accuracy and safety.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Services Offered Under AEPS
                      </h5>
                      <ul>
                        <li>Cash withdrawal</li>
                        <li>Balance enquiry</li>
                        <li>Mini statement</li>
                      </ul>
                    </div>

                    <div className="service-image-video">
                      <Image
                        src="/images/aeps1.jpeg"
                        alt="video"
                        width={400}
                        height={250}
                      />
                    </div>
                  </div>

                  <div className=" my-5">
                    <div className="row g-4 service-list-video-col2">
                      {/* Left List */}
                      <div className="col-md-6">
                        <div className="service-entry-list wow fadeInUp">
                          <h5 className="text-anime-style-2 mb-4">
                            Who Benefits
                          </h5>
                          <ul>
                            <li>Customers in rural and semi-urban areas</li>
                            <li>
                              Individuals with limited access to bank branches
                            </li>
                            <li>
                              Agents and retailers offering banking services
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-6">
                        <div className="service-entry-list wow fadeInUp">
                          <h5 className="text-anime-style-2 mb-4">
                            Business Benefits
                          </h5>

                          <ul>
                            <li>Increased customer footfall</li>
                            <li>Additional commission-based income</li>
                            <li>Contribution to financial inclusion</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="our-faq-section mt-30">
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Frequently asked questions
                    </h2>
                  </div>

                  {/* FAQ Accordion */}
                  <div className="faq-accordion">
                    {faqs.map((item, index) => (
                      <div
                        key={index}
                        className="accordion-item wow fadeInUp"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <h2 className="accordion-header">
                          <button
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                            className={`accordion-button ${
                              openIndex !== index ? "collapsed" : ""
                            }`}
                          >
                            {item.q}
                          </button>
                        </h2>

                        {openIndex === index && (
                          <div className="accordion-collapse show">
                            <div className="accordion-body">
                              <p>{item.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
