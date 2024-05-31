import "./Banner.css";
import CheckIcon from '@mui/icons-material/Check';

const Banner = () => {
  return (
    <div className="banner">
        <div className="overlay">
            <h1>
              START YOUR GAME 
              WITH THE BEST
            </h1>
            <p>
              We&apos;ve Got Everything
              <br />
              You Need for Gaming Supremacy
            </p>
            <button>Shop</button>
            <div className="info">
                <CheckIcon fontSize="small" sx={{color: "white", fontWeight: 'bold'}}/>
              <p>
                MORE THAN <span>15+</span> POPULAR
                <br /> PROFESSIONAL
                <br />
                <span>BRANDS</span>
              </p>
            </div>
            <div className="info">
            <CheckIcon fontSize="small" sx={{color: "white", fontWeight: 'bold'}}/>
              <p><span>2500+ </span> ITEMS</p>
            </div>
        </div>
    </div>
  );
};

export default Banner;
