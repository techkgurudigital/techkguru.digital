"use client";

import Image from "next/image";

export default function FactCounter() {
  return (
    <div className="fact-counter">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-6">
            <div className="fact-counter-image">
              <div className="fact-counter-img">
                <figure>
                  <Image
                    src="/images/fact-counter-img.jpg"
                    alt="Fact Counter"
                    width={550}
                    height={500}
                  />
                </figure>
              </div>

              {/* <div className="fact-counter-skillbar">
                <Image
                  src="/images/fact-counter-skillbar-img.png"
                  alt="Skill Bar"
                  width={450}
                  height={120}
                />
              </div> */}
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6">
            <div className="fact-counter-content">
              <div className="section-title">
                <h3> Key Facts</h3>
                <h2>
                  That Define <span> Our Expertise</span>
                </h2>
                <p>
                  Our expertise is built on reliable fintech infrastructure,
                  secure digital platforms, and a strong focus on enabling
                  smooth financial and digital services for businesses and
                  individuals.
                </p>
              </div>

              {/* Counter Boxes */}
              <div className="fact-counter-box-list">
                <div className="fact-counter-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-fact-counter-1.svg"
                      alt="Experience"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="fact-counter-box-content">
                    <h2>10K+</h2>
                    <p>Successful Transactions Processed</p>
                  </div>
                </div>

                <div className="fact-counter-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-fact-counter-2.svg"
                      alt="Success Rate"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="fact-counter-box-content">
                    <h2>500+</h2>
                    <p>Active Agents & Merchants</p>
                  </div>
                </div>

                <div className="fact-counter-box">
                  <div className="icon-box">
                    <Image
                      src="/images/icon-fact-counter-3.svg"
                      alt="Global Research"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="fact-counter-box-content">
                    <h2>9+</h2>
                    <p>Digital & Fintech Services Offered</p>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              {/* <div className="fact-counter-list">
                <ul>
                  <li>Strategic financial planning</li>
                  <li>Expert investment advisory</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
