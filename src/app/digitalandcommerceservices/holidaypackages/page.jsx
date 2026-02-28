"use client";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/component/PageHeader";
import Footer from "@/app/component/Footer";
import { useEffect, useState } from "react";
import Header from "@/app/component/Header";
import Preloader from "@/app/component/Preloader";

const faqs = [
  {
    q: "What is included in holiday packages?",
    a: "Holiday packages may include travel, accommodation, and related services based on the selected package.",
  },
  {
    q: "Can customers customize holiday packages?",
    a: "Customization options depend on package availability and service provider terms.",
  },
  {
    q: "Are holiday packages suitable for individuals and groups?",
    a: "Yes, holiday packages can be offered to individuals, families, and group travelers.",
  },
];

export default function HolidayPackages() {
  useEffect(() => {
      if (window.WOW) {
        new window.WOW().init();
      }
    }, []);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Preloader/>
      <Header />
      <PageHeader title="Holiday Packages" breadcrumb="holiday packages" />
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="service-catagery-list wow fadeInUp">
                  <h3>Digital & Commerce Services</h3>
                  <ul>
                    <li>
                      <Link href="/digitalandcommerceservices/ecommercesolution">
                        E-Commerce Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalandcommerceservices/holidaypackages">
                        Travel Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/digitalandcommerceservices/travelservices">
                        Holiday Packages
                      </Link>
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
                      <h3>info@techguru.digital</h3>
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
                      src="/images/holiday.jpeg"
                      alt="service"
                      width={800}
                      height={450}
                      priority
                      loading="eager"
                      unoptimized
                    />
                  </figure>
                </div>

                <div className="service-entry">
                  <p className="wow fadeInUp">
                    Holiday Packages offered by TechkGuru Digital provide
                    customers with complete travel solutions. These packages are
                    curated to simplify planning and booking while offering
                    comfort and convenience.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Key Highlights
                      </h5>
                      <ul>
                        <li>Pre-designed holiday packages</li>
                        <li>End-to-end booking support</li>
                        <li>Reliable service coordination</li>
                      </ul>
                    </div>

                    
                  </div>

                  <div className="service-feature">
                    <h5 className="text-anime-style-2 mb-3">Benefits</h5>

                    {/* Service Entry List */}
                    <div
                      className="service-entry-list wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <ul>
                        <li>Hassle-free travel planning</li>
                        <li>Value-added services for customers</li>
                        <li>Additional revenue stream for agents</li>
                      </ul>
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
