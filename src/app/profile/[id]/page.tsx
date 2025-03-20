import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1 className="text-4xl">
        Profile Page
        <span className="p-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </h1>
    </div>
  );
};
export default UserProfile;
