import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>GameGeeK</h1>
        <p>Sign in with with your GG ID</p>
        <div className="input-box">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="input-box">
          <input type="text" id="password" name="password" required />
          <label htmlFor="password">Password</label>
        </div>
        <div className="link-container">
          <Link className="forgot-password" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <div className="btn-container">
          <button className="login-btn">Login</button>
        </div>
        <div className="divider">OR</div>
        <div className="social-login-container">
          <span className="social-login-text">Continue with:</span>
          <div className="social-login-buttons">
            <Link href="#" className="social-login-button">
              <img src="/assets/facebook-symbolsvg.svg" alt="Facebook" />
            </Link>
            <Link href="#" className="social-login-button">
              <img src="/assets/apple-logosvg.svg" alt="Apple" />
            </Link>
            <Link href="#" className="social-login-button">
              <img src="/assets/google-symbolsvg.svg" alt="Google" />
            </Link>
          </div>
        </div>
        <div className="create-container">
          <Link to="/register">
            <p>Don&apos;t have account? Create account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
