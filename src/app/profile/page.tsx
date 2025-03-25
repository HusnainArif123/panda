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

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState<any>({});
  const [webSiteData, setWebSiteData] = React.useState<any>();

  const handleWebSiteDetails = async () => {
    try {
      setLoading(true);
      const respData = await axios.get("/api/websiteDetail");
      setWebSiteData(respData?.data.data[0]);
      console.log(respData, "resp data");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleWebSiteDetails();
  }, []);
  return (
    <div>
      <HeaderItem phoneNo={webSiteData?.phoneNo} />
      <ImageSlider />
      <RestaurantGrid />
      <Footer
        address={webSiteData?.address}
        phoneNo={webSiteData?.phoneNo}
        email={webSiteData?.email}
      />
      {loading && <Loader />}
    </div>
  );
};
export default Profile;
