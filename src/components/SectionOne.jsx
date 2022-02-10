import React from "react";
import Cleave from "cleave.js/react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Visa from "../assets/images/visa.png";
import Paypal from "../assets/images/paypal.png";
import Discover from "../assets/images/discover.png";

const SectionOne = () => {
  const onChange = (event) => {
    // formatted pretty value
    console.log(event.target.value);

    // raw value
    console.log(event.target.rawValue);
  };
  return (
    <section>
      {/* <div className="container"> */}
      <div className="row gap-lg-0 gap-5">
        <div className="col-lg">
          <h3>Payment Information</h3>
          <p className="card-sub-header mb-4">Choose your method of payment</p>

          <div className="atm-card d-grid gap-2">
            <div className="atm-card-text">CARD NUMBER</div>
            <div className="d-flex gap-1">
              <span>4324</span>
              <span>5433</span>
              <span>9382</span>
              <span>1030</span>
            </div>

            <div className="d-flex align-items-center gap-1">
              {/* <div className="paywave"></div> */}
              <div className="atm-card-chip"></div>
            </div>

            <div className="atm-card-text">EXPIRATION DATE</div>
            <div>03/24</div>
            <div className="d-flex justify-content-between">
              <div className="atm-card-text">John Doe</div>
              <div className="mastercard-icon"></div>
            </div>
          </div>
        </div>
        <div className="col-lg">
          <div className="d-flex justify-content-end gap-5 mb-3">
            <img className="brand-img" src={Visa} alt="visa logo" />
            <img className="brand-img" src={Discover} alt="discover logo" />
            <img className="paypal-img" src={Paypal} alt="paypal logo" />
          </div>
          <form>
            <div className="form-container">
              <div>
                <label>Credit Card Number</label>
                <Cleave
                  className="card-input"
                  placeholder="Enter your credit card number"
                  options={{ creditCard: true }}
                  onChange={onChange}
                />
              </div>
              <div>
                <label>Expiration Date</label>
                <Cleave
                  className="card-input"
                  placeholder="13/24"
                  options={{ date: true, datePattern: ["m", "y"] }}
                />
              </div>
              <div>
                <label>Security Code</label>
                <input className="card-input" type="number" max="3" />
              </div>
              <div>
                <label>Postal Code</label>
                <input className="card-input" type="number" />
              </div>
            </div>
            <div className="mt-3">
              <FormControlLabel
                value="Use this card for next time purchase"
                control={<Radio />}
                label="Use this card for next time purchase"
              />
            </div>

            <button className="form-btn mt-3" type="submit">
              Add card
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default SectionOne;
