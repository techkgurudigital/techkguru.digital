"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="what-we-do-content">
              <div className="section-title">
                <h3>Company Overview</h3>
                <h2>
                  TechkGuru Digital is a fintech{" "}
                  <span>and digital services platform</span>
                </h2>
                <p>
                  <b>TechkGuru Digital is a fintech and digital services platform</b>
                  focused on enabling <b>secure, reliable, and accessible financial
                  and commerce solutions for businesses, agents, merchants, and
                  enterprise partners across India.</b>
                </p>
                <p>
                  We provide a wide range of fintech services including <b>AEPS,
                  BBPS, Micro ATM (mATM), Point of Sale (POS), digital payment
                  solutions, and credit card bill payments,</b> along with digital
                  commerce services such as <b>e-commerce solutions, travel
                  services, and holiday packages.</b> Our platform is designed to
                  <b>simplify transactions, enhance operational efficiency, and
                  support financial inclusion through technology-driven
                  solutions.</b>
                </p>
                <p>
                  At <b>TechkGuru Digital,</b> we operate with a strong emphasis on
                  <b>compliance, security, and transparency.</b> All services are
                  delivered through <b>authorized banking and service partners</b> and
                  are aligned with <b>applicable regulatory guidelines.</b> We
                  continuously work to ensure that our platform meets <b>industry
                  standards</b> and supports responsible usage across our network.
                </p>
                <p>
                  Our <b>scalable infrastructure</b> supports multiple user roles,
                  including <b>Retailers, Distributors, Super Distributors, and
                  Enterprise Clients,</b> enabling <b>seamless onboarding, real-time
                  transaction monitoring, and efficient service management.</b> By
                  combining <b>robust technology with dependable support,</b> we help
                  our partners <b>expand their service offerings and grow their
                  businesses with confidence.</b>
                </p>
                <p>
                  Driven by <b>innovation and guided by trust,</b> TechkGuru Digital
                  aims to build <b>long-term partnerships</b> while contributing to the
                  growth of <b>India’s digital and fintech ecosystem.</b>
                </p>
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
