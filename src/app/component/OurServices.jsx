"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <div className="our-services">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-4">
            <div className="our-service-content">
              <div className="section-title">
                <h3>services</h3>
                <h2>
                  Expert finance & consult services <span>for success</span>
                </h2>
                <p>
                  We offer a complete suite of digital and fintech solutions
                  designed to help you grow your business and serve your
                  customers better:
                </p>
              </div>

              <div className="service-content-btn">
                <Link href="/services" className="btn-default">
                  all services
                </Link>
              </div>
            </div>
          </div>

          {/* Right Services List */}
          <div className="col-lg-8">
            <div className="our-service-list">
              {[
                {
                  no: "01",
                  title: "AEPS – Aadhaar Enabled Payment Services",
                  description: "Fast and secure biometric-based banking services at your fingertips. (Cash withdrawal, balance check, mini statement)",
                  icon: "icon-service-1.svg",
                  link:"/aeps"
                },
                {
                  no: "02",
                  title: "Micro ATM (mATM)",
                  description: "Provide basic banking services using debit cards, including cash withdrawal and balance enquiry at merchant locations.",
                  icon: "icon-service-2.svg",
                  link:"/matm"
                },
                {
                  no: "03",
                  title: "BBPS – Bharat Bill Payment System",
                  description: "Pay utility bills, DTH, mobile postpaid, and more through a unified, secure bill payment network.",
                  icon: "icon-service-3.svg",
                  link:"/bbps"
                },
                {
                  no: "04",
                  title: "Payment Solutions",
                  description: "Accept digital payments securely — UPI, card, netbanking, and more — backed with modern APIs.",
                  icon: "icon-service-4.svg",
                  link:"/payment-solutions"
                },
                {
                  no: "05",
                  title: "Point of Sale (POS)",
                  description: "Enable card-based payments at your store with secure and reliable POS machines for smooth in-person transactions.",
                  icon: "icon-service-5.svg",
                  link:"/pos"
                },
                {
                  no: "06",
                  title: "Credit Card Bill Payment",
                  description: "Instant and safe credit card payments for users across major banks and providers.",
                  icon: "icon-service-6.svg",
                  link:"/credit-card"
                },
                {
                  no: "07",
                  title: "Travel & Holiday Packages",
                  description: "Book flights, hotels, buses, and complete holiday packages with ease.",
                  icon: "icon-service-6.svg",
                  link:"/holiday-packages"
                },
                {
                  no: "08",
                  title: "E-Commerce Support",
                  description: "Expand your business online — integrated selling platforms and digital storefront solutions",
                  icon: "icon-service-6.svg",
                  link:"/ecommerce"
                },
              ].map((service) => (
                <div className="service-item" key={service.no}>
                  <div className="service-no">
                    <h2>{service.no}</h2>
                  </div>

                  <div className="service-content-box">
                    <div className="icon-box">
                      <Image
                        src={`/images/${service.icon}`}
                        alt={service.title}
                        width={60}
                        height={60}
                      />
                    </div>

                    <div className="service-item-content">
                      <h3>{service.title}</h3>
                      <p>
                        {service.description}
                      </p>

                      <Link href={service.link} className="service-btn">
                        <Image
                          src="/images/arrow-white.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="service-footer">
              <p>
                Let's make something great work together.{" "}
                <Link href="/contact">Get Free Quote</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
