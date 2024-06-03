import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <Link className="flogo">
              Game
              <br />
              Geek
            </Link>
            <p>
              Start your game
              <br />
              with the best
            </p>
          </div>
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>
                <Link className="flink" href="#">
                  Gift Card
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Order Pickup
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Account Signup
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-help">
            <h4>Help</h4>
            <ul>
              <li>
                <Link className="flink" href="#">
                  ShopCart Help
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Returns
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Track Orders
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Feedback
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Security & Fraud
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-about">
            <h4>About us</h4>
            <ul>
              <li>
                <Link className="flink" href="#">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Help
                </Link>
              </li>
              <li>
                <Link className="flink" href="#">
                  Press Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social">
          <Link>
            <img src="/assets/layer-1.svg" alt="" />
          </Link>
          <Link>
            <img src="/assets/frame.svg" alt="" />
          </Link>
          <Link>
            <img src="/assets/layer-1-1.svg" alt="" />
          </Link>
          <Link>
            <img src="/assets//frame-1.svg" alt="" />
          </Link>
        </div>
        <div className="line"></div>
        <div className="footer-bottom">
          <p>
            <span>GG</span>
          </p>
          <p>HelpCenter</p>
          <p>Privacy & Policy</p>
          <p>Terms of Service</p>
          <p>
            All rights reserved by <span>GameGeek</span> | 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
