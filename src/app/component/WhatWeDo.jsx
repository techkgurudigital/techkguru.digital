"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3>what we do</h3>
                <h2>
                  Driving Digital Growth <span>and Financial Inclusion</span>
                </h2>
                <p>
                  We deliver reliable fintech and digital service solutions that
                  enable secure transactions, seamless payments, and easy access
                  to essential financial and digital services for businesses,
                  agents, and individuals.
                </p>
              </div>

              <div className="what-we-do-list">
                <ul>
                  <li>AEPS &amp; Micro ATM Banking Services</li>
                  <li>BBPS & Credit Card Bill Payments</li>
                  <li>Secure Digital Payment Solutions</li>
                  <li>Travel, Holiday & E-Commerce Services</li>
                </ul>
              </div>

              <div className="what-we-do-btn">
                <Link href="/contact" className="btn-default">
                  contact now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6">
            <div className="what-we-do-images">
              <div className="what-do-we-img-1">
                <figure>
                  <Image
                    src="/images/what-we-do-img-1.jpg"
                    alt="What we do"
                    width={500}
                    height={550}
                  />
                </figure>
              </div>

              <div className="what-do-we-img-2">
                <figure>
                  <Image
                    src="/images/what-we-do-img-2.jpg"
                    alt="Finance work"
                    width={450}
                    height={500}
                  />
                </figure>
              </div>

              <div className="experience-counter-box">
                <div className="experience-counter-no">
                  <h2>7+</h2>
                </div>
                <div className="experience-counter-content">
                  <p>Years of experience in finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
