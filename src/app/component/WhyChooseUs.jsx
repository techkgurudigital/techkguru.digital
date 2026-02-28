"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="why-choose-content">
              <div className="section-title">
                <h3>why choose us</h3>
                <h2>
                  Why Choose TechkGuru <span> Digital</span>
                </h2>
              </div>

              <div className="why-choose-box-list">
                <div className="why-choose-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-why-choose-1.svg"
                      alt="financial strategies"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="why-choose-box-content">
                    <h3>Secure & Trusted Platform</h3>
                    <p>
                      Built with strong security measures to ensure safe and
                      reliable digital transactions across all services.
                    </p>
                  </div>
                </div>

                <div className="why-choose-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-why-choose-2.svg"
                      alt="tax optimization"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="why-choose-box-content">
                    <h3>Multiple Services, One Platform</h3>
                    <p>
                      Access AEPS, BBPS, payments, travel, e-commerce, and more
                      — all from a single, integrated system.
                    </p>
                  </div>
                </div>

                <div className="why-choose-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-why-choose-2.svg"
                      alt="tax optimization"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="why-choose-box-content">
                    <h3>Fast & Simple Operations</h3>
                    <p>
                      Easy onboarding, smooth transactions, and user-friendly
                      interfaces designed for everyday business needs.
                    </p>
                  </div>
                </div>

                <div className="why-choose-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-why-choose-2.svg"
                      alt="tax optimization"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="why-choose-box-content">
                    <h3>Dedicated Support & Growth</h3>
                    <p>
                      Reliable customer support and continuous improvements to
                      help agents and businesses grow with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="why-choose-list">
                <ul>
                  <li>strategic financial planning</li>
                  <li>expert investment advisory</li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6">
            <div className="why-choose-image">
              <div className="why-choose-img-1">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/why-choose-img-1.jpg"
                    alt="Why choose us 1"
                    width={500}
                    height={600}
                  />
                </figure>
              </div>

              <div className="why-choose-img-2">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/why-choose-img-2.jpg"
                    alt="Why choose us 2"
                    width={400}
                    height={450}
                  />
                </figure>
              </div>

              <div className="why-choose-contact-circle">
                {/* <Image
                  src="/images/contact-us-img.svg"
                  alt="Contact us"
                  width={150}
                  height={150}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
