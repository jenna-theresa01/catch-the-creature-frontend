import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";
import styles from "../styles/register.module.css";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });
//------------------------------------------------------------------------------------------------------------------------------
function RegisterPage() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    email: "",
    username: "",
  });
  //------------------------------------------------------------------------------------------------------------------------------
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  //------------------------------------------------------------------------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const resp = await AuthService.register(user);

      if (resp.data.access_token) {
        //let data = jwtDecode(resp.access_token);
        // resp.data.access_token resp.data.user_id
        let data = resp.data;
        await dispatch({
          type: "SET_USER",
          payload: data,
        });
        console.log("Login success");
        router.push("/");
      } else {
        console.log("Login failed");
        dispatch({ type: "LOGOUT_USER" });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }
  //------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex items-center justify-center min-h-screen bg-animal_crossing_sea mt-24">
      <div className="flex flex-col min-h-screen items-center">
        <div className="bg-animal_crossing_sky border-4 p-8 rounded-lg shadow-2xl mt-20">
          <NavBar />
          <h1 className={`text-4xl mb-4 text-center ${font.className}`}>
            Register
          </h1>
          <div className="flex">
            <form className="mx-auto" onSubmit={handleRegister}>
              <div className="flex justify-between m-2 items-center space-x-2">
                <label htmlFor="email">Email:</label>
                <br></br>
                <input
                  className="border rounded-lg"
                  type="text"
                  id="email"
                  required
                  onChange={(e) => {
                    let olduser = user;
                    olduser.email = e.target.value;
                    olduser.username = e.target.value;
                    setUser(olduser);
                  }}
                />
              </div>
              <div className="flex justify-between m-2 items-center space-x-2">
                <label htmlFor="password">Password:</label>
                <br></br>
                <input
                  className="border rounded-lg"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="flex justify-between m-2 items-center space-x-2">
                <label htmlFor="passwordConf">Confirm Password:</label>
                <br></br>
                <input
                  className="border rounded-lg"
                  type="password"
                  id="passwordConf"
                  required
                  onChange={(e) => handleChange("passwordConf", e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="border p-2 bg-animal_crossing_brown hover:bg-animal_crossing_tan font-bold py-2 px-4 rounded-lg shadow-lg"
                  type="submit"
                  value="Register!"
                  disabled={
                    user.password &&
                    user.password.length >= 8 &&
                    user.password === user.passwordConf &&
                    user.email
                      ? false
                      : true
                  }
                />
                <div className="ml-4 border p-2 bg-animal_crossing_brown hover:bg-animal_crossing_tan font-bold py-2 px-4 rounded-lg shadow-lg">
                  <Link href="/login">
                    Login Here
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
