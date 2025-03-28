"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import HeaderItem from "../components/header";
import RestaurantGrid from "../components/hero";
import ImageSlider from "../components/imageSlider";
import Footer from "../components/footer";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "../store/WebSiteData";
import { RootState } from "../store/store";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState<any>({});
  const [webSiteData, setWebSiteData] = React.useState<any>();
  const websiteDetails = useSelector((state: RootState) => state.restaurant);

  const handleWebSiteDetails = async () => {
    try {
      setLoading(true);

      const respData = await axios.get("/api/websiteDetail");
      const websiteArray = respData?.data?.data;

      if (Array.isArray(websiteArray) && websiteArray.length > 0) {
        dispatch(setRestaurants(websiteArray));
        localStorage.setItem("websiteData", JSON.stringify(websiteArray[0]));
        setWebSiteData(websiteArray[0]);
      } else {
        toast.error("No website data found");
      }

      console.log("Website Data:", websiteArray);
    } catch (error: any) {
      console.error("Error fetching website details:", error);
      toast.error(
        error?.response?.data?.message || "Failed to fetch website details"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleWebSiteDetails();
  }, []);
  return (
    <div>
      <HeaderItem phoneNo={websiteDetails?.phoneNo} />
      <ImageSlider />
      <RestaurantGrid />
      <Footer
        address={websiteDetails?.address}
        phoneNo={websiteDetails?.phoneNo}
        email={websiteDetails?.email}
      />
      {loading && <Loader />}
    </div>
  );
};
export default Profile;
