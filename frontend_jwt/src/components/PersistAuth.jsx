import React from "react";
import { useEffect, useContext, useState } from "react";
import { axiosrequest } from "../apis/axiosrequest";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const PersistAuth = () => {
  const [isloading, setIsloading] = useState(true);

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    setIsloading(true);
    const refreshauth = async () => {
      try {
        const msg = await axiosrequest.get("/users/refresh");
        const accesstoken = msg.data.accesstoken;
        setAuth({ accesstoken });
      } catch (err) {
        console.log(err.message);
      }
    };

    const verify = async () => {
      try {
        const data = {
          token: auth.accesstoken,
        };
        const msg = await axiosrequest.post("/verifyjwt", data);

        console.log(msg);
      } catch (err) {
        console.log(err.message);
      }
    };

    !auth?.accesstoken ? refreshauth() : verify();
    setIsloading(false);
  }, []);

  return <>{isloading ? <h1>Loading...</h1> : <Outlet />}</>;
};

export default PersistAuth;
