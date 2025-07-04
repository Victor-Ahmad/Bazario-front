import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import ProductDetailsOne from "../components/ProductDetailsOne";
import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from "./../components/BreadcrumbTwo";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetailsPageOne = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FE8C07" />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Product Details"} />

      {/* ProductDetailsOne */}
      <ProductDetailsOne />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      {/* <FooterOne /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ProductDetailsPageOne;
