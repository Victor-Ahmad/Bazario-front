import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import VendorsList from "../components/VendorsList";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import BottomFooter from "../components/BottomFooter";
import Breadcrumb from "../components/Breadcrumb";

const VendorPage = () => {
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

      {/* BreadcrumbThree */}
      <Breadcrumb title={"Vendor List"} />

      {/* VendorsList */}
      <VendorsList />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      {/* <FooterOne /> */}

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorPage;
