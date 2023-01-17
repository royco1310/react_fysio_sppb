import React, { useEffect, useState } from "react";

export const BasicFormat = () => {
  const [showTestForm, setShowTestForm] = useState(true);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [mainText, setMainText] = useState("BALANCE TEST");
  const [subText, setSubText] = useState("SIDE BY SIDE");
  const testList = [
    {
      mainTest: "BALANCE TEST",
      subTest: ["SIDE BY SIDE", "SEMI-TANDEM", "TANDEM"],
    },

    { mainTest: "WALKING TEST", subTest: ["TRIAL 1", "TRIAL 2"] },

    { mainTest: "SIT-TO-STAND", subTest: "ONLY ONE TRIAL" },
  ];

  //Balance test
  const [getPointBalance, setGetPointBalance] = useState(0);
  const [showImage, setShowImage] = useState(require("./image/sidebyside.jpg"));
  const [getPointSideBySide, setGetPointSideBySide] = useState(0);
  const [getPointSemiTandem, setGetPointSemiTandem] = useState(0);
  const [getPointTandem, setGetPointTandem] = useState(0);
  const [getTimeTandem, setGetTimeTandem] = useState(0);
  const [timeTandemWithColon, setTimeTandemWithColon] = useState(0);

  //Walking test
  const [getTrial1Time, setGetTrial1Time] = useState(0);
  const [getTrial2Time, setGetTrial2Time] = useState(0);
  const [getTrial1Point, setGetTrial1Point] = useState(0);
  const [getTrial2Point, setGetTrial2Point] = useState(0);
  const [gaitSpeed, setGaitSpeed] = useState(0);
  const [getBestTimeWalking, setGetBestTimeWalking] = useState(0);
  const [bestTimeWalkingColon, setBestTimeWalkingColon] = useState(0);
  const [getBestScoreWalking, setGetBestScoreWalking] = useState(0);

  //Sit To Stand test
  const [getPointSitToStand, setGetPointSitToStand] = useState(0);
  const [getTimeSitToStand, setGetTimeSitToStand] = useState(0);
  const [timeStSWithColon, setTimeStSWithColon] = useState(0);
  //Result
  const [showResult, setShowResult] = useState(false);
  const [getTotalScore, setGetTotalScore] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeOn]);

  useEffect(() => {
    if (time === 10000 && mainText === "BALANCE TEST") {
      setTimeOn(false);
    }
  });

  const handleClickNext = () => {
    setTime(0);
    if (
      time < 10000 &&
      mainText === "BALANCE TEST" &&
      subText === "SIDE BY SIDE"
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointSideBySide(getPointSideBySide + 0);
      console.log("your time on balance/sidebyside is ", time);
      console.log(
        "your point on balance/sidebyside is ",
        getPointSideBySide + 0
      );
    } else if (
      time === 10000 &&
      mainText === "BALANCE TEST" &&
      subText === "SIDE BY SIDE"
    ) {
      setMainText("BALANCE TEST");
      setSubText("SEMI-TANDEM");
      setShowImage(require("./image/semitandem.jpg"));
      setGetPointBalance(getPointBalance + 1);
      setGetPointSideBySide(getPointSideBySide + 1);
      console.log("your time on balance/sidebyside is ", time);
      console.log(
        "your point on balance/sidebyside is ",
        getPointSideBySide + 1
      );
    } else if (
      time < 10000 &&
      mainText === "BALANCE TEST" &&
      subText === "SEMI-TANDEM"
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointSemiTandem(getPointSemiTandem + 0);
      console.log("your time on balance/semi tandem is ", time);
      console.log(
        "your point on balance/semitandem is ",
        getPointSemiTandem + 0
      );
    } else if (
      time === 10000 &&
      mainText === "BALANCE TEST" &&
      subText === "SEMI-TANDEM"
    ) {
      setMainText("BALANCE TEST");
      setSubText("TANDEM");
      setShowImage(require("./image/tandem.jpg"));
      setGetPointBalance(getPointBalance + 1);
      setGetPointSemiTandem(getPointSemiTandem + 1);
      console.log("your time on balance/semitandem is ", time);
      console.log(
        "your time on balance/semitandem is ",
        getPointSemiTandem + 1
      );
    } else if (
      time === 10000 &&
      mainText === "BALANCE TEST" &&
      subText === "TANDEM"
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 2);
      setGetPointTandem(getPointTandem + 2);
      setGetTimeTandem(time);
      console.log("your time on balance/tandem is ", time);
      console.log("your point on balance/tandem is ", getPointTandem + 2);
      setTimeTandemWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
    } else if (
      //her må vi sette ekte verdi på tid etterhvert
      time > 3000 &&
      time < 9999 &&
      mainText === "BALANCE TEST" &&
      subText === "TANDEM"
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 1);
      setGetPointTandem(getPointTandem + 1);
      setGetTimeTandem(time);
      console.log("your time on balance/tandem is ", time);
      console.log("your point on balance/tandem is ", getPointTandem + 1);
      setTimeTandemWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
    } else if (
      //her må vi sette ekte verdi på tid etterhvert
      time < 3000 &&
      mainText === "BALANCE TEST" &&
      subText === "TANDEM"
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointTandem(getPointTandem + 0);
      setGetTimeTandem(time);
      console.log("your time on balance/tandem is ", time);
      console.log("your time on balance/tandem is ", getPointTandem + 0);
      setTimeTandemWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 1" &&
      time < 4820
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 2");
      setGetTrial1Point(getTrial1Point + 4);
      setGetTrial1Time(time);
      console.log("your time on walking trial 1 is ", time);
      console.log("your time on walkingtrial1 is ", getTrial1Point + 4);
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 1" &&
      time < 6200
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 2");
      setGetTrial1Point(getTrial1Point + 3);
      setGetTrial1Time(time);
      console.log("your time on walking trial 1 is ", time);
      console.log("your time on walkingtrial1 is ", getTrial1Point + 3);
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 1" &&
      time < 8700
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 2");
      setGetTrial1Point(getTrial1Point + 2);
      setGetTrial1Time(time);
      console.log("your time on walking trial 1 is ", time);
      console.log("your time on walkingtrial1 is ", getTrial1Point + 2);
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 1" &&
      time > 8700
    ) {
      setMainText("WALKING TEST");
      setSubText("TRIAL 2");
      setGetTrial1Point(getTrial1Point + 1);
      setGetTrial1Time(time);
      console.log("your time on walking trial 1 is ", time);
      console.log("your time on walkingtrial1 is ", getTrial1Point + 1);
    }

    if (mainText === "WALKING TEST" && subText === "TRIAL 2" && time < 4820) {
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetTrial2Point(getTrial2Point + 4);
      setGetTrial2Time(time);
      console.log("your time on walking trial 2 is ", time);
      console.log("your time on walkingtrial2 is ", getTrial2Point + 4);
      setBestTimeWalkingColon(
        ("0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)).slice(
          -2
        ) +
          "." +
          ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
      );
      setGaitSpeed(
        4 /
          parseFloat(
            (
              "0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)
            ).slice(-2) +
              "." +
              ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
          )
      );
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 2" &&
      time < 6200
    ) {
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetTrial2Time(time);
      console.log("your time on walking trial 2 is ", time);
      setGetTrial2Point(getTrial2Point + 3);
      console.log("your time on walkingtrial2 is ", getTrial2Point + 3);
      setBestTimeWalkingColon(
        ("0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)).slice(
          -2
        ) +
          "." +
          ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
      );
      setGaitSpeed(
        4 /
          parseFloat(
            (
              "0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)
            ).slice(-2) +
              "." +
              ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
          )
      );
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 2" &&
      time < 8700
    ) {
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetTrial2Time(time);
      console.log("your time on walking trial 2 is ", time);
      setGetTrial2Point(getTrial2Point + 2);
      console.log("your time on walkingtrial2 is ", getTrial2Point + 2);
      setBestTimeWalkingColon(
        ("0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)).slice(
          -2
        ) +
          "." +
          ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
      );
      setGaitSpeed(
        4 /
          parseFloat(
            (
              "0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)
            ).slice(-2) +
              "." +
              ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
          )
      );
    } else if (
      mainText === "WALKING TEST" &&
      subText === "TRIAL 2" &&
      time > 8700
    ) {
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetTrial2Time(time);
      console.log("your time on walking trial 2 is ", time);
      setGetTrial2Point(getTrial2Point + 1);
      console.log("your time on walkingtrial2 is ", getTrial2Point + 1);
      setBestTimeWalkingColon(
        ("0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)).slice(
          -2
        ) +
          "." +
          ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
      );
      setGaitSpeed(
        4 /
          parseFloat(
            (
              "0" + Math.floor((Math.min(getTrial1Time, time) / 1000) % 60)
            ).slice(-2) +
              "." +
              ("0" + ((Math.min(getTrial1Time, time) / 10) % 100)).slice(-2)
          )
      );
    }
  };

  const handleClickUnable = () => {
    if (mainText === "BALANCE TEST" && subText === "SIDE BY SIDE") {
      setTime(0);

      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointSideBySide(0);
      console.log("your balance point is", getPointBalance);
    } else if (mainText === "BALANCE TEST" && subText === "SEMI-TANDEM") {
      setMainText("WALKING TEST");
      setTime(0);

      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointSemiTandem(0);
      setGetPointTandem(0);
      console.log("your balance point is", getPointBalance);
    } else if (mainText === "BALANCE TEST" && subText === "TANDEM") {
      setTime(0);

      setMainText("WALKING TEST");
      setSubText("TRIAL 1");
      setGetPointBalance(getPointBalance + 0);
      setGetPointTandem(0);
      console.log("your balance point is", getPointBalance);
    } else if (mainText === "WALKING TEST" && subText === "TRIAL 1") {
      setTime(0);
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetBestScoreWalking(0);
      getTrial1Time(0);
      getTrial2Time(0);
      setGetBestTimeWalking(0);
      setBestTimeWalkingColon(0);
      setGaitSpeed(0);
    } else if (mainText === "WALKING TEST" && subText === "TRIAL 2") {
      setTime(0);
      setMainText("SIT-TO-STAND");
      setSubText("ONLY ONE TRIAL");
      setGetBestScoreWalking(getTrial1Point);
      setGetBestTimeWalking(getTrial1Time);
      setBestTimeWalkingColon(
        ("0" + Math.floor((getTrial1Time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((getTrial1Time / 10) % 100)).slice(-2)
      );
      setGaitSpeed(
        4 /
          parseFloat(
            ("0" + Math.floor((getTrial1Time / 1000) % 60)).slice(-2) +
              "." +
              ("0" + ((getTrial1Time / 10) % 100)).slice(-2)
          )
      );
    } else if (mainText === "SIT-TO-STAND") {
      setTime(0);
      setShowResult(true);
      setShowTestForm(false);

      setGetBestTimeWalking(Math.min(getTrial1Time, getTrial2Time));
      setGetBestScoreWalking(Math.max(getTrial1Point, getTrial2Point));
      setGetTotalScore(
        getPointBalance +
          getPointSitToStand +
          Math.max(getTrial1Point, getTrial2Point)
      );
    }
  };

  const handleClickStart = () => {
    setTimeOn(true);
    console.log("you now clicked start button");
  };

  const handleClickStop = () => {
    setTimeOn(false);
    console.log("now you stopped the counter");
    if (mainText === "SIT-TO-STAND" && time < 11190) {
      setGetPointSitToStand(getPointSitToStand + 4);
      console.log("your point on SitTostand is ", getPointSitToStand + 4);
      setGetTimeSitToStand(time);
      setTimeStSWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
    } else if (mainText === "SIT-TO-STAND" && time < 13690) {
      setGetPointSitToStand(getPointSitToStand + 3);

      console.log("your point on SitTostand is ", getPointSitToStand + 3);
      setGetTimeSitToStand(time);
      setTimeStSWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
      console.log("your SitToStand time is ", time);
    } else if (mainText === "SIT-TO-STAND" && time < 16690) {
      setGetPointSitToStand(getPointSitToStand + 2);
      console.log("your point on SitTostand is ", getPointSitToStand + 2);
      setTimeStSWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
      setGetTimeSitToStand(time);
      console.log("your SitToStand time is ", time);
    } else if (mainText === "SIT-TO-STAND" && time > 16700) {
      setGetPointSitToStand(getPointSitToStand + 1);
      setTimeStSWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
      console.log("your point on SitTostand is ", getPointSitToStand + 1);
      setGetTimeSitToStand(time);
      console.log("your SitToStand time is ", time);
    } else if (mainText === "SIT-TO-STAND" && time > 60000) {
      setGetPointSitToStand(getPointSitToStand + 0);
      setTimeStSWithColon(
        ("0" + Math.floor((time / 1000) % 60)).slice(-2) +
          "." +
          ("0" + ((time / 10) % 100)).slice(-2)
      );
      console.log("your point on SitTostand is ", getPointSitToStand + 0);
      setGetTimeSitToStand(time);
      console.log("your SitToStand time is ", time);
    }
  };

  const handleClickReset = () => {
    setTime(0);
    if (mainText === "BALANCE TEST" && subText === "SIDE BY SIDE") {
      setGetPointSideBySide(0);
    } else if (mainText === "BALANCE TEST" && subText === "SEMI-TANDEM") {
      setGetPointSemiTandem(0);
    } else if (mainText === "BALANCE TEST" && subText === "TANDEM") {
      setGetPointTandem(0);
    } else if (mainText === "WALKING TEST" && subText === "TRIAL 1") {
      setGetTrial1Point(0);
    } else if (mainText === "WALKING TEST" && subText === "TRIAL 2") {
      setGetTrial2Point(0);
    } else if (mainText === "SIT-TO-STAND") {
      setGetPointSitToStand(0);
    }
  };

  const handleClickToResult = () => {
    setShowResult(true);
    setShowTestForm(false);
    setGetBestTimeWalking(Math.min(getTrial1Time, getTrial2Time));
    console.log(
      "your best time of walkign test is",
      Math.min(getTrial1Time, getTrial2Time)
    );
    setGetBestScoreWalking(Math.max(getTrial1Point, getTrial2Point));
    console.log(
      "your bestscore of walking test is",
      Math.max(getTrial1Point, getTrial2Point)
    );
    setGetTotalScore(
      getPointSitToStand +
        getPointBalance +
        Math.max(getTrial1Point, getTrial2Point)
    );
  };

  const handleClickToGoBack = () => {
    setTime(0);
    confirmAlert();
  };

  const confirmAlert = () => {
    let text = "Are you sure you want to quit and go back to start?";
    if (window.confirm(text) === true) {
      setShowTestForm(true);
      setShowResult(false);
      setMainText("BALANCE TEST");
      setSubText("SIDE BY SIDE");
      setShowImage(require("./image/sidebyside.jpg"));
      setGetPointBalance(0);

      setGetPointSideBySide(0);
      setGetPointSemiTandem(0);
      setGetPointTandem(0);
      setGetTimeTandem(0);
      setTimeTandemWithColon(0);

      setGetTrial1Time(0);
      setGetTrial2Time(0);
      setGetTrial1Point(0);
      setGetTrial2Point(0);
      setGaitSpeed(0);
      setGetBestTimeWalking(0);
      setBestTimeWalkingColon(0);
      setGetBestScoreWalking(0);

      //Sit To Stand test
      setGetPointSitToStand(0);
      setGetTimeSitToStand(0);
      setTimeStSWithColon(0);

      //Result
      setGetTotalScore(0);
    }
  };

  const handleClickCopy = async () => {
    try {
      const div = document.getElementById("divId");
      const textField = document.createElement("textarea");
      textField.innerText = div.innerText;
      document.body.appendChild(textField);
      textField.select();
      await navigator.clipboard.writeText(textField.value);
      textField.remove();
      setIsCopied(true);
      console.log("Copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      {showTestForm && (
        <div>
          <div>
            <h1>{mainText}</h1>
            <div id="sub">
              <h2 id="subtext">{subText}</h2>
              {mainText === "BALANCE TEST" && <img src={showImage} />}
            </div>
            <div id="stopwatch">
              <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
              <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>

            <div id="unablebutton">
              <button
                disabled={timeOn}
                id="checkbutton"
                onClick={handleClickUnable}
              ></button>
              <p>Unable to perform</p>
            </div>

            <button
              disabled={timeOn}
              id="gobackbutton"
              onClick={handleClickToGoBack}
            >
              GO BACK
            </button>
          </div>
          <div>
            {!timeOn && time === 0 && (
              <button className="button" onClick={handleClickStart}>
                START
              </button>
            )}
            {timeOn && (
              <button className="button" onClick={handleClickStop}>
                STOP
              </button>
            )}
            {!timeOn && time > 0 && (
              <button className="button" onClick={handleClickReset}>
                RESET
              </button>
            )}
            <br />
            {!timeOn && time > 0 && mainText !== "SIT-TO-STAND" && (
              <button className="button" onClick={() => handleClickNext(true)}>
                NESTE
              </button>
            )}
            {!timeOn &&
              time > 0 &&
              mainText === "SIT-TO-STAND" &&
              subText === "ONLY ONE TRIAL" && (
                <button className="button" onClick={handleClickToResult}>
                  RESULT
                </button>
              )}
          </div>
        </div>
      )}
      {!timeOn && showResult && (
        <div>
          <h1>Here is the result!</h1>
          <div id="divId">
            <h2 id="totalscore">
              TOTAL SCORE: {getTotalScore} <span> point</span>
            </h2>

            <table>
              <tr>
                <th>
                  BALANCE TEST <span>{getPointBalance} point</span>
                </th>
                <br />
                <td>
                  Side by side <span>{getPointSideBySide} point</span>
                </td>
                <br />

                <td>
                  Semi-tandem <span> {getPointSemiTandem} point</span>
                </td>
                <br />

                <td>
                  Tandem
                  <span>
                    {getPointTandem} point ( <span>{timeTandemWithColon}</span>
                    sec)
                  </span>
                </td>
              </tr>
              <tr>
                <th>
                  WALKING TEST <span> {getBestScoreWalking}</span>point
                </th>
                <br />
                <td>
                  Your time
                  <span> {bestTimeWalkingColon} sec</span>
                </td>
                <br />
                <td>
                  Gait speed<span> {gaitSpeed.toFixed(2)} m/s</span>
                </td>
              </tr>
              <tr>
                <th>
                  SIT AND STAND <span> {getPointSitToStand} point</span>
                </th>
                <br />
                <td>
                  Your time <span>{timeStSWithColon} sec</span>
                </td>
              </tr>
            </table>
            <br />
            <p className="analyses">
              This score is categorized as
              {getTotalScore <= 12 && getTotalScore >= 10 && (
                <span className="resultlevel"> high </span>
              )}
              {getTotalScore <= 9 && getTotalScore >= 7 && (
                <span className="resultlevel"> middle </span>
              )}
              {getTotalScore <= 6 && <span className="resultlevel"> low </span>}
              score.
            </p>

            <p className="analyses">
              This gait speed ({gaitSpeed.toFixed(2)} m/s) indicates
              <span> </span>
              {gaitSpeed.toFixed(2) < 0.6 && (
                <span>
                  this testperson is frail, with higher risk for falls,
                  dysfunction and hospitalization. <br /> Indicates also reduced
                  inndoor and ourdoor mobility.
                </span>
              )}
              {!gaitSpeed.toFixed(2) < 0.6 && gaitSpeed.toFixed(2) < 1.0 && (
                <span>
                  early stage of dysfunction with increased risk of falls and
                  dysfunction. <br /> Independence in ADL but reduced outdoor
                  mobility.
                </span>
              )}
              {gaitSpeed.toFixed(2) > 1.0 && (
                <span>
                  normal function without increased risk or limitations in ADL
                  and mobility.
                </span>
              )}
            </p>
          </div>
          <button id="gobackbutton2" onClick={handleClickToGoBack}>
            GO BACK
          </button>
          <button onClick={handleClickCopy} id="savebtn">
            SAVE RESULT
          </button>
          {isCopied && <p>Text copied to clipboard!</p>}
        </div>
      )}
    </>
  );
};
