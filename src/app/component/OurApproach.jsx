"use client";

import Link from "next/link";
import Image from "next/image";

export default function OurApproach() {
  return (
    <div className="our-approach">
      <div className="container">
        {/* Section Header */}
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our approach</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Customized strategies for <span>financial success</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link href="/contact" className="btn-default">
                Contact now
              </Link>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Value */}
        <div className="row">
          {/* Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="mission-vission-item wow fadeInUp">
              <div className="mission-vission-header">
                <div className="icon-box">
                  <Image
                    src="/images/icon-our-mission.svg"
                    alt="Our Mission"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="mission-vission-content">
                  <h3>our mission</h3>
                  <p>
                    Empowering clients with tailored financial strategies for
                    sustainable growth.
                  </p>
                </div>
              </div>

              <div className="mission-vission-image">
                <figure className="image-anime">
                  <Image
                    src="/images/our-mission-img.jpg"
                    alt="Mission"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="col-lg-4 col-md-6">
            <div
              className="mission-vission-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="mission-vission-header">
                <div className="icon-box">
                  <Image
                    src="/images/icon-our-vision.svg"
                    alt="Our Vision"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="mission-vission-content">
                  <h3>our vision</h3>
                  <p>
                    Empowering clients with tailored financial strategies for
                    sustainable growth.
                  </p>
                </div>
              </div>

              <div className="mission-vission-image">
                <figure className="image-anime">
                  <Image
                    src="/images/our-vision-img.jpg"
                    alt="Vision"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>
            </div>
          </div>

          {/* Value */}
          <div className="col-lg-4 col-md-6">
            <div
              className="mission-vission-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="mission-vission-header">
                <div className="icon-box">
                  <Image
                    src="/images/icon-our-value.svg"
                    alt="Our Value"
                    width={50}
                    height={50}
                  />
                </div>

                <div className="mission-vission-content">
                  <h3>our value</h3>
                  <p>
                    Empowering clients with tailored financial strategies for
                    sustainable growth.
                  </p>
                </div>
              </div>

              <div className="mission-vission-image">
                <figure className="image-anime">
                  <Image
                    src="/images/our-value-img.jpg"
                    alt="Value"
                    width={400}
                    height={300}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
