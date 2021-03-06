import React, { useState } from "react";
import parse from "html-react-parser";
import Circle from "./component/icon/circle";
import Header from "./component/header";
import "./App.css";
import Arrow from "./component/icon/Arrow";
import Arrow1 from "./component/icon/Arrow1";
import { motion } from "framer-motion";
function App() {
  const [dishSpin, setdishSpin] = useState([
    "./assets/image1.png",
    "./assets/image2.png",
    "./assets/image3.png",
    "./assets/image4.png",
    "./assets/image5.png",
  ]);
  const [dish] = useState([
    {
      img_src: "./assets/image4.png",
      price: "$35",
      priceColor: "#54BF29",
      background: "#EAFFE2",
      header: "Asian Cucumber <br/> Salad",
      text: "Asian Cucumber Salad Recipe made with crunchy <br/> cucumber, onion, rice wine vinegar, and a few secret <br/> ingredients!",
    },
    {
      img_src: "./assets/image2.png",
      price: "$32",
      priceColor: "#FF922C",
      background: "#FFEEDE",
      header: "Green Goddess <br /> Chicken Salad",
      text: "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. ",
    },
    {
      img_src: "/assets/image3.png",
      price: "$38",
      priceColor: "#0a5efc",
      background: "#8fb6ff",
      header: "Green Goddess <br /> Chicken Tandori",
      text: "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. ",
    },
  ]);
  const [imgsrc, setimgsrc] = useState("./assets/image2.png");
  const [price, setprice] = useState("$38");
  const [priceColor, setpriceColor] = useState("#0a5efc");
  const [background, setbackground] = useState("#8fb6ff");
  const [header, setheader] = useState("Green Goddess  <br /> Chicken Tandori");
  const [text, settext] = useState(
    "It is a non vegetarian salad which consists of the <br/> green goddess dressing mixed with chicken, <br/> peppers, olives and celery. "
  );
  const [spin, setspin] = useState(0);
  function rotate() {
    const idx = Math.floor(Math.random() * 2 + 0);
    let index = idx;
    setimgsrc(dish[index].img_src);
    setprice(dish[index].price);
    setpriceColor(dish[index].priceColor);
    setbackground(dish[index].background);
    setheader(dish[index].header);
    settext(dish[index].text);

    // console.log(dish[index].img_src);
    /*kth rotation*/
    // let latest = [];
    // let n = dishSpin.length;
    // let x = dishSpin[n - 1],
    //   i;
    // for (i = n - 1; i > 0; i--) {
    //   latest.push(dishSpin[i - 1]);
    // }
    // latest.push(x);

    // setdishSpin([latest[0], latest[1], latest[2], latest[3], latest[4]]);
    /*end of rotation*/
  }
  function add() {
    var x = spin + 30;
    setspin(x);
  }
  function sub() {
    var x = spin - 30;
    setspin(x);
  }

  return (
    <div>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <Header />
      </div>
      <div
        style={{
          position: "absolute",
          width: "1077px",
          height: "1077px",
          marginLeft: "24%",
          marginTop: "-645px",
          background: background,
          borderRadius: "50%",
        }}
        id="bgcolor"
      >
        <div
          style={{
            position: "absolute",
            width: "560px",
            height: "560px",
            left: "250px",
            top: "715px",
          }}
        >
          <Circle fill={priceColor} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "715px",
            left: "250px",
            right: "0",
            border: "0px solid",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            transform: `rotate(${spin}deg)`,
            transition: "2s",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "102px",
              height: "175px",
              left: "430px",
              top: "42px",
            }}
          >
            <img src={dishSpin[1]} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "102px",
              height: "136px",
              left: "8px",
              top: "56px",
            }}
          >
            <img src={dishSpin[2]} style={{ borderRadius: "50%" }} alt="dish" />
          </div>{" "}
          <div
            style={{
              position: "absolute",
              width: "213px",
              height: "220px",
              left: "180px",
              top: "-40px",
            }}
          >
            <img
              src={dishSpin[4]}
              style={{
                borderRadius: "50%",
              }}
              alt="dish"
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "213px",
              height: "220px",
              left: "-40px",
              top: "250px",
            }}
          >
            <img
              src={dishSpin[4]}
              style={{
                borderRadius: "50%",
              }}
              alt="dish"
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "213px",
              height: "220px",
              left: "500px",
              top: "250px",
            }}
          >
            <img
              src={dishSpin[4]}
              style={{
                borderRadius: "50%",
              }}
              alt="dish"
            />
          </div>
          {/* lower bound start */}
          <div>
            <div
              style={{
                position: "absolute",
                width: "786.56px",
                height: "521.39px",
                left: "40px",
                top: "430px",
              }}
            >
              <img
                src={dishSpin[1]}
                id="imageid"
                style={{ borderRadius: "50%", width: "100px" }}
                alt="dish"
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "102px",
                height: "136px",
                left: "460px",
                top: "410px",
                transform: "rotate(-59.92deg)",
              }}
              id="imageid"
            >
              <img
                src={dishSpin[0]}
                style={{ borderRadius: "50%" }}
                alt="dish"
              />
            </div>
            <div
              style={{
                position: "absolute",
                width: "102px",
                height: "136px",
                left: "250px",
                top: "480px",
                transform: "rotate(-59.92deg)",
              }}
              id="imageid"
            >
              <img
                src={dishSpin[0]}
                style={{ borderRadius: "50%" }}
                alt="dish"
              />
            </div>
          </div>
          {/* lower bound end */}
        </div>{" "}
      </div>
      <div
        style={{
          position: "absolute",
          width: "213px",
          height: "220px",
          left: "730px",
          top: "290px",
        }}
      >
        <img src={dishSpin[3]} style={{ borderRadius: "50%" }} alt="dish" />
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

          display: "flex",
          alignItems: "flex-end",
          textTransform: "capitalize",
          color: "#333333",
        }}
        className="font-poppins"
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
          left: "560px",
          top: "500px",
          transform: "rotate(-180deg)",
        }}
        onClick={() => {
          rotate();
          add();
        }}
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
        onClick={() => {
          rotate();
          sub();
        }}
      >
        <Arrow1 fill={priceColor} />
      </div>{" "}
    </div>
  );
}

export default App;
