"use client";
import { useEffect } from "react";
import AboutUs from "../component/AboutUs";
import CompanyOverview from "../component/CompanyOverview";
import Footer from "../component/Footer";
import Header from "../component/Header";
import OurApproach from "../component/OurApproach";
import PageHeader from "../component/PageHeader";
import TeamSection from "../component/TeamSection";
import WhyChooseUs from "../component/WhyChooseUs";
import Preloader from "../component/Preloader";

export default function AboutPage() {
  useEffect(() => {
      if (window.WOW) {
        new window.WOW().init();
      }
    }, []);
  return (
    <>
    <Preloader/>
    <Header/>
      <PageHeader title="About Us" breadcrumb="about us" />
      <AboutUs/>
      <OurApproach/>
      <WhyChooseUs/>
      <CompanyOverview/>
      <TeamSection/>
      <Footer/>
    </>
  );
}
