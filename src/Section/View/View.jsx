import "./View.css";
import { Link } from "react-router-dom";
import NavHighlight from "./NavHighlight";

const View = () => {
  return (
    <main>
      <section className="news-section">
        <p className="news-title">DISCOVER NEWS AND INNOVATIONS</p>
        <div className="news-card">
          <div>
            <img src="/assets/news1.png" alt="" />
            <h4>ALWAYS IN THE GAME</h4>
            <p>
              Stay ahead of the latest and greatest gaming
              <br /> tech, featuring new releases,exclusive deals,
              <br />
              and exciting pre-orders.
            </p>
            <Link className="news-link" to="">
              See More{" "}
            </Link>
          </div>
          <div>
            <img src="/assets/news2.png" alt="" />
            <h4>ENHANCE YOUR EXPERIENCE</h4>
            <p>
              Upgrade Your World by Elevating your setup
              <br /> and personalize your space with our collection
              <br /> of stylish and functional gaming accessories.
            </p>
            <Link className="news-link" to="">
              See More
            </Link>
          </div>
          <div>
            <img src="/assets/news3.png" alt="" />
            <h4>COMMAND THE BATTLE</h4>
            <p>
              Take control with our diverse range of
              <br /> gaming keyboards,featuring mechanical
              <br />
              switches for tactile feedback etc.
            </p>
            <Link className="news-link" to="">
              See More
            </Link>
          </div>
        </div>
      </section>
      <section className="display-section">
        <div className="wrapper">
          <div className="display-nav-container">
            <ul className="display-nav">
              <li className="display-nav-item active" data-tab="trending">
                TRENDING
              </li>
              <li className="display-nav-item" data-tab="new">
                NEW
              </li>
              <li className="display-nav-item" data-tab="popular">
                POPULAR
              </li>
            </ul>
            <div className="highlight"></div>
          </div>
          <NavHighlight />
        </div>
        <div>
          
        </div>
      </section>
    </main>
  );
};

export default View;
