import React from "react";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/Authprovider";
import { axiosrequest } from "../apis/axiosrequest";
import { Outlet } from "react-router-dom";
const PersistAuth = () => {
  const [isloading, setIsloading] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setIsloading(true);
    console.log(auth.accesstoken);
    const refreshauth = async () => {
      try {
        const msg = await axiosrequest.get("/users/refresh");
        const accesstoken = msg.data.accesstoken;
        setAuth({ accesstoken });
      } catch (err) {
        console.log(err.message);
      }
    };

    auth.accesstoken === undefined ? refreshauth() : setIsloading(false);
    setIsloading(false);
  }, []);

  return <>{isloading ? <h1>Loading...</h1> : <Outlet />}</>;
};

export default PersistAuth;
