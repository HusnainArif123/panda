"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import HeaderItem from "./components/header";
import ImageSlider from "./components/imageSlider";
import RestaurantGrid from "./components/hero";
import Footer from "./components/footer";
import { Loader } from "lucide-react";

const Profile = () => {
  const [loading, setLoading] = React.useState(false);
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
