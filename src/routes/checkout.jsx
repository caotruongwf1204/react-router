import { useCart } from "../hooks/use-cart";
import './checkout.css'

export default function CheckOut() {
  const { items } = useCart();

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="total-price">
      <div className="shopping-cart">
        {items.map((item) => (
          <div key={item.id} className="checkout-item">         
              <h3>{item.title}</h3>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        
      </div>
      <h2>Total Price: ${calculateTotalPrice()}</h2>

      <div className="payment-info">
        <h3 className="payment-heading">Payment Information</h3>
        <form
          className="form-box"
          encType="text/plain"
          method="get"
          target="_blank"
        >
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input
              id="full-name"
              name="full-name"
              placeholder="Full name"
              required=""
              type="text"
            />
          </div>
          <div>
            <label htmlFor="credit-card-num">
              Card Number
              <span className="card-logos">
                <i className="card-logo fa-brands fa-cc-visa" />
                <i className="card-logo fa-brands fa-cc-amex" />
                <i className="card-logo fa-brands fa-cc-mastercard" />
                <i className="card-logo fa-brands fa-cc-discover" />{" "}
              </span>
            </label>
            <input
              id="credit-card-num"
              name="credit-card-num"
              placeholder="1111-2222-3333-4444"
              required=""
              type="text"
            />
          </div>
          <div>
            <p className="expires">Expires on:</p>
            <div className="card-experation">
              <label htmlFor="expiration-month">Month</label>
              <select id="expiration-month" name="expiration-month" required="">
                <option value="">Month:</option>
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">Decemeber</option>
              </select>
              <label className="expiration-year">Year</label>
              <select id="experation-year" name="experation-year" required="">
                <option value="">Year</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              placeholder={415}
              type="text"
              required=""
            />
            <a className="cvv-info" href="#">
              What is CVV?
            </a>
          </div>
          <button className="btn">
            <i className="fa-solid fa-lock" /> Book Securely
          </button>
        </form>
        <p className="footer-text">
          <i className="fa-solid fa-lock" />
          Your credit card infomration is encrypted
        </p>
      </div>
    </div>
  );
}
