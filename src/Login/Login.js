import React from "react";
import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const {signInUsingGoogle, signInUsingGithub} = useAuth();
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={signInUsingGoogle}>google signin</button>
      <br />
      <br />
      {/* github signin button */}
      <button onClick={signInUsingGithub}>Github signin</button>
      <br />
      <br />
      <Link to="/register">New User</Link>
    </div>
  );
};

export default Login;
