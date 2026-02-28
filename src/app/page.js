 "use client"
 import { useEffect } from "react";
import AboutUs from "./component/AboutUs";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Preloader from "./component/Preloader";
// import HeroSlider from "./component/HeroSlider";
import OurServices from "./component/OurServices";
import WhyChooseUs from "./component/WhyChooseUs";
import OurFeature from "./component/OurFeature";
import FactCounter from "./component/FactCounter";
import WhatWeDo from "./component/WhatWeDo";
import HowItWork from "./component/HowItWork";
import Footer from "./component/Footer";
import FaqSection from "./component/FaqSection";

export default function Home() {
   useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);
  return (
    <>
      <Preloader/>
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <WhyChooseUs/>
      <OurFeature/>
      <FactCounter/>
      <WhatWeDo/>
      <HowItWork/>
      <FaqSection/>
      <Footer/>
    </>
  );
}
