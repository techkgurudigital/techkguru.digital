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
    q: "What payment methods are supported?",
    a: "Our payment solutions support UPI, debit cards, credit cards, net banking, and other digital payment modes.",
  },
  {
    q: "Who can use payment solutions?",
    a: "Payment solutions are suitable for merchants, service providers, retailers, and online businesses looking to accept digital payments.",
  },
  {
    q: "Are settlements provided for digital payments?",
    a: "Yes, settlements are processed as per agreed timelines, subject to banking and partner policies.",
  },
];

export default function PaymentSolutions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader />
      <Header />
      <PageHeader title="Payment Solutions" breadcrumb="paymentsolutions" />
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
                      src="/images/payment.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    TechkGuru Digital provides modern payment solutions that
                    enable businesses to accept digital payments securely and
                    efficiently. These solutions are designed to support growing
                    businesses by simplifying payment collection and management.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Supported Payment Methods
                      </h5>
                      <ul>
                        <li>UPI</li>
                        <li>Credit Cards</li>
                        <li>Debit Cards</li>
                        <li>Net Banking</li>
                        <li>Other digital payment modes</li>
                      </ul>
                    </div>
                  </div>

                  <div className=" my-5">
                    <div className="row g-4 service-list-video-col2">
                      {/* Left List */}
                      <div className="col-md-6">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">
                            Key Features
                          </h5>
                          <ul>
                            <li>Secure transaction processing</li>
                            <li>Faster settlement cycles</li>
                            <li>Easy payment acceptance</li>
                            <li>Transaction tracking and reporting</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-6">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">Benefits</h5>

                          {/* Service Entry List */}

                          <ul>
                            <li>Improved customer experience</li>
                            <li>Reduced cash handling</li>
                            <li>Increased transaction efficiency</li>
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
