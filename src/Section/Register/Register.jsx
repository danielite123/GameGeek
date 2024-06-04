import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>GameGeeK</h1>
        <p>Sign in with with your GG ID</p>
        <div className="input-box">
          <input type="text" id="firstname" name="firstname" required />
          <label htmlFor="firstname">Firstname</label>
        </div>
        <div className="input-box">
          <input type="text" id="lastname" name="lastname" required />
          <label htmlFor="lastname">Lastname</label>
        </div>
        <div className="input-box">
          <input type="text" id="dob" name="dob" required />
          <label htmlFor="dob">Month/Year of Birth</label>
        </div>
        <div className="input-box">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-box">
          <input type="text" id="password" name="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="btn-container">
          <button className="register-btn">Sign Up</button>
        </div>
        <div className="divider">OR</div>
        <div className="social-register-container">
          <span className="social-register-text">Continue with:</span>
          <div className="social-register-buttons">
            <Link href="#" className="social-register-button">
              <img src="/assets/facebook-symbolsvg.svg" alt="Facebook" />
            </Link>
            <Link href="#" className="social-register-button">
              <img src="/assets/apple-logosvg.svg" alt="Apple" />
            </Link>
            <Link href="#" className="social-register-button">
              <img src="/assets/google-symbolsvg.svg" alt="Google" />
            </Link>
          </div>
        </div>
        <div className="create-container">
          <Link className="login-link" to="/login">
            Don&apos;t have account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
