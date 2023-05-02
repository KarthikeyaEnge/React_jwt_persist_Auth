import React from "react";
import { axiosrequest } from "../apis/axiosrequest";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Info = () => {
  const { auth, setAuth } = useAuth();
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    const getdata = async () => {
      const msg = await axiosrequest.post("/info", {
        token: auth.accesstoken,
      });
      setAuth({ auth, user: msg.data.user });
    };
    console.log(auth.user);
    auth.accesstoken ? getdata() : setIsloading(false);
    setIsloading(false);
  }, []);

  const logout = async () => {
    const data = await axiosrequest.get("/logout");
    setAuth({});
  };

  return (
    <main className="bg-slate-900 min-h-screen flex flex-col justify-center items-center">
      {isloading ? (
        <h1>Loading...</h1>
      ) : auth?.user ? (
        <section className="flex flex-col justify-center items-center">
          <h1 className="bg-slate-950 px-4 py-2 text-slate-300 text-xl rounded-lg border-2 border-sky-400">
            {auth?.user}
          </h1>
          <button
            className="bg-sky-600 px-4 py-2 m-2 text-slate-950 rounded-lg border-2 border-black"
            onClick={logout}
          >
            Logout
          </button>
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};

export default Info;
