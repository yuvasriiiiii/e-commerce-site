import React from "react";
import { HashLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div>
        <HashLoader color="#5e9f7e"/>
      </div>
      <div>Loading...</div>
    </div>
  );
}

export default LoadingSpinner;
