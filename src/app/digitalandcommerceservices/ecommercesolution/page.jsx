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
    q: "What does your e-commerce solution include?",
    a: "Our e-commerce solutions include online storefront support, payment integration, and transaction management.",
  },
  {
    q: "Can small businesses use your e-commerce services?",
    a: "Yes, our e-commerce solutions are suitable for small businesses as well as growing enterprises.",
  },
  {
    q: "Is payment integration included in e-commerce services?",
    a: "Yes, secure digital payment integration is included as part of our e-commerce solutions.",
  },
];

export default function ECommerceSolutions() {
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
      <PageHeader
        title="E-Commerce Solutions"
        breadcrumb="e-commerce solutions"
      />
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
                      src="/images/ecommerce.jpeg"
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
                    TechkGuru Digital provides e-commerce solutions that help
                    businesses establish, manage, and grow their online
                    presence. Our solutions support digital selling with secure
                    payment integration and efficient order handling.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">What We Offer</h5>
                      <ul>
                        <li>Online store setup</li>
                        <li>Payment gateway integration</li>
                        <li>Order and transaction management</li>
                        <li>Scalable digital infrastructure</li>
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
                        <li>Wider market reach</li>
                        <li>24/7 business availability</li>
                        <li>Simplified online selling</li>
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
