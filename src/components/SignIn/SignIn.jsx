import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef } from "react";
import { auth } from "../../firebase/firebase";
import "./SignIn.css";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log(errorCode, errorMessage);
    }
  };
  const signIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      console.log(authUser);
    } catch (error) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.log(errorCode, errorMessage);
    }
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signIn__gray">New to Netflix?</span>{" "}
          <span className="signIn__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
