import React from "react";
import Logo from "./icon/Logo";
import Cart from "./icon/Cart";
function header() {
  return (
    <div
      style={{
        position: "absolute",
        width: "1080px",
        height: "27px",
        left: "100px",
        top: "47px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Logo />
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "21px",
          /* identical to box height */

          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          textTransform: "capitalize",
          marginLeft: "16%",
          color: "#333333",
        }}
      >
        <div>Breakfast</div>
        <div className="mx-6">Lunch</div>
        <div>Dinner</div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "22px",
          left: "1100px",
          top: "8px",
        }}
      >
        <Cart />
      </div>
    </div>
  );
}

export default header;
