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
    q: "What services can be offered through a Micro ATM?",
    a: "mATM services include cash withdrawal, balance enquiry, and mini statement using debit cards.",
  },
  {
    q: "Is a physical ATM required for mATM services?",
    a: "No, mATM services are provided using a portable handheld device operated by authorized merchants or agents.",
  },
  {
    q: "Who can operate a Micro ATM?",
    a: "Authorized merchants or agents who complete the required onboarding and verification process can operate mATM services.",
  },
];

export default function MATM() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader />
      <Header />
      <PageHeader title="Micro ATM (mATM)" breadcrumb="matm" />
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
                      src="/images/micro.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      className="img-fluid"
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Micro ATM (mATM) services allow merchants and agents to
                    provide basic banking services using a compact handheld
                    device. Customers can perform debit card-based transactions
                    similar to ATM services.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Services Offered
                      </h5>
                      <ul>
                        <li>Cash withdrawal</li>
                        <li>Balance enquiry</li>
                        <li>Mini statement</li>
                      </ul>
                    </div>
                  </div>

                  <div className=" my-5">
                    <div className="row g-4 service-list-video-col2">
                      {/* Left List */}
                      <div className="col-md-7">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">
                            How mATM Helps
                          </h5>
                          <ul>
                            <li>Brings banking services closer to customers</li>
                            <li>Reduces pressure on bank branches and ATMs</li>
                            <li>
                              Enables merchants to act as local banking points
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right List */}
                      <div className="col-md-5">
                        <div className="service-entry-list">
                          <h5 className="text-anime-style-2 mb-4">
                            Business Advantages
                          </h5>

                          {/* Service Entry List */}

                          <ul>
                            <li>Increased footfall</li>
                            <li>Commission-based earnings</li>
                            <li>Low operational complexity</li>
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
