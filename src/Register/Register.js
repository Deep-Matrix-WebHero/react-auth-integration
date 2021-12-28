import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please register</h2>
      <form>
        <input type="email" />
        <br />
        <input type="password" />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <Link to="/login">Already Registered?</Link>
      </form>
    </div>
  );
};

export default Register;
