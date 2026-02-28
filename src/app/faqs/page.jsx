"use client";

import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Preloader from "../component/Preloader";
import PageHeader from "../component/PageHeader";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <Preloader/>
    <Header/>
          <PageHeader title="Fintech Services – FAQs" breadcrumb="Fintech Services – FAQs" />
    <div className="page-faqs">
      <div className="container">
        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="faq-sidebar">
              <div className="faq-catagery-list wow fadeInUp">
                <ul>
                  {faqSections.map((item, index) => (
                    <li key={index}>
                      <a href={`#faq-${index}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="col-lg-8">
            <div className="page-faqs-catagery">

              {faqSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="page-faq-accordion mb-5"
                  id={`faq-${sectionIndex}`}
                >
                  <div className="section-title">
                    <h4 className="text-anime-style-2">
                      {section.title}
                    </h4>
                  </div>

                  <div className="faq-accordion">
                    {section.faqs.map((faq, faqIndex) => {
                      const currentIndex = `${sectionIndex}-${faqIndex}`;

                      return (
                        <div
                          key={currentIndex}
                          className="accordion-item wow fadeInUp"
                          style={{ animationDelay: `${faqIndex * 0.2}s` }}
                        >
                          <h2 className="accordion-header">
                            <button
                              onClick={() =>
                                setOpenIndex(
                                  openIndex === currentIndex ? null : currentIndex
                                )
                              }
                              className={`accordion-button ${
                                openIndex !== currentIndex ? "collapsed" : ""
                              }`}
                            >
                              {faq.q}
                            </button>
                          </h2>

                          {openIndex === currentIndex && (
                            <div className="accordion-collapse show">
                              <div className="accordion-body">
                                <p>{faq.a}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

const faqSections = [
  {
    title: "AEPS – Aadhaar Enabled Payment Services",
    faqs: [
      {
        q: "What transactions can be performed using AEPS?",
        a: "AEPS allows customers to perform cash withdrawal, balance enquiry, and mini statement using Aadhaar-based biometric authentication.",
      },
      {
        q: "Is AEPS linked to a specific bank?",
        a: "AEPS works with Aadhaar-enabled bank accounts across supported banks, subject to availability.",
      },
      {
        q: "Is biometric authentication mandatory for AEPS?",
        a: "Yes, biometric authentication is required to securely verify the customer’s identity.",
      },
    ],
  },

  {
    title: "BBPS – Bharat Bill Payment System",
    faqs: [
      {
        q: "What types of bills can be paid through BBPS?",
        a: "BBPS supports electricity, water, gas, mobile postpaid, DTH, broadband, and other utility payments.",
      },
      {
        q: "Do customers receive payment confirmation?",
        a: "Yes, instant payment confirmation with a digital receipt is provided.",
      },
      {
        q: "Can BBPS be used for recurring bill payments?",
        a: "Yes, BBPS supports both recurring and one-time bill payments.",
      },
    ],
  },

  {
    title: "Credit Card Bill Payment",
    faqs: [
      {
        q: "Which credit cards are supported?",
        a: "Major banks and card issuers are supported, subject to partner availability.",
      },
      {
        q: "How long does payment reflection take?",
        a: "Payments generally reflect within the standard bank settlement period.",
      },
      {
        q: "Is it safe to pay credit card bills here?",
        a: "Yes, transactions are processed through secure systems.",
      },
    ],
  },

  {
    title: "Payment Solutions",
    faqs: [
      {
        q: "What payment methods are supported?",
        a: "UPI, debit cards, credit cards, net banking, and digital payment modes.",
      },
      {
        q: "Who can use payment solutions?",
        a: "Merchants, retailers, service providers, and online businesses.",
      },
      {
        q: "Are settlements provided?",
        a: "Yes, settlements are processed as per agreed timelines.",
      },
    ],
  },

  {
    title: "Micro ATM (mATM)",
    faqs: [
      {
        q: "What services can be offered through mATM?",
        a: "Cash withdrawal, balance enquiry, and mini statement.",
      },
      {
        q: "Is a physical ATM required?",
        a: "No, services are provided via portable handheld device.",
      },
      {
        q: "Who can operate mATM?",
        a: "Authorized merchants and agents after verification.",
      },
    ],
  },

  {
    title: "Point of Sale (POS)",
    faqs: [
      {
        q: "What payments can be accepted using POS?",
        a: "Debit and credit card payments at physical stores.",
      },
      {
        q: "Are POS transactions secure?",
        a: "Yes, secure PIN-based authentication is used.",
      },
      {
        q: "Who should use POS services?",
        a: "Retail stores, restaurants, and service outlets.",
      },
    ],
  },

  {
    title: "E-Commerce Solutions",
    faqs: [
      {
        q: "What does your e-commerce solution include?",
        a: "Online storefront, payment integration, and transaction management.",
      },
      {
        q: "Can small businesses use it?",
        a: "Yes, suitable for small and growing businesses.",
      },
      {
        q: "Is payment integration included?",
        a: "Yes, secure digital payment integration is included.",
      },
    ],
  },

  {
    title: "Travel Services",
    faqs: [
      {
        q: "What travel services are offered?",
        a: "Ticket booking assistance and travel-related services.",
      },
      {
        q: "Who can offer travel services?",
        a: "Authorized agents and merchants after onboarding.",
      },
      {
        q: "Are bookings confirmed instantly?",
        a: "Confirmation depends on availability and provider policies.",
      },
    ],
  },

  {
    title: "Holiday Packages",
    faqs: [
      {
        q: "What is included in holiday packages?",
        a: "Travel, accommodation, and related services as per selected package.",
      },
      {
        q: "Can customers customize packages?",
        a: "Customization depends on provider terms.",
      },
      {
        q: "Are packages for groups and individuals?",
        a: "Yes, suitable for individuals, families, and groups.",
      },
    ],
  },
];
