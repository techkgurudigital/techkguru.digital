"use client";

import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          {/* Phone */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-item wow fadeInUp">
              <div className="contact-info-img">
                <figure className="image-anime">
                  <Image
                    src="/images/contact-info-img-1.jpg"
                    alt="Call Us"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>

              <div className="contact-info-body">
                <div className="icon-box">
                  <Image
                    src="/images/icon-phone.svg"
                    alt="Phone"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="contact-info-content">
                  <h3>call us any time!</h3>
                  <p>+91 99889-91533</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6">
            <div
              className="contact-info-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="contact-info-img">
                <figure className="image-anime">
                  <Image
                    src="/images/contact-info-img-2.jpg"
                    alt="Email Us"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>

              <div className="contact-info-body">
                <div className="icon-box">
                  <Image
                    src="/images/icon-mail.svg"
                    alt="Email"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="contact-info-content">
                  <h3>send us e-mail</h3>
                  <p>info@techkguru.digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-4 col-md-6">
            <div
              className="contact-info-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="contact-info-img">
                <figure className="image-anime">
                  <Image
                    src="/images/contact-info-img-1.jpg"
                    alt="Office Address"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>

              <div className="contact-info-body">
                <div className="icon-box">
                  <Image
                    src="/images/icon-location.svg"
                    alt="Location"
                    width={40}
                    height={40}
                  />
                </div>

                <div className="contact-info-content">
                  <h3>finance office address</h3>
                  <p>
                    ⁠F – 015 A Wing 1st Floor Express Zone Mall, Goregaon East
                    Western Express Highway MUMBAI - 400063
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
