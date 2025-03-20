"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { CheckmarkIcon } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setLoading;
    }
  };
  useEffect(() => {
    if (user.email === "" || user.password === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);
  return (
    <div className="flex-col flex items-center justify-center h-screen  bg-blue-100">
      <h1 className="text-blue-900 text-3xl font-bold">Login Now!</h1>
      <div className="flex-col flex px-5  mt-6">
        <label className="text-black-500 " htmlFor="Email">
          Email
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          className="text-black-500 h-10 w-60 px-2 py-2 mt-2 border-2 border-black-500 rounded-lg focus:outline-none focus:border-blue-900"
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <label className="text-black-500  mt-5" htmlFor="Password">
          Password
          <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          className="text-black-500 w-60 h-10 mt-2 px-2 py-2 border-2 border-black-500 rounded-lg focus:outline-none focus:border-blue-900"
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <button
          disabled={buttonDisabled}
          onClick={handleLogin}
          className="p-2 mt-5 items-center justify-center border-2 h-10 border-blue-900 rounded-lg bg-blue-900 text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <Link
          className="text-blue-900 mt-2 mx-15 items-center justify-center text-1xl font-bold"
          href={"/signup"}
        >
          Visit SignUp Page
        </Link>
      </div>
    </div>
  );
};

export default Login;
