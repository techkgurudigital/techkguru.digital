"use client";

import Image from "next/image";

export default function ContactFormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect API / email service
    console.log("Form submitted");
  };

  return (
    <div className="contact-form-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="contact-form-img">
              <figure className="image-anime wow fadeInUp">
                <Image
                  src="/images/contact-us-img.jpg"
                  alt="Contact Us"
                  width={500}
                  height={500}
                />
              </figure>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">contact us</h3>
              <h2
                className="text-anime-style-2"
                data-cursor="-opaque"
              >
                Get in Touch <span>with Us</span>
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Have questions or need assistance? Reach out to us today! We're here to provide expert solutions and friendly support.
              </p>
            </div>

            <div className="contact-form">
              <form
                onSubmit={handleSubmit}
                className="wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="lname"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone no"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="E-mail address"
                      required
                    />
                  </div>

                  <div className="form-group col-md-12 mb-5">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="btn-default">
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
