"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurFeature() {
  return (
    <div className="our-feature">
      <div className="container">

        {/* Section Header */}
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title dark-section">
              <h3>our feature</h3>
              <h2>
                Key Features of Our Finance <span> & Digital Services </span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn">
              <Link href="/contact" className="btn-default">
                contact now
              </Link>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="row">
          <div className="col-lg-12">
            <div className="our-feature-list">

              {[
                { icon: "icon-our-feature-1.svg", title: "Secure & Reliable Transactions", description: "All transactions are protected with strong security standards to ensure data safety, reliability, and complete peace of mind for users." },
                { icon: "icon-our-feature-2.svg", title: "All-in-One Digital Platform", description: "Access multiple fintech and digital services such as payments, banking, travel, and e-commerce through a single, unified platform."  },
                { icon: "icon-our-feature-3.svg", title: "Fast Processing & Timely Settlements", description: "Our systems are designed for quick transaction processing and efficient settlements, helping businesses operate without delays."  },
                { icon: "icon-our-feature-4.svg", title: "Easy-to-Use Dashboard", description: "User-friendly interfaces make it simple for agents and merchants to manage transactions, track reports, and monitor performance."  },
                { icon: "icon-our-feature-5.svg", title: "Scalable Solutions for Growth", description: "Our services are built to scale, allowing businesses to expand their operations and offerings as their customer base grows."  },
                { icon: "icon-our-feature-6.svg", title: "Dedicated Support & Assistance", description: "Our support team is always available to help with onboarding, technical assistance, and day-to-day operational support."  },
              ].map((item, index) => (
                <div className="our-feature-item" key={index}>
                  <div className="icon-box">
                    <Image
                      src={`/images/${item.icon}`}
                      alt={item.title}
                      width={60}
                      height={60}
                    />
                  </div>

                  <div className="feature-item-content">
                    <h3>{item.title}</h3>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Footer */}
          <div className="col-lg-12">
            <div className="our-feature-footer">
              <p>
                <span>Free</span> Let's make something great work together.{" "}
                <Link href="/contact">Get Free Quote</Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
