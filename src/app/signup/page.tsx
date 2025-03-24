"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { CheckmarkIcon } from "react-hot-toast";
import DragonIcon from "../assets/svgs/dragon";

const signup = () => {
  const router = useRouter();

  const [user, setUser] = useState({ userName: "", email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<any>([]);

  const handleSignup = async () => {
    try {
      setLoading(true);
      console.log(user, "user detail signup");
      const response = await axios.post("/api/signup", user);
      router.push("/login");
      console.log("Data:", response.data);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading;
    }
  };
  const handleLoginData = async () => {
    try {
      const response = await axios.get("/api/loginData");
      console.log(response, "resp");
      setLoginData(response.data.data[0]);
      console.log(loginData, "loginData");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    handleLoginData();

    if (user.email === "" || user.password === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);
  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      {/* Left Section - Title & Description */}
      <div className="w-1/2 p-8 text-white flex flex-col justify-center items-center border-r-4 border-white bg-green-500 rounded-l-lg">
        <div className="flex flex-row  gap-2  p-5">
          <h1 className="text-4xl font-bold">{loginData.title}</h1>
          <DragonIcon width={50} height={40} />
        </div>
        <p className="text-lg mt-4 text-center font-semibold text-white-200 tracking-wide">
          {loginData.description}
        </p>
      </div>
      <div className="w-1/4 m-20 p-8 bg-white rounded-r-lg shadow-lg flex flex-col items-center">
        <h1 className="text-green-700 text-3xl font-bold mb-6">Signup Now!</h1>
        <div className="w-64 flex flex-col">
          <label className="text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-green-600"
            type="text"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />

          <label className="text-gray-700 font-medium mt-4">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="border-2 border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-green-600"
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />

          <button
            disabled={buttonDisabled}
            onClick={handleSignup}
            className={`mt-5 py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 w-full ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500"
            }`}
          >
            Signup
          </button>

          <Link
            className="text-green-700 mt-4 text-center font-medium"
            href={"/login"}
          >
            Visit Login Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
