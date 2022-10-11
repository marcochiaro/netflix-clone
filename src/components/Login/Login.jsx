import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import "./Login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login__button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="login__gradient" />
        <div className="login__body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3 className="login__email-title">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="login__button-getStarted"
                    onClick={handleSignIn}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
