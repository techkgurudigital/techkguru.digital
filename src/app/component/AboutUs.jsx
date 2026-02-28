"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    // Initialize WOW animations
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          {/* Left Images */}
          <div className="col-lg-6">
            <div className="about-us-images">
              <div className="about-img-1">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/about-img-1.jpg"
                    alt="About Image 1"
                    width={500}
                    height={600}
                  />
                </figure>
              </div>

              <div className="about-img-2">
                <figure className="image-anime wow fadeInUp">
                  <Image
                    src="/images/about-img-2.jpg"
                    alt="About Image 2"
                    width={400}
                    height={500}
                  />
                </figure>
              </div>

              <div className="contact-circle">
                {/* <Image
                  src="/images/contact-us-img.svg"
                  alt="Contact"
                  width={160}
                  height={160}
                /> */}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">about us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  About TechkGuru Digital{" "}
                  <span>– Your Trusted Fintech & Digital Services Partner</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  TechkGuru Digital is a fintech and digital services platform
                  focused on providing secure, reliable, and efficient
                  solutions. Our goal is to simplify financial and digital
                  services through modern technology and a user-friendly
                  platform. We help businesses and partners access essential
                  services with ease and confidence.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We offer services including <b> AEPS, BBPS, credit card bill
                  payments, payment solutions, Micro ATM (mATM), and POS, along
                  with e-commerce, travel, and holiday services.</b> Our platform
                  enables seamless transactions and supports partners in
                  expanding their service offerings. We ensure consistent
                  performance through trusted systems and infrastructure.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our network includes <b> retailers, distributors, and business
                  partners, </b> empowering them with scalable tools and reliable
                  support. We help partners improve efficiency, serve more
                  customers, and grow their business. Our platform is designed
                  to support both small and large service providers.
                </p>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Security, compliance, and transparency are at the core of our
                  operations. We follow industry standards and work with
                  authorized partners to ensure safe transactions. TechkGuru
                  Digital is committed to building trusted partnerships and
                  supporting digital growth across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
