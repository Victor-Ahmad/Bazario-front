import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import VendorPage from "./pages/VendorPage";
import VendorTwoPage from "./pages/VendorTwoPage";
import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import BecomeASellerPage from "./pages/BecomeASellerPage";
import WishlistPage from "./pages/WishlistPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route
          exact
          path="/product-details"
          element={<ProductDetailsPageOne />}
        />
        <Route
          exact
          path="/product-details-two"
          element={<ProductDetailsPageTwo />}
        />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/become-seller" element={<BecomeSellerPage />} />
        <Route exact path="/become-a-seller" element={<BecomeASellerPage />} />
        <Route exact path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/vendor" element={<VendorPage />} />
        <Route exact path="/services" element={<VendorTwoPage />} />

        <Route
          exact
          path="/vendor-two-details"
          element={<VendorTwoDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
