import React from "react";

const SectionTwo = () => {
  return (
    <section>
      <div className="price-wrapper">
        <div className="d-flex justify-content-between mb-3">
          <div>Subtotal</div>
          <div>
            <span>&#8358;</span>2,497.00
          </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <div>Estimated Tax</div>
          <div>
            <span>&#8358;</span>119.64
          </div>
        </div>

        <div className="d-flex justify-content-between  mb-5">
          <div>
            Promotional Code: <span className="promo-code">Z4KXLM9A</span>
          </div>
          <div>
            <span>&#8358;-</span>60.00
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
