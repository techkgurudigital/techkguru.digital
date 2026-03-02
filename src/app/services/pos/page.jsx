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
    q: "What payments can be accepted using POS machines?",
    a: "POS machines allow merchants to accept debit and credit card payments at physical store locations.",
  },
  {
    q: "Are POS transactions secure?",
    a: "Yes, POS transactions are processed through secure, PIN-based authentication systems.",
  },
  {
    q: "Who should use POS services?",
    a: "POS services are ideal for retail stores, restaurants, and service outlets that accept in-store card payments.",
  },
];

export default function POS() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <Preloader/>
      <Header />
      <PageHeader title="Point of Sale (POS)" breadcrumb="pos" />
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
                      <Link href="/services/creditcardbillpayment">Credit Card Bill Payment</Link>
                    </li>
                    <li>
                      <Link href="/services/paymentsolutions">Payment Solutions</Link>
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
                      src="/images/pos.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Point of Sale (POS) systems enable merchants to accept
                    card-based payments at physical store locations. POS
                    machines support secure and quick transactions, improving
                    the overall in-store payment experience.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        POS Capabilities
                      </h5>
                      <ul>
                        <li>Debit and credit card acceptance</li>
                        <li>PIN-based authentication</li>
                        <li>Fast transaction processing</li>
                        <li>Secure payment environment</li>
                      </ul>
                    </div>

                    
                  </div>

                  <div className=" my-5">
                    <div className="row g-4 service-list-video-col2">
                      {/* Left List */}
                      <div className="col-md-6">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">
                            Who Should Use POS
                          </h5>
                          <ul>
                            <li>Retail stores</li>
                            <li>Restaurants</li>
                            <li>Service outlets</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-6">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">Benefits</h5>

                          {/* Service Entry List */}

                          <ul>
                            <li>Reduced cash dependency</li>
                            <li>Improved payment convenience</li>
                            <li>Increased sales opportunities</li>
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
