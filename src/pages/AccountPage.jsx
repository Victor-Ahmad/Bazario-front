import React from "react";
import Preloader from "../helper/Preloader";

import HeaderTwo from "../removables/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Account from "../components/Account";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";

const AccountPage = () => {
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
      <Breadcrumb title={"Account"} />

      {/* Account */}
      <Account />

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      {/* <FooterOne /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default AccountPage;
