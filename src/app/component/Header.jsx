"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const menuData = [
  {
    title: "COMPANY",
    href: "/",
    items: [
      { label: "About Us", href: "/about" },
      { label: "FAQS", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "FINTECH SERVICES",
    href: "/fintech",
    items: [
      { label: "AEPS", href: "/aeps" },
      { label: "BBPS", href: "/bbps" },
      { label: "Credit Card Bill Payment", href: "/credit-card" },
      { label: "Payment Solutions", href: "/payment-solutions" },
      { label: "POS", href: "/pos" },
      { label: "MATM", href: "/matm" },
    ],
  },
  {
    title: "DIGITAL & COMMERCE SERVICES",
    href: "/digital",
    items: [
      { label: "E-Commerce Solutions", href: "/ecommerce" },
      { label: "Travel Services", href: "/travel" },
      { label: "Holiday Packages", href: "/holiday-packages" },
    ],
  },
  {
    title: "LEGAL",
    href: "/legal",
    items: [
      { label: "Retailor Agreement", href: "/pdf/Retailer Agreement - techguru.digital.pdf" },
      { label: "Distributor Agreement", href: "/pdf/Distributor Agreement - techguru.digital.pdf" },
      {
        label: "Super Distributor Agreement",
        href: "/pdf/Super Distributor Agreement - techguru.digital.pdf",
      },
      {
        label: "Master Business Platform Usage Agreement",
        href: "/pdf/TechGuru Digital – Business Platform Usage Agreement.pdf",
      },
    ],
  },
   {
    title: "LOGIN",
    href: "https://webportal.techguru.digital",
    items: [
      { label: "Retailor", href: "https://webportal.techguru.digital/", target:"_blank" },
      { label: "Distributor", href: "https://webportal.techguru.digital/", target:"_blank" },
      {
        label: "Super Distributor",
        href: "https://webportal.techguru.digital/",
        target:"_blank"
      },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <>
      {/* ============ MOBILE HEADER ============ */}
      <div className="mobile-header xl:hidden fixed top-0 w-full bg-white z-[999]">
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Image
              src="/images/Pratik1-C.png"
              width={120}
              height={40}
              alt="logo"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl text-black hover:text-white transition"
          >
            ☰
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full bg-[#fff] w-[90%] transition-transform megap duration-300  ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <Link href="/">
              <Image
                src="/images/Pratik1-C.png"
                width={120}
                height={40}
                alt="logo"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-black hover:text-white transition"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col p-4  text-[14px] text-black">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded text-black hover:bg-[#028ae6] hover:!text-white transition"
              >
                HOME
              </Link>
            </li>

            {menuData.map((menu, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex justify-between items-center px-3 py-2 !text-black rounded hover:bg-[#028ae6] hover:text-white  transition">
                  {/* Title link */}
                  <Link href={menu.href} className="flex-1">
                    {menu.title}
                  </Link>

                  {/* Expand button */}
                  <button
                    onClick={() =>
                      setServiceOpen(serviceOpen === index ? null : index)
                    }
                    className="ml-2 text-lg"
                  >
                    {serviceOpen === index ? "−" : "+"}
                  </button>
                </div>

                {serviceOpen === index && (
                  <ul className="flex flex-col pl-4">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 rounded text-black hover:bg-[#028ae6] hover:!text-white transition"
                          target={item.target}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-[80px] md:mt-0"></div>
      {/* ============ DESKTOP HEADER (YOUR ORIGINAL CODE – UNTOUCHED) ============ */}
      <header className="desktop-header hidden xl:block relative bg-[#111827] pt-4 pb-18">
        <div className="container mx-auto flex justify-between items-center text-white">
          <h6 className="text-[1rem] text-white">
            TechkGuru Digital — Your Trusted Fintech & Digital Services Partner
          </h6>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] w-full max-w-screen-xl bg-white shadow-2xl px-4 md:px-8 z-50">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-2">
              <Link href="/">
                <Image
                  src="/images/Pratik1-C.png"
                  alt="Logo"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <div className="col-span-10 border-l">
              <div className="flex justify-between items-center py-3 text-sm text-gray-600">
                <div className="flex gap-6">
                  {/* <span>📍 Mumbai, Maharashtra</span> */}
                  <span className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition cursor-pointer pl-4">
                    <FiMail className="text-lg text-indigo-500" />
                    Info@techkguru.digital
                  </span>
                  <span className="flex items-center gap-2">
                    <FiPhone className="text-indigo-500" /> +91 99889-91533
                  </span>
                </div>

                {/* <div className="flex gap-4 text-lg">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#1877F2] transition"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#E4405F] transition"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#0A66C2] transition"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#1DA1F2] transition"
                  >
                    <FaTwitter />
                  </a>
                </div> */}
              </div>

              <div className="relative flex justify-between border-t items-center megap">
                <ul className="flex gap-1 font-medium mb-0">
                  <li>
                    <Link href="/" className="px-3 py-2 block">
                      HOME
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/about" className="px-3 py-2 block">
                      COMPANY
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block w-full bg-[#fff] p-[20px] shadow-2xl rounded-b-2xl z-50">
                      <div className="grid grid-cols-3 gap-6 block">
                        <Link href="/about" className="mega-item">
                          <img
                            src="/images/icon-service-1.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">About Us</h4>
                          <p className="text-gray-300 text-sm">
                            Delivering secure fintech and digital services built
                            on trust and technology.{" "}
                          </p>
                        </Link>

                        <Link href="/faqs" className="mega-item">
                          <img
                            src="/images/icon-service-2.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">FAQS</h4>
                          <p className="text-gray-300 text-sm">
                            Grow wealth with expert investment guidance.
                          </p>
                        </Link>

                        <Link href="/" className="mega-item">
                          <img
                            src="/images/icon-service-4.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Company Profile 
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Focused on compliance, reliability, and scalable
                            digital service delivery.
                          </p>
                        </Link>
                        <Link href="/contact" className="mega-item">
                          <img
                            src="/images/icon-service-4.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Contact 
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Focused on compliance, reliability, and scalable
                            digital service delivery.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </li>

                  {/* ===== YOUR MEGA MENU EXACT ===== */}
                  <li className="group">
                    <Link
                      href="/fintech"
                      className="px-3 py-2 block hover:text-indigo-600"
                    >
                      FINTECH SERVICES
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block w-full bg-[#fff] p-[20px] shadow-2xl rounded-b-2xl z-50">
                      <div className="grid grid-cols-3 gap-6 block">
                        <Link href="/aeps" className="mega-item">
                          <img
                            src="/images/icon-service-1.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            AEPS – Aadhaar Enabled Payment Services
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Fast and secure biometric-based banking services at
                            your fingertips. (Cash withdrawal, balance check,
                            mini statement)
                          </p>
                        </Link>

                        <Link href="/bbps" className="mega-item">
                          <img
                            src="/images/icon-service-2.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            BBPS – Bharat Bill Payment System
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Pay utility bills, DTH, mobile postpaid, and more
                            through a unified, secure bill payment network.
                          </p>
                        </Link>

                        <Link href="/credit-card" className="mega-item">
                          <img
                            src="/images/icon-service-3.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Credit Card Bill Payment
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Instant and safe credit card payments for users
                            across major banks and providers.
                          </p>
                        </Link>

                        <Link href="/payment-solutions" className="mega-item">
                          <img
                            src="/images/icon-service-4.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Payment Solutions
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Accept digital payments securely — UPI, card,
                            netbanking, and more — backed with modern APIs.
                          </p>
                        </Link>

                        <Link href="/pos" className="mega-item">
                          <img
                            src="/images/icon-service-5.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Point of Sale (POS)
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Enable card-based payments at your store with secure
                            and reliable POS machines for smooth in-person
                            transactions.
                          </p>
                        </Link>

                        <Link href="/matm" className="mega-item">
                          <img
                            src="/images/icon-service-6.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Micro ATM (mATM)
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Provide basic banking services using debit cards,
                            including cash withdrawal and balance enquiry at
                            merchant locations.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <Link
                      href="/digital"
                      className="px-3 py-2 block hover:text-indigo-600"
                    >
                      DIGITAL & COMMERCE SERVICES
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block w-full bg-[#fff] p-[20px] shadow-2xl rounded-b-2xl z-50">
                      <div className="grid grid-cols-3 gap-6 block">
                        <Link href="/ecommerce" className="mega-item">
                          <img
                            src="/images/icon-service-1.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            E-Commerce Support
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Expand your business online — integrated selling
                            platforms and digital storefront solutions.
                          </p>
                        </Link>

                        <Link href="/holiday-packages" className="mega-item">
                          <img
                            src="/images/icon-service-2.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Holiday Packages
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Book flights, hotels, buses, and complete holiday
                            packages with ease.
                          </p>
                        </Link>

                        <Link href="/travel" className="mega-item">
                          <img
                            src="/images/icon-service-3.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Travels Services
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Secure your future with smart retirement plans.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <Link
                      href="/legal"
                      className="px-3 py-2 block hover:text-indigo-600"
                    >
                      LEGAL
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block w-full bg-[#fff] p-[20px] shadow-2xl rounded-b-2xl z-50">
                      <div className="grid grid-cols-3 gap-6 block no-copy">
                        <a
                          href="/pdf/Retailer Agreement - techguru.digital.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-1.svg"
                            className="w-10 mb-3"
                            alt=""
                          />

                          <h4 className="text-white font-semibold">
                            Retailor Agreement
                          </h4>

                          <p className="text-gray-300 text-sm">
                            Terms for offering fintech and digital services to
                            customers.
                          </p>
                        </a>

                        <a
                          href="/pdf/Distributor Agreement - techguru.digital.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-2.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Distributor Agreement
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Guidelines for managing retailers and platform
                            operations.
                          </p>
                        </a>

                        <a
                          href="/pdf/Super Distributor Agreement - techguru.digital.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-3.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Super Distributor Agreement
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Framework for overseeing and scaling the
                            distribution network.
                          </p>
                        </a>
                        <a
                          href="/pdf/TechGuru Digital – Business Platform Usage Agreement.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-3.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Master Business Platform Usage Agreement
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Framework for overseeing and scaling the
                            distribution network.
                          </p>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="group">
                    <Link
                      href="/"
                      className="px-3 py-2 block hover:text-indigo-600"
                    >
                      LOGIN
                    </Link>

                    <div className="absolute left-0 top-full hidden group-hover:block w-full bg-[#fff] p-[20px] shadow-2xl rounded-b-2xl z-50">
                      <div className="grid grid-cols-3 gap-6 block">
                        <Link
                          href="https://webportal.techguru.digital/"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-1.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">Retailor</h4>
                          <p className="text-gray-300 text-sm">
                            Offer essential fintech and digital services
                            directly to customers with ease.
                          </p>
                        </Link>

                        <Link
                          href="https://webportal.techguru.digital/"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-2.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Distributor
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Manage retailers, monitor transactions, and support
                            business growth efficiently.
                          </p>
                        </Link>

                        <Link
                          href="https://webportal.techguru.digital/"
                          className="mega-item"
                        >
                          <img
                            src="/images/icon-service-3.svg"
                            className="w-10 mb-3"
                          />
                          <h4 className="text-white font-semibold">
                            Super Distributor
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Oversee network operations, scaling distribution and
                            performance across regions.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  

                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
