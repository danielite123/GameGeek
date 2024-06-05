import { useState, useRef } from "react";
import "./View.css";
import { Link } from "react-router-dom";
import NavHighlight from "./NavHighlight";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const View = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const renderPagination = () => {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${
              index === currentIndex ? "swiper-pagination-bullet-active" : ""
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    );
  };

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
        <div className="swipper-container">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            ref={swiperRef}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setCurrentIndex(swiper.realIndex);
            }}
            navigation={true}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display1.png" alt="" />
                  <p>
                    LOGITECH Gaming
                    <br />
                    Headset
                  </p>
                  <p>699,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display2.png" alt="" />
                  <p>
                    CHAIR Gaming
                    <br />
                    MGCPROFBL Gaming
                  </p>
                  <p>149,90 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display3.png" alt="" />
                  <p>
                    Mando Microsoft
                    <br />
                    Xbox Controller
                  </p>
                  <p>534,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display4.png" alt="" />
                  <p>
                    PC Gaming
                    <br />
                    NEOMEDI05 NEOPC
                  </p>
                  <p>699,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display1.png" alt="" />
                  <p>
                    LOGITECH Gaming
                    <br />
                    Headset
                  </p>
                  <p>699,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display2.png" alt="" />
                  <p>
                    CHAIR Gaming
                    <br />
                    MGCPROFBL Gaming
                  </p>
                  <p>149,90 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display3.png" alt="" />
                  <p>
                    Mando Microsoft
                    <br />
                    Xbox Controller
                  </p>
                  <p>534,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <div className="display-slide">
                  <img src="/assets/display4.png" alt="" />
                  <p>
                    PC Gaming
                    <br />
                    NEOMEDI05 NEOPC
                  </p>
                  <p>699,99 €</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-center items-center">
            <div className="mt-2">{renderPagination()}</div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-wrapper">
          <p>
            EVERYTHING YOU NEED IS <span>HERE</span>
          </p>
          <div className="services-box">
            <div className="support-service">
              <img src="/assets/Group 247.png" alt="" />
              <p>
                <span>24/7 support</span>
                <br />
                online consultation
              </p>
            </div>
            <div className="service-border"></div>
            <div className="delivery-service">
              <img src="/assets/vector-5.svg" alt="" />
              <p>
                <span>Free delivery</span> on
                <br />
                orders from 39$
              </p>
            </div>
            <div className="service-border"></div>
            <div className="refurnd-service">
              <img src="/assets/fibsshieldcheck.svg" alt="" />
              <p>
                <span>Easy Returns</span> and <span>30-day</span> money
                <br />
                back guaranty. <span>More information</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="framer-section">
        <div className="framer-wrapper">
          <div className="framer-title">
            <p>JUST</p>
            <p className="fd">FOR YOU</p>
          </div>
          <p className="framer-subtitle">GAMING EQUIPMENT</p>
        </div>
        <div className="framer-product-container">
          <div className="framer-product">
            <img src="/assets/framer1.png" alt="" />
            <p>TRY FIRST THE NEWEST</p>
            <button className="framerbtn">Shop</button>
          </div>
          <div className="framer-product">
            <img src="/assets/framer2.png" alt="" />
            <p>OPTIMIZE YOUR GAME CONTOL</p>
            <button className="framerbtn">Shop</button>
          </div>
        </div>
      </section>
      <section className="join-us">
        <div className="join-us-wrapper">
          <h1>
            MAKE YOUR
            <br />
            BEST DECISION - <span>JOIN US</span>
          </h1>
          <button>Join</button>
        </div>
      </section>
    </main>
  );
};

export default View;
