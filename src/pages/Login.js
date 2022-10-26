import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen bg-white h-screen absolute top-0 text-black z-50">
      Login
      <form>
        <div>
          <input placeholder="Enter Name"/>
          <input placeholder="Enter Name"/>
        </div>
        <button onClick={() => navigate("/home")}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
