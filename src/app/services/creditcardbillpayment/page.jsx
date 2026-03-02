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
    q: "Which credit cards are supported for bill payments?",
    a: "Credit card bill payments are supported for major banks and card issuers, subject to availability and partner coverage.",
  },
  {
    q: "2. How long does it take for the payment to reflect?",
    a: "Payment reflection timelines depend on the issuing bank, but transactions are generally processed within the standard settlement period.",
  },
  {
    q: "Is it safe to pay credit card bills through this service?",
    a: "Yes, transactions are processed through secure systems following standard security practices.",
  },
];

export default function CreditCardBillPayment() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader />
      <Header />
      <PageHeader
        title="Credit Card Bill Payment"
        breadcrumb="credit card bill payment"
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
                      src="/images/creaditcard.jpeg"
                      alt="service"
                      width={800}
                      height={600}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Credit Card Bill Payment services allow customers to pay
                    their outstanding credit card dues conveniently through a
                    digital platform. This service helps customers manage
                    payments efficiently and avoid late payment penalties.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">Key Features</h5>
                      <ul>
                        <li>Secure processing of card bill payments</li>
                        <li>Support for major banks and card issuers</li>
                        <li>Transparent transaction records</li>
                        <li>Timely payment confirmations</li>
                      </ul>
                    </div>
                  </div>

                  <div className=" my-5">
                    <div className="row g-4 service-list-video-col2">
                      {/* Left List */}
                      <div className="col-md-5">
                        <div className="service-entry-list wow fadeInUp">
                          <h5 className="text-anime-style-2 mb-4">
                            Who Can Use
                          </h5>
                          <ul>
                            <li>Individual customers</li>
                            <li>Retail service points</li>
                            <li>Digital service agents</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-7">
                        <div className="service-entry-list wow fadeInUp">
                          <h5 className="text-anime-style-2 mb-4">
                            Advantages
                          </h5>

                          {/* Service Entry List */}

                          <ul>
                            <li>Convenience for customers</li>
                            <li>Additional revenue stream for agents</li>
                            <li>Reduced dependency on bank branches</li>
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
