import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../removables/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import CartSection from "../components/CartSection";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../components/HeaderOne";

const CartPage = () => {
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
      <Breadcrumb title={"Cart"} />

      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          fontSize: "1.7rem",
          background: "#fff",

          margin: "32px auto",
        }}
      >
        🛒 Cart feature coming soon!
      </div>
      {/* CartSection */}
      {/* <CartSection /> */}

      {/* ShippingOne */}
      {/* <ShippingOne /> */}

      {/* FooterTwo */}
      {/* <FooterTwo /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default CartPage;
