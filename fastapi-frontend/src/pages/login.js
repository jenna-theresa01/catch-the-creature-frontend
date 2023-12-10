import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import styles from "../styles/home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import { Permanent_Marker } from "next/font/google";

const font = Permanent_Marker({ subsets: ["latin"], weight: "400" });

//------------------------------------------------------------------------------------------------------------------------------
function LoginPage() {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //------------------------------------------------------------------------------------------------------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    const username = email;
    AuthService.login(username, password)
      .then(async (resp) => {
        if (resp != undefined) {
          if (resp.access_token) {
            //let data = jwtDecode(resp.access_token);
            let data = resp;
            // resp.access_token and resp.user_id
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
        }
      })
      .catch((error) => {
        // Handle the error here
        console.error("An error occurred:", error);
        // Optionally, dispatch a logout or error action
        dispatch({ type: "LOGOUT_USER" });
      })
      .finally(() => {
        // Code to run regardless of success or failure
        console.log("Login request completed");
      });
  };
  //------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex items-center justify-center min-h-screen bg-animal_crossing_sea mt-24">
      <div className="flex flex-col min-h-screen items-center">
        <div className="bg-animal_crossing_sky border-4 p-8 rounded-lg shadow-2xl mt-20">
          <NavBar />
          {/* <div className="border-4 border-animal_crossing_brown p-8 rounded-lg shadow-lg mt-10"> */}
          <h1 className={`text-4xl mb-4 text-center ${font.className}`}>
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="text-lg font-semibold">
                Email:
              </label>
              <input
                className="border rounded-lg p-2 w-full"
                type="text"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pass" className="text-lg font-semibold">
                Password:
              </label>
              <input
                className="border rounded-lg p-2 w-full"
                type="password"
                id="pass"
                name="password"
                minLength="8"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <input
                className="border p-2 bg-animal_crossing_brown hover:bg-animal_crossing_tan font-bold py-2 px-4 rounded-lg shadow-lg"
                type="submit"
                value="Sign in"
              />
            </div>
          </form>
          <div className="mt-4 text-center border p-2 bg-animal_crossing_brown hover:bg-animal_crossing_tan font-bold py-2 px-4 rounded-lg shadow-lg">
            <Link href="/register">Register Here</Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
