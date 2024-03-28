import React from "react";
import img1 from "./offline.png";

export default function OfflineReact() {
  return (
    <>
      <div className="d-flex  vh-100 justify-content-center align-items-center ">
        <div>
          <img
            src={img1}
            alt="You Are Offline"
            className=" w-100 px-2 m-auto"
          />
        </div>
      </div>
    </>
  );
}
