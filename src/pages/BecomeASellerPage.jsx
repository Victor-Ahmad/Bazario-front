import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import WhyBecomeSeller from "../components/WhyBecomeSeller";
import CounterSection from "../components/CounterSection";
import StepsSection from "../components/StepsSection";
import TestimonialOne from "../components/TestimonialOne";
import ShippingOne from "../components/ShippingOne";
import BottomFooter from "../components/BottomFooter";
import HeaderOne from "../components/HeaderOne";
import BecomeASeller from "../components/BecomeASeller";

const BecomeASellerPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FE8C07" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Become A Seller"} />

      {/* BreadcrumbImage */}
      {/* <BreadcrumbImage /> */}

      <BecomeASeller />
      {/* WhyBecomeSeller */}
      <WhyBecomeSeller />

      {/* CounterSection */}
      <CounterSection />

      {/* StepsSection */}
      <StepsSection />

      {/* TestimonialOne */}
      <section className="pb-120">
        <TestimonialOne />
      </section>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      {/* <FooterTwo /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BecomeASellerPage;
