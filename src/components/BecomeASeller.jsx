import BecomeASellerForm from "./BecomeASellerForm";

const BecomeASeller = () => {
  return (
    <section className="account py-80">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xl-6 mx-auto">
            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
              <BecomeASellerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeASeller;
