"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    q: "What services do you offer?",
    a: "We offer a wide range of fintech and digital services including AEPS, Micro ATM (mATM), BBPS, payment solutions, credit card bill payments, travel services, holiday packages, and e-commerce support."
  },
  {
    q: "Who can use TechkGuru Digital services?",
    a: "Our services are designed for agents, merchants, retailers, small businesses, and individuals looking to offer or use digital and fintech services."
  },
  {
    q: "How do I get started with TechkGuru Digital?",
    a: "You can get started by contacting us or registering on our platform. After completing the required verification process, eligible services will be activated on your account."
  },
  {
    q: "Are transactions safe and secure?",
    a: "Yes, security is a top priority at TechkGuru Digital. We follow standard security practices and work with trusted partners to ensure safe and reliable transactions."
  },
  {
    q: "What documents are required for onboarding?",
    a: "Basic KYC documents such as identity proof, address proof, and business details may be required, depending on the services you choose."
  },
  {
    q: "Do you provide customer support?",
    a: "Yes, we provide dedicated support to assist with onboarding, service activation, and day-to-day operational queries."
  }
];



export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <div className="our-faqs">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">faqs</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Your most frequently asked <span>questions answered</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link href="/faqs" className="btn-default">
                view all FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          {/* LEFT IMAGE SIDE */}
          <div className="col-lg-6">
            <div className="our-faqs-image">
              <div className="our-faqs-img">
                <figure className="image-anime reveal">
                  <Image
                    src="/images/faqs-img.jpg"
                    alt="FAQs"
                    width={500}
                    height={500}
                  />
                </figure>
              </div>

              <div className="client-review-box">
                <div className="client-review-box-content">
                  <p>
                    100+ Client <span><i className="fa-solid fa-star"></i> 5.0 (250 Reviews)</span>
                  </p>
                </div>

                <div className="client-review-images">
                  {[1,2,3,4,5].map((img) => (
                    <div className="client-image" key={img}>
                      <figure className="image-anime">
                        <Image
                          src={`/images/satisfy-client-img-${img}.jpg`}
                          alt="client"
                          width={60}
                          height={60}
                        />
                      </figure>
                    </div>
                  ))}

                  <div className="client-image add-more">
                    <p><span className="counter">30</span>+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FAQ SIDE */}
          <div className="col-lg-6">
            <div className="our-faq-section">
                
                  {/* FAQ Accordion */}
                  <div className="faq-accordion">
                    {faqData.map((item, index) => (
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
  );
}


