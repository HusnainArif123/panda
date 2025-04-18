"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DragonIcon from "../assets/svgs/dragon";
import Loader from "../components/Loader";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState<any>([]);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/login", user);
      router.push("/profile");

      console.log("Data:", response.data);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/loginData");
      setLoginData(response.data.data[0]);
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
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
    <div
      style={{
        backgroundImage:
          "url('https://as2.ftcdn.net/v2/jpg/01/35/62/89/1000_F_135628942_wAZhAFbDfQpTI533KoCSG3Vq9YfuSA8F.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center h-screen"
    >
      <Toaster />
      {/* Left Section - Title & Description */}
      <div className="w-1/2 p-8 text-white flex flex-col justify-center items-center border-r-4 border-white bg-green-400 rounded-l-lg">
        <div className="flex flex-row  gap-2  p-5">
          <h1 className="text-4xl font-bold">{loginData.title}</h1>
          <DragonIcon width={50} height={40} />
        </div>
        <p className="text-lg mt-4 text-center font-semibold text-white-200 tracking-wide">
          {loginData.description}
        </p>
      </div>
      {/* Right Section - Login Form */}
      <div className="w-1/4 m-20 p-8 bg-green-200 rounded-r-lg shadow-lg flex flex-col items-center">
        <h1 className="text-green-800 text-3xl font-bold mb-6">Login Now!</h1>
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
            onClick={handleLogin}
            className={`mt-5 py-2 px-4 text-white font-semibold rounded-lg transition-all duration-300 w-full ${
              buttonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500"
            }`}
          >
            Login
          </button>

          <Link
            className="text-green-700 mt-4 text-center font-medium"
            href={"/signup"}
          >
            Visit Signup Page
          </Link>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
