"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <div className="hero hero-bg-image hero-slider-layout">
      <div className="swiper">
        <div className="swiper-wrapper">

          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="hero-slide">
              <div className="hero-slider-image">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Hero Background"
                  fill
                  priority
                />
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="hero-content">
                      <div className="section-title dark-section">
                        <h3>welcome to financial</h3>
                        <h1>
                          <span>Empowering</span> your financial success journey
                        </h1>
                        <p>
                          Guiding you with expert insights and strategic solutions
                          to achieve financial growth, stability, and long-term success.
                        </p>
                      </div>

                      <div className="hero-content-body">
                        <div className="hero-btn">
                          <Link href="/contact" className="btn-default">
                            get started
                          </Link>
                        </div>

                        <div className="hero-introduction-video">
                          <div className="video-play-button">
                            <a
                              href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src="/images/icon-play.svg"
                                alt="Play"
                                width={50}
                                height={50}
                              />
                            </a>
                            <p>introduction</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="hero-slide">
              <div className="hero-slider-image">
                <Image
                  src="/images/hero-bg-2.jpg"
                  alt="Hero Background 2"
                  fill
                />
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="hero-content">
                      <div className="section-title dark-section">
                        <h3>welcome to financial</h3>
                        <h1>
                          <span>Empowering</span> your financial success journey
                        </h1>
                        <p>
                          Guiding you with expert insights and strategic solutions
                          to achieve financial growth, stability, and long-term success.
                        </p>
                      </div>

                      <div className="hero-content-body">
                        <div className="hero-btn">
                          <Link href="/contact" className="btn-default">
                            get started
                          </Link>
                        </div>

                        <div className="hero-introduction-video">
                          <div className="video-play-button">
                            <a
                              href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src="/images/icon-play.svg"
                                alt="Play"
                                width={50}
                                height={50}
                              />
                            </a>
                            <p>introduction</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="hero-pagination"></div>
      </div>
    </div>
  );
}
