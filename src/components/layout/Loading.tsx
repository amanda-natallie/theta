import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        zIndex: 1000000,
        position: "fixed",
        backgroundColor: "white",
        opacity: 0.8,
        cursor: "not-allowed",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading type="spin" color="#7643FF" />
    </div>
  );
};

export default Loading;
