"use client"
import Footer from "../component/Footer";
import Header from "../component/Header";
import PageHeader from "../component/PageHeader";
import Preloader from "../component/Preloader";
import ServicesSection from "../component/ServicesSection";
import WhatWeDo from "../component/WhatWeDo";

export default function DigitalPage() {
  return (
    <>
    <Preloader/>
    <Header/>
      <PageHeader title="Digital & Commerce Services" breadcrumb="digital and commerce services" />
      <ServicesSection services={services}/>
      <WhatWeDo/>
      <Footer/>
    </>
  );
}


const services = [
  {
    title: "E-Commerce Solutions",
    description:
      "Our e-commerce solutions help businesses establish and grow their online presence. We support digital storefronts, payment integration, and seamless checkout processes to help merchants reach customers effectively.",
    icon: "/images/icon-service-1.svg",
    delay: "0s",
    link: "/ecommerce",
  },
  {
    title: "Holiday Packages",
    description:"We provide curated holiday packages designed to offer comfort, convenience, and memorable travel experiences. Customers can explore and book complete holiday plans through our platform with confidence.",
    icon: "/images/icon-service-2.svg",
    delay: "0.2s",
    link: "/holiday-packages",
  },
  {
    title: "Travel Services",
    description:"TechkGuru Digital offers travel services that enable customers to book travel-related services with ease. From ticket bookings to essential travel arrangements, our platform ensures a smooth and hassle-free booking experience.",
    icon: "/images/icon-service-3.svg",
    delay: "0.4s",
    link: "/travel",
  }
];