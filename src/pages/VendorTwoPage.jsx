import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../removables/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import VendorTwo from "../components/VendorTwo";
import ShippingOne from "../components/ShippingOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import HeaderOne from "../components/HeaderOne";

const VendorTwoPage = () => {
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
      <Breadcrumb title={"All Service"} />

      {/* VendorTwo */}
      <VendorTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      {/* <FooterTwo /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorTwoPage;
