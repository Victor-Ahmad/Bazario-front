import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../removables/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import VendorTwoDetails from "../components/VendorTwoDetails";
import ShippingOne from "../components/ShippingOne";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";

const VendorTwoDetailsPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FE8C07" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Vendor Details"} />

      {/* VendorTwoDetails */}
      <VendorTwoDetails />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorTwoDetailsPage;
