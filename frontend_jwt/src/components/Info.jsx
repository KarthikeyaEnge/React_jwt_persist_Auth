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

  return (
    <main>
      {isloading ? (
        <h1>Loading...</h1>
      ) : auth?.user ? (
        <h1>{auth?.user}</h1>
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};

export default Info;
