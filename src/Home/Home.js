import React from "react";
import useAuth from "../Hooks/useAuth";

const Home = () => {
  const {user} = useAuth();
  return (
    <div>
      <h2>this is home</h2>
      <h4>user name:{user.displayName}</h4>
    </div>
  );
};

export default Home;
