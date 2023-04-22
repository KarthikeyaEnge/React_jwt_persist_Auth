import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center text-3xl">
      <div className="flex flex-row justify-evenly w-full items-center m-2">
        <h1 className="text-3xl font-medium">HOME</h1>
        <Link to="/login">
          <button className="rounded-xl bg-sky-600 text-slate-200 p-2">
            Signin
          </button>
        </Link>
      </div>
      <img src="https://source.unsplash.com/1080x640/?nature" alt="JohnWick" />
    </div>
  );
};

export default Home;
