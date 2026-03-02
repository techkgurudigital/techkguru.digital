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
    q: "What types of bills can be paid through BBPS?",
    a: "BBPS supports utility and service bill payments such as electricity, water, gas, mobile postpaid, DTH, broadband, and other supported bill categories.",
  },
  {
    q: "Do customers receive payment confirmation for BBPS transactions?",
    a: "Yes, BBPS provides instant payment confirmation along with a digital receipt after successful bill payment.",
  },
  {
    q: "Can BBPS be used for recurring bill payments?",
    a: "Yes, customers can use BBPS for both recurring and one-time bill payments, depending on the biller category.",
  },
];

export default function Bbps() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader />
      <Header />
      <PageHeader title="BBPS – Bharat Bill Payment System" breadcrumb="bbps" />
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
                      src="/images/bbps.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    The Bharat Bill Payment System (BBPS) is an integrated bill
                    payment ecosystem that enables customers to pay recurring
                    and non-recurring utility bills through a single platform.
                    It provides a standardized and interoperable bill payment
                    experience across bill categories.
                  </p>
                  <p className="wow fadeInUp">
                    BBPS ensures transparency, reliability, and instant
                    confirmation, making it a trusted system for both customers
                    and service providers.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Supported Bill Categories
                      </h5>
                      <ul>
                        <li>Electricity</li>
                        <li>Water</li>
                        <li>Gas</li>
                        <li>Mobile postpaid</li>
                        <li>DTH</li>
                        <li>Broadband</li>
                        <li>Other utility and service bills</li>
                      </ul>
                    </div>

                    <div className="service-image-video">
                      <Image
                        src="/images/bbps2.jpeg"
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
                        Key Capabilities
                      </h5>
                      <ul>
                        <li>Centralized bill discovery</li>
                        <li>Real-time bill payment</li>
                        <li>Secure transaction processing</li>
                        <li>Instant confirmation and receipts</li>
                      </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-6">
                        <div className="service-entry-list wow fadeInUp">
                          <h5 className="text-anime-style-2 mb-4">
                            Benefits for Agents & Merchants
                          </h5>

                          <ul>
                            <li>High daily transaction demand</li>
                            <li>Repeat customer visits</li>
                            <li>Reliable bill payment infrastructure</li>
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
