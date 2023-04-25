import React from "react";
import { AuthContext } from "../context/Authprovider";
import { axiosrequest } from "../apis/axiosrequest";
import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
const Info = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [isloading, setIsloading] = useState(false);
  useEffect(async () => {
    setIsloading(true);
    const getdata = async () => {
      const msg = await axiosrequest.get("/info", {
        token: auth.accesstoken,
      });
      setAuth({ auth, user: msg.data.user });
    };
    console.log(auth.user);
    await getdata();
    setIsloading(false);
  }, []);

  return (
    <main>
      {auth.user !== undefined ? (
        isloading ? (
          <h1>Loading....</h1>
        ) : (
          <h1>{auth?.user}</h1>
        )
      ) : (
        <Navigate to="/login" />
      )}
    </main>
  );
};

export default Info;
