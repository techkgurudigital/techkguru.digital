import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 – About */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-about">
              <h3 className="mb-4">TechkGuru Digital Private Limited.</h3>
              <p>
                Reliable fintech and digital service solutions designed to
                support agents, merchants, and businesses with secure and
                easy-to-use platforms.
              </p>
            </div>
          </div>

          {/* Column 2 – Company */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 – Support */}
          <div className="col-lg-2 col-md-6 col-6">
            <div className="footer-links">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link
                    href="/termandcondition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refundandcancellation">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/grievanceredressalpolicy">Grievance</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 – Services Part 1 */}
          <div className="col-lg-4 col-md-6 col-6">
            <div className="gap-4 text-white">
              {/* Phone */}

              <div className="flex items-start mb-3 gap-4">
                <Image
                  src="/images/icon-location.svg"
                  alt="Location"
                  width={36}
                  height={36}
                />

                <div>
                  <h5 className="text-white mb-1">Office Address</h5>
                  <p className="text-gray-300 mb-0">
                    ⁠F – 015 A Wing 1st Floor Express Zone Mall, Goregaon East
                    Western Express Highway MUMBAI - 400063
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 gap-4 mb-3">
                <Image
                  src="/images/icon-phone.svg"
                  alt="Phone"
                  width={36}
                  height={36}
                />

                <div>
                  <h5 className="text-white mb-1">Call Us</h5>
                  <p className="text-gray-300 mb-0">+91 99889-91533</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/icon-mail.svg"
                  alt="Email"
                  width={36}
                  height={36}
                />

                <div>
                  <h5 className="text-white mb-1">Email Us</h5>
                  <p className="text-gray-300 mb-0">info@techguru.digital</p>
                </div>
              </div>

              {/* Address */}
            </div>
          </div>

          {/* Column 5 – Services Part 2 */}

          {/* Footer CTA */}
          <div className="col-lg-12 mt-4">
            <div className="col-md-12">
              {" "}
              <div className="footer-menu">
                {" "}
                <ul className="!text-left">
                  {" "}
                  <li>
                    <Link href="/aeps">AEPS</Link>
                  </li>
                  <li>
                    <Link href="/matm">Micro ATM</Link>
                  </li>
                  <li>
                    <Link href="/bbps">BBPS</Link>
                  </li>
                  <li>
                    <Link href="/payment-solutions">
                      Payment Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/pos">POS Services</Link>
                  </li>
                  <li>
                    <Link href="/credit-card">
                      Credit Card Bill
                    </Link>
                  </li>
                  <li>
                    <Link href="/travel">
                      Travel Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce">
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/holiday-packages">
                      Holiday Packages
                    </Link>
                  </li>
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          {" "}
          <div className="row align-items-center">
            {" "}
            <div className="col-md-5">
              {" "}
              <div className="footer-copyright-text">
                {" "}
                <p>
                  {" "}
                  © 2025 TechkGuru Digital Private Limited. All Rights
                  Reserved.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-7">
              {" "}
              <div className="footer-menu">
                {" "}
                <ul>
                  {" "}
                  <li>
                    {" "}
                    <Link href="#">LinkedIn</Link>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <Link href="#">Facebook</Link>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <Link href="#">Instagram</Link>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <Link href="#">Twitter</Link>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}
