import * as styles from "./test3.css";
import * as React from "react";
import { useEffect, useState } from "react";

const Slideshow = () => {
  const [tab, setTab] = useState(1);
  const [timeEnter, setTimeEnter] = useState(Date.now());
  const [timeLeave, setTimeLeave] = useState();
  const [timeTotal, setTimeTotal] = useState();

  const handleTab = (tabId) => {
    console.log(`tab ${tab} time start ${timeEnter} time leave ${timeLeave}`);
    setTimeLeave(Date.now());
    setTab(tabId);
  };

  useEffect(() => {
    setTimeEnter(Date.now());
  });

  useEffect(() => {
    timeCalc();
  }, [timeLeave]);

  const timeCalc = () => {
    setTimeTotal(timeLeave - timeEnter);
    console.log(timeTotal);
  };

  // ===================
  const handleAA = () => {
    const aa = new Date(Date.now());
    let secAA = aa.getSeconds();
    let minAA = aa.getMinutes();
    console.log("AA: ", minAA, "min ", secAA, "sec");
  };
  const handleBB = () => {
    let timeBB = new Date().getTime();
    let secBB = Math.round(timeBB / 1000) % 60;
    let minBB = Math.trunc((Math.round(timeBB / 1000) % 3600) / 60);
    console.log("BB: ", minBB, "min ", secBB, "sec");
  };
  return (
    <div>
      <button onClick={() => handleAA()}>show time AA</button>
      <button onClick={() => handleBB()}>show time BB</button>
      <div>
        <nav>
          <span
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => {
              handleTab(1);
            }}
          >
            Tab1
          </span>
          <span
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => {
              handleTab(2);
            }}
          >
            Tab2
          </span>
          <span
            style={{ marginRight: "10px", cursor: "pointer" }}
            onClick={() => {
              handleTab(3);
            }}
          >
            Tab3
          </span>
        </nav>
        {tab === 1 && (
          <div>
            <div>Tab 1</div>
          </div>
        )}
        {tab === 2 && (
          <div>
            <div>Tab 2</div>
          </div>
        )}
        {tab === 3 && (
          <div>
            <div>Tab 3</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
