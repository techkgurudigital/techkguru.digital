"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // WOW animation
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }

    // Swiper init (HTML-based)
    if (typeof window !== "undefined" && window.Swiper) {
      new window.Swiper(".hero-client-slider .swiper", {
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      });
    }
  }, []);

  return (
    <div className="hero ">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content">

              <div className="section-title dark-section">
                <h3 className="wow fadeInUp">Welcome To TechkGuru Digital</h3>
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  <span>Empowering</span> your financial success journey 
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  With fast, secure, and reliable digital payment solutions, travel services, e-commerce support, and more.
                </p>
              </div>

              <div
                className="hero-content-body wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="hero-btn">
                  <Link href="/contact" className="btn-default">
                    get started
                  </Link>
                </div>

                {/* <div className="hero-introduction-video">
                  <div className="video-play-button">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                      data-cursor-text="Play"
                    >
                      <Image
                        src="/images/icon-play.svg"
                        alt="Play"
                        width={60}
                        height={60}
                      />
                    </a>
                    <p>introduction</p>
                  </div>
                </div> */}
              </div>

              <div className="hero-content-footer">
                <h2 className="wow fadeInUp" data-wow-delay="0.6s">
                  we're working with :
                </h2>

                <div className="hero-client-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">

                      {[1, 2, 3, 1, 2, 3].map((item, index) => (
                        <div className="swiper-slide" key={index}>
                          <div className="client-logo">
                            <Image
                              src={`/images/client-logo-${item}.svg`}
                              alt="Client"
                              width={120}
                              height={60}
                            />
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="hero-img">
                <figure>
                  <Image
                    src="/images/HOME PAGE.png"
                    alt="Hero"
                    width={550}
                    height={550}
                    priority
                  />
                </figure>
              </div>

              <div className="company-experience">
                <h3>
                  <span className="counter">5</span>+
                </h3>
                <p>Years of experience in finance</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
