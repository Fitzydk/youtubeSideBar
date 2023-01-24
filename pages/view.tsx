import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Bubble from "../components/bubble";

type bubbleObj = {
  content: string;
  isActive: boolean;
  difficulty: string;
};

const View: NextPage = () => {
  const [content, setContent] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    dateHandle();
    currentTime();
    fetch("./api/getJson")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
    const intervalFetch = setInterval(() => {
      fetch("./api/getJson")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setContent(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1200);
  }, []);

  const nth = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dateHandle = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const t = new Date();
    let month = months[t.getMonth()];
    const numDay = new Date();
    let numberOfDay = numDay.getDate();
    const year = new Date();
    let currYear = year.getFullYear();

    setDate(numberOfDay + nth(numberOfDay) + " " + month + " " + currYear);
  };

  const currentTime = () => {
    let date = new Date();
    let hh: string | number = date.getHours();
    let mm: string | number = date.getMinutes();
    let session = "AM";

    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;

    let time = hh + ":" + mm + " " + session;
    setTime(time);
    let t = setTimeout(function() {
      currentTime();
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>Side bar Application</title>
      </Head>
      <div className="flex flex-row justify-end items-start h-screen w-screen">
        <div className="w-fit h-screen text-white bg-zinc-900 p-5 font-['Bebas_Neue'] font-light">
          <div className="flex flex-col justify-start items-start mb-8">
            <div className="text-5xl text-center">{time}</div>
            <div className="text-2xl text-center">{date}</div>
            <Image
              src="/cryptoWarehouse.png"
              width={200}
              height={100}
              alt="Crypto Warehouse Logo"
            />
          </div>
          {content.map((stuff: bubbleObj, index: number) => {
            return <Bubble key={index} data={stuff}></Bubble>;
          })}
        </div>
      </div>
    </>
  );
};

export default View;
