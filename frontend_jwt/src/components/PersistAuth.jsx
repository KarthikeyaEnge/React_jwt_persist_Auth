import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/Authprovider";
import { axiosrequest } from "../apis/axiosrequest";

const PersistAuth = ({ children }) => {
  const [isloading, setIsloading] = useState(false);

  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setIsloading(true);
    console.log(auth.accesstoken);
    const refreshauth = async () => {
      try {
        const msg = await axiosrequest.get("/refresh");
        const accesstoken = msg.data.accesstoken;
        setAuth({ accesstoken });
      } catch (err) {
        console.log(err.message);
      }
    };

    !auth?.accesstoken ? refreshauth() : setIsloading(false);
    setIsloading(false);
  }, []);

  return (
    <>
      {isloading ? (
        <h1>Loading...</h1>
      ) : !auth?.accesstoken ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </>
  );
};

export default PersistAuth;
