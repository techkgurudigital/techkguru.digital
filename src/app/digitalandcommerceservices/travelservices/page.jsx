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
    q: "What travel services are offered?",
    a: "Travel services include booking assistance for travel tickets and essential travel-related services.",
  },
  {
    q: "Who can offer travel services using your platform?",
    a: "Authorized agents and merchants who complete onboarding can offer travel services to customers.",
  },
  {
    q: "Are travel bookings confirmed instantly?",
    a: "Booking confirmation depends on availability and service provider policies.",
  },
];

export default function TravelServices() {
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
      <PageHeader title="Travel Services" breadcrumb="travel services" />
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
                      src="/images/travel.jpeg"
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
                    Our travel services enable customers to book essential
                    travel-related services through a digital platform. This
                    service helps agents expand their offerings while providing
                    convenience to customers.
                  </p>

                  <div className="service-list-video">
                    <div className="service-entry-list wow fadeInUp">
                      <h5 className="text-anime-style-2 mb-4">
                        Services Covered
                      </h5>
                      <ul>
                        <li>Travel ticket bookings</li>
                        <li>Basic travel assistance services</li>
                        <li>Easy and guided booking process</li>
                      </ul>
                    </div>

                  
                  </div>

                  <div className="service-feature">
                    <h5 className="text-anime-style-2 mb-3">Advantages</h5>

                    {/* Service Entry List */}
                    <div
                      className="service-entry-list wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <ul>
                        <li>High customer demand</li>
                        <li>Repeat business opportunities</li>
                        <li>Simple operational flow</li>
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
