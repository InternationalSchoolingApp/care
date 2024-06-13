import React from "react";

const FallbackLoading = () => {
  return (
    <>
      <div className="h-[70svh] r-w flex justify-center items-center gap-5 ">
        <h3 className="text-blue-700 text-2xl mt-2 font-semibold">
          INTERNATIONAL SCHOOLING
        </h3>
        <span className="loading loading-spinner loading-md text-blue-700"></span>
      </div>
    </>
  );
};

export default FallbackLoading;
