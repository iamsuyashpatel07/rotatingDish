import Header from "./component/header";
import ThirtyTwo from "./component/icon/thirtyTwo";
import "./App.css";
import Arrow from "./component/icon/Arrow";
import Image from "./component/icon/Image.svg";
import Image1 from "./component/icon/image1.svg";
import Image2 from "./component/icon/image2.svg";
import Image3 from "./component/icon/image3.svg";
import Image4 from "./component/icon/image4.svg";
import Image5 from "./component/icon/image5.svg";
function App() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "1177px",
          height: "1177px",
          left: "283px",
          top: "-645px",
          background: "#FFEEDE",
          borderRadius: "50%",
        }}
      ></div>
      <Header />
      <div
        style={{
          position: "absolute",
          width: "81px",
          height: "66px",
          left: "100px",
          top: "286px",

          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "44px",
          lineHeight: "66px",
          /* identical to box height */

          display: "flex",
          alignItems: "flex-end",
          textTransform: "capitalize",

          color: "#FF922C",
        }}
      >
        <ThirtyTwo />
      </div>
      <div
        style={{
          position: "absolute",
          width: "367px",
          height: "100px",
          left: "100px",
          top: "352px",

          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "36px",
          lineHeight: "50px",
          /* or 139% */

          display: "flex",
          alignItems: "flex-end",
          textTransform: "capitalize",
          color: "#333333",
        }}
        className="font-poppins"
      >
        Green Goddess Chicken Salad
      </div>
      <div
        style={{
          position: "absolute",
          width: "347px",
          height: "60px",
          left: "100px",
          top: "464px",

          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "13px",
          lineHeight: "20px",
          display: "flex",
          alignItems: "flex-end",
          textTransform: "capitalize",

          color: "#333333",
        }}
        className="font-poppins"
      >
        It is a non vegetarian salad which consists of the green goddess
        dressing mixed with chicken, peppers, olives and celery.
      </div>
      <div
        style={{
          position: "absolute",
          width: "163px",
          height: "48px",
          left: "100px",
          top: "552px",

          background: "#FF922C",
          boxShadow: "0px 20px 40px #F4E2D1",
          borderRadius: "69px",
        }}
      >
        <div
          style={{
            fontStyle: "bold",
            fontWeight: "700",
            fontSize: "16px",
            color: "#FFFFFF",
            textAlign: "center",
            padding: "7% 0px 0px 0px",
          }}
          className="font-poppins"
        >
          ORDER NOW{" "}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          left: "568px",
          top: "540px",
          transform: "rotate(-180deg)",
        }}
      >
        <Arrow />
      </div>
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          left: "1100px",
          top: "520px",
        }}
      >
        <Arrow />
      </div>

      <div
        style={{
          position: "absolute",
          width: "102px",
          height: "136px",
          left: "611.6px",
          top: "121.05px",
          transform: "rotate(-59.92deg)",
        }}
      >
        <img src={Image1} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "264px",
          height: "175px",
          left: "825px",
          top: "100px",
        }}
      >
        <img src={Image2} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "102px",
          height: "136px",
          left: "1050px",
          top: "133px",
        }}
      >
        <img src={Image3} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "213px",
          height: "220px",
          left: "380px",
          top: "250px",
        }}
      >
        <img src={Image4} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "213px",
          height: "220px",
          left: "1260px",
          top: "250px",
        }}
      >
        <img src={Image5} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "786.56px",
          height: "521.39px",
          left: "720px",
          top: "350px",
        }}
      >
        <img src={Image} style={{ borderRadius: "50%" }} alt="dish" />
      </div>
    </div>
  );
}

export default App;
