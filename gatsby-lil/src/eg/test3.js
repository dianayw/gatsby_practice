import * as styles from "./test3.css";
import * as React from "react";
import { useEffect, useState } from "react";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import ReactGA from "react-ga";
ReactGA.initialize("UA-240638716-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const Slideshow = () => {
  const [tab, setTab] = useState(1);
  const [timeEnter, setTimeEnter] = useState(Date.now());
  const [timeLeave, setTimeLeave] = useState(Date.now());
  const [timeTotal, setTimeTotal] = useState(0);
  const [prevTab, setPrevTab] = useState(1);
  // when the tab is clicked, record the timeLeave, update tab and prevTab
  const handleTab = (tabId) => {
    setTimeLeave(Date.now());
    setPrevTab(tab);
    setTab(tabId);
  };
  // when timeLeave changes, calculate timeTotal
  useEffect(() => {
    setTimeTotal(timeLeave - timeEnter);
    console.log(
      `tab ${prevTab} start ${new Date(timeEnter).getMinutes()}m${new Date(
        timeEnter
      ).getSeconds()}s leave ${new Date(timeLeave).getMinutes()}m${new Date(
        timeLeave
      ).getSeconds()}s`
    );
  }, [timeLeave]);
  // when timeTotal changes, record both timeTotal and prevTab
  useEffect(() => {
    let tabName = ["Tab 111", "Tab 222", "Tab 333"][prevTab-1];
    console.log(timeTotal, "ms in tab", tabName);
    setTimeEnter(Date.now());
    // // submit to GA, gatsby-plugin-google-analytics
    // trackCustomEvent(
    //   // (timeTotal, prevTab) =>
    //   {
    //   category: "Track time spent on each tab",
    //   action: "Click",
    //   label: timeTotal,
    //   value: prevTab,
    // })

    // submit to GA, react-ga
    ReactGA.timing({
      category: "Track time spent on each tab",
      variable: "load",
      value: timeTotal, // in milliseconds
      label: tabName,
    });
  }, [timeTotal]);

  return (
    <div>
      <nav>
        <h3
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            handleTab(1);
          }}
        >
          Tab1
        </h3>
        <h3
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            handleTab(2);
          }}
        >
          Tab2
        </h3>
        <h3
          style={{ marginRight: "10px", cursor: "pointer" }}
          onClick={() => {
            handleTab(3);
          }}
        >
          Tab3
        </h3>
      </nav>
      {tab === 1 && (
        <div>
          <div>Tab 111</div>
        </div>
      )}
      {tab === 2 && (
        <div>
          <div>Tab 222</div>
        </div>
      )}
      {tab === 3 && (
        <div>
          <div>Tab 333</div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
