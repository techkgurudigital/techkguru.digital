"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesSection({ services }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="page-services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <div className="icon-box">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                  />
                </div>

                <div className="service-item-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link href={service.link} className="service-btn">
                    <Image
                      src="/images/arrow-white.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div className="service-footer wow fadeInUp" data-wow-delay="1.2s">
              <p>
                Let's make something great work together.{" "}
                <Link href="/contact">Get Free Quote</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
