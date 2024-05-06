import React, { useEffect, useState } from "react";

function Fun() {
  const colors = ["red", "blue", "green", "grey", "pink", "yellow", "black" , "orange" , "blueviolet","aqua"];
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [toggel, settoggel] = useState(false);

  const setCookie = (name, value, time) => {
    let d = new Date();
    d.setTime(d.getTime() + time * 60 * 1000);
    let exp = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + exp;
  };

  const timer = (toggel) => {
    if (toggel) {
      setTimeout(() => {
        if (time % 2 != 0) {
          chnageColor(index);
        }
        setTime((prev) => prev + 1);

        setCookie("time", time, 100);
      }, 1000);
    }
  };

  const handelStop = () => {
    console.log("stoped...");
    settoggel(false);
    setTimeout(() => {
      setCookie("time", null, null);
    }, 1000);
  };

  const chnageColor = (index) => {
    const body = document.querySelector("body");
    body.style.backgroundColor = colors[index];

    if (index < 9) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    if (toggel) {
      timer(toggel);
    }
  });

  return (
    <>
      <h1>CA - 5</h1>
      <h1>Welcome .</h1>

      <div id="timer">
        <div>
          <p>TImer : {time}</p>
        </div>

        <div>
          <button
            onClick={
              toggel
                ? () => {
                    settoggel(false);
                  }
                : () => {
                    settoggel(true);
                  }
            }
          >
            {toggel ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => {
              handelStop();
            }}
          >
            Stop
          </button>
        </div>
      </div>
      <p>Please Give full mark🙏</p>
    </>
  );
}

export default Fun;
