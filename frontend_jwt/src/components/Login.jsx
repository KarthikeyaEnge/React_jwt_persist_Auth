import React, { useState } from "react";
import { useRef, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { axiosrequest } from "../apis/axiosrequest";
const Login = () => {
  const user = useRef("");
  const pass = useRef("");
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    user.current.focus();
  }, []);
  const { auth, setAuth } = useAuth();
  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    const data = {
      email: user.current.value,
      pass: pass.current.value,
    };
    try {
      const msg = await axiosrequest.post("/users/login", data);

      console.log(msg.data.Bearer);
      const accesstoken = msg.data.Bearer;
      setAuth({ accesstoken, user: user.current.value });
      user.current.value = "";
      pass.current.value = "";
    } catch (err) {
      console.log(err.message);
    }
    setIsloading(false);
  };

  return (
    <>
      {auth.accesstoken === undefined ? (
        <main className="flex flex-col min-h-screen bg-slate-800 items-center justify-center text-center">
          <img src="https://skillicons.dev/icons?i=react" alt="img" />
          <h1 className="text-xl text-slate-300">Login to your account</h1>
          <form
            action=""
            className="my-5 flex flex-col justify-center items-center"
          >
            <input
              type="Email"
              placeholder="email address"
              className="bg-slate-900 text-lg placeholder:text-slate-400 text-sky-500 p-2 rounded-t-xl w-80 border-x border-y border-slate-500  outline-none ring-0"
              required
              ref={user}
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-slate-900 text-lg placeholder:text-slate-400 text-sky-500 p-2 rounded-b-xl w-80 border-x border-y border-slate-500  outline-none ring-0"
              required
              ref={pass}
            />

            <input
              type="submit"
              value="Login"
              className=" rounded-xl text-lg text-slate-800 bg-sky-500 hover:bg-sky-400 text-center p-2 transition-all  w-80  mt-4 shadow-lg shadow-slate-900"
              onClick={(e) => handlesubmit(e)}
            />

            <h1 className="text-lg text-slate-400">or</h1>
            <Link to="/signup">
              <input
                type="button"
                value="Sign Up"
                className=" rounded-xl text-lg text-slate-800 bg-cyan-600 hover:bg-cyan-500 text-center p-2 transition-all  w-80 shadow-lg shadow-slate-900"
              />
            </Link>
          </form>
        </main>
      ) : isloading ? (
        <h1>Loading...</h1>
      ) : (
        <Navigate to="/info" />
      )}
    </>
  );
};

export default Login;
