import React from "react";
import { AuthContext } from "../context/Authprovider";
import { axiosrequest } from "../apis/axiosrequest";
import { useState, useContext, useEffect } from "react";
const Info = () => {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const getdata = async () => {
      const msg = await axiosrequest.get("/info");
      setAuth((prev) => {
        const user = msg.data.user;
        return {
          ...prev,
          user: user,
        };
      });
    };
    getdata();
  }, []);

  return <main>{auth?.user}</main>;
};

export default Info;
