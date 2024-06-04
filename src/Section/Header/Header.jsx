import "./Header.css";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <header>
      <div className="card space">
        <p style={{ fontFamily: "NicoMoji", fontSize: "18px" }}>GG</p>
        <div className="phone">
          <PhoneCallbackIcon fontSize="small" sx={{ color: "white" }} />
          <p>+4904-049-950</p>
        </div>
      </div>
      <div className="card space2">
        <p>Get 50% Off on the Selected items </p>
        <div className="header-border"></div>
        <p>Shop now</p>
      </div>
      <div className="card space3">
        <div className="language">
          <ArrowDropDownIcon sx={{ color: "white" }} />
          <p>English</p>
          <br />
          <img src="/assets/flag.png" alt="" />
        </div>
        <div className="location">
          <LanguageIcon fontSize="small" sx={{ color: "white" }} />
          <p>Location</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
