import React, { useState } from "react";
import parse from "html-react-parser";
import Header from "./component/header";
import "./App.css";
import Arrow from "./component/icon/Arrow";
import Arrow1 from "./component/icon/Arrow1";
import Image1 from "./component/icon/image1.svg";
import Image2 from "./component/icon/image2.svg";
import Image3 from "./component/icon/image3.svg";
import Image4 from "./component/icon/image4.svg";
import Image5 from "./component/icon/image5.svg";
function App() {
  const [dish] = useState([
    {
      img_src: "Image2",
      price: "$35",
      priceColor: "#54BF29",
      background: "#EAFFE2",
      header: "Asian Cucumber <br/> Salad",
      text: "Asian Cucumber Salad Recipe made with crunchy <br/> cucumber, onion, rice wine vinegar, and a few secret <br/> ingredients!",
    },
    {
      img_src: "Image3",
      price: "$32",
      priceColor: "##FF922C;",
      background: "#FFEEDE",
      header: "Green Goddess <br /> Chicken Salad",
      text: "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. ",
    },
    {
      img_src: "Image4",
      price: "$38",
      priceColor: "#0a5efc",
      background: "#8fb6ff",
      header: "Green Goddess <br /> Chicken Tandori",
      text: "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. ",
    },
  ]);
  const [imgsrc, setimgsrc] = useState("Image4");
  const [price, setprice] = useState("$38");
  const [priceColor, setpriceColor] = useState("#0a5efc");
  const [background, setbackground] = useState("#8fb6ff");
  const [header, setheader] = useState("Green Goddess  <br /> Chicken Tandori");
  const [text, settext] = useState(
    "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. "
  );

  function rotate() {
    const idx = Math.floor(Math.random() * 4) - 1;
    let index = idx;
    setimgsrc(dish[index].img_src);
    setprice(dish[index].price);
    setpriceColor(dish[index].priceColor);
    setbackground(dish[index].background);
    setheader(dish[index].header);
    settext(dish[index].text);

    console.log(idx);
  }
  return (
    <div>
      <div
        style={{
          width: "1077px",
          height: "1077px",
          marginLeft: "24%",
          marginTop: "-645px",
          background: background,
          borderRadius: "50%",
        }}
        id="bgcolor"
      >
        <Header />
        <div className="container">
          <div
            style={{
              position: "absolute",
              width: "102px",
              height: "136px",
              left: "611.6px",
              top: "110px",
              transform: "rotate(-59.92deg)",
            }}
            className="one"
          >
            <img src={Image1} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "264px",
              height: "175px",
              left: "825px",
              top: "60px",
            }}
          >
            <img src={Image2} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "102px",
              height: "136px",
              left: "1050px",
              top: "110px",
            }}
            className="three"
          >
            <img src={Image3} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "213px",
              maxWidth: "100px",
              height: "220px",
              left: "440px",
              top: "250px",
            }}
            className="four"
          >
            <img src={Image4} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "213px",
              height: "220px",
              left: "1150px",
              top: "250px",
            }}
            className="five"
          >
            <img
              src={Image5}
              style={{
                borderRadius: "50%",
              }}
              alt="dish"
            />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "786.56px",
              height: "521.39px",
              left: "750px",
              top: "270px",
            }}
          >
            <img
              src={imgsrc}
              id="imageid"
              style={{ borderRadius: "50%", width: "30%", height: "auto" }}
              alt="dish"
            />
          </div>{" "}
        </div>{" "}
      </div>
      <div
        style={{
          position: "absolute",
          width: "81px",
          height: "66px",
          left: "100px",
          top: "180px",
          fontStyle: "bold",
          fontWeight: "700",
          fontSize: "44px",
          lineHeight: "66px",
          /* identical to box height */

          display: "flex",
          alignItems: "flex-end",
          textTransform: "capitalize",

          color: priceColor,
        }}
        className="font-poppins"
        id="price"
      >
        {price}
      </div>{" "}
      <div
        style={{
          position: "absolute",
          width: "367px",
          height: "100px",
          left: "100px",
          top: "250px",
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
        id="header"
      >
        {parse(header)}
      </div>{" "}
      <div
        style={{
          position: "absolute",
          width: "347px",
          height: "60px",
          left: "100px",
          top: "364px",

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
        id="para"
      >
        {parse(text)}
      </div>{" "}
      <div
        style={{
          position: "absolute",
          width: "163px",
          height: "48px",
          left: "100px",
          top: "442px",

          background: priceColor,
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
        </div>{" "}
      </div>{" "}
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          left: "618px",
          top: "500px",
          transform: "rotate(-180deg)",
        }}
        onClick={rotate}
      >
        <Arrow fill={priceColor} />
      </div>{" "}
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          left: "1100px",
          top: "480px",
        }}
        onClick={rotate}
      >
        <Arrow1 fill={priceColor} />
      </div>{" "}
    </div>
  );
}

export default App;
