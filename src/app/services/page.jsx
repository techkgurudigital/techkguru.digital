import ContactFormSection from "../component/ContactFormSection";
import ContactInfo from "../component/ContactInfo";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";
import Preloader from "../component/Preloader";
import ServicesSection from "../component/ServicesSection";
import WhatWeDo from "../component/WhatWeDo";

export default function ServicePage() {
  return (
    <>
    <Preloader/>
    <Header/>
      <PageHeader title="Fintech Services" breadcrumb="fintech services" />
      <ServicesSection services={services} />
      <WhatWeDo/>
      <Footer/>
    </>
  );
}

const services = [
  {
    title: "AEPS – Aadhaar Enabled Payment Services",
    description:
      "We offer Aadhaar Enabled Payment Services that allow customers to perform basic banking transactions using biometric authentication.Through AEPS, users can withdraw cash, check account balances, and access mini statements without visiting a bank branch.This service helps agents and retailers provide essential banking access, especially in remote and semi-urban locations.",
    icon: "/images/icon-service-1.svg",
    delay: "0s",
    link: "/aeps",
  },
  {
    title: "BBPS – Bharat Bill Payment System",
    description:
      "TechkGuru Digital supports the Bharat Bill Payment System, a unified bill payment platform that allows customers to pay utility and service bills easily. Users can pay electricity, water, gas, mobile postpaid, DTH, and other bills with instant confirmation and digital receipts.",
    icon: "/images/icon-service-2.svg",
    delay: "0.2s",
    link: "/bbps",
  },
  {
    title: "Credit Card Bill Payment",
    description:
      "Our credit card bill payment service allows users to pay their credit card dues safely and on time. The platform ensures secure processing, clear transaction records, and reliable confirmations across supported banks.",
    icon: "/images/icon-service-3.svg",
    delay: "0.4s",
    link: "/credit-card",
  },
  {
    title: "Payment Solutions",
    description:
      "We provide secure and flexible payment solutions that help businesses accept digital payments efficiently. Our services support multiple payment methods, enabling smoother transactions, faster settlements, and improved customer experience for merchants.",
    icon: "/images/icon-service-3.svg",
    delay: "0.4s",
    link: "/payment-solutions",
  },
  {
    title: "Point of Sale (POS)",
    description:
      "Our POS solutions allow merchants to accept card-based payments directly at their business location. With reliable hardware and secure payment processing, POS systems help businesses manage in-store payments efficiently while offering customers a convenient payment experience.",
    icon: "/images/icon-service-3.svg",
    delay: "0.4s",
    link: "/pos",
  },
  {
    title: "Micro ATM (mATM)",
    description:
      "Our Micro ATM service enables merchants and agents to offer basic banking services using a handheld device. Customers can withdraw cash, check balances, and complete simple banking transactions securely using debit cards. This solution brings banking convenience to local shops and service points, reducing dependence on traditional bank branches.",
    icon: "/images/icon-service-3.svg",
    delay: "0.4s",
    link: "/matm",
  },
];

