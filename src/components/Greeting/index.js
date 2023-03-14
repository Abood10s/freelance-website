import React from "react";
import { useSelector } from "react-redux";
import { getDate } from "../GlobalFunctions";
import { Container, DayAndDate, Personal } from "./style";

const Greeting = () => {
  const { theUser } = useSelector((state) => state.user);
  const { name } = theUser;
  return (
    <Container>
      <Personal>
        <DayAndDate>
          <div>{getDate()}, </div>
          <h3>{`${new Date().toLocaleString("en-US", {
            month: "long",
          })},${new Date().toLocaleString("en-US", {
            day: "2-digit",
          })}th `}</h3>
        </DayAndDate>

        <h2>Good Morning, {name}</h2>
      </Personal>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        link="http://www.w3.org/1999/xlink"
        viewBox="0 0 145 130"
        aria-hidden="true"
        role="img"
        style={{ height: "120px" }}
      >
        <defs>
          <linearGradient
            id="airplanes-11-b-uid-2"
            x1="75.39"
            y1="120.45"
            x2="115.82"
            y2="77.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".29" stopColor="#95df00"></stop>
            <stop offset=".85" stopColor="#14a800"></stop>
          </linearGradient>
          <linearGradient
            id="airplanes-11-c-uid-2"
            x1="81.05"
            y1="95.9"
            x2="122.22"
            y2="95.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#14a800"></stop>
            <stop offset=".49" stopColor="#126b00"></stop>
          </linearGradient>
          <linearGradient
            id="airplanes-11-d-uid-2"
            x1="8.72"
            y1="68.27"
            x2="42.59"
            y2="46.81"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".29" stopColor="#194a99"></stop>
            <stop offset=".85" stopColor="#1f57c3"></stop>
          </linearGradient>
          <linearGradient
            id="airplanes-11-e-uid-2"
            x1="18.82"
            y1="48.53"
            x2="45.47"
            y2="67.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#133970"></stop>
            <stop offset="1" stopColor="#1f57c3"></stop>
          </linearGradient>
          <linearGradient
            id="airplanes-11-h-uid-2"
            x1="71.03"
            y1="44.87"
            x2="106.67"
            y2="-16.86"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".29" stopColor="#bda1e7"></stop>
            <stop offset=".85" stopColor="#8d77af"></stop>
          </linearGradient>
          <linearGradient
            id="airplanes-11-i-uid-2"
            x1="101.42"
            y1="31.54"
            x2="93.05"
            y2="19.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#746493"></stop>
            <stop offset=".17" stopColor="#7d6b9d"></stop>
            <stop offset=".5" stopColor="#8974aa"></stop>
            <stop offset=".8" stopColor="#8d77af"></stop>
          </linearGradient>
          <radialGradient
            id="airplanes-11-a-uid-2"
            cx="26.12"
            cy="1.18"
            r="17.29"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".61" stopColor="#f2f7f2"></stop>
            <stop offset=".93" stopColor="#d5e0d5"></stop>
          </radialGradient>
          <radialGradient
            id="airplanes-11-f-uid-2"
            cx="42.55"
            cy="6.22"
            r="8.58"
            href="https://www.upwork.com/nx/find-work/best-matches#airplanes-11-a-uid-2"
          ></radialGradient>
          <radialGradient
            id="airplanes-11-g-uid-2"
            cx="10.82"
            cy="4.66"
            r="9.66"
            href="https://www.upwork.com/nx/find-work/best-matches#airplanes-11-a-uid-2"
          ></radialGradient>
        </defs>
        <polygon
          points="84.98 113.35 81.05 121.27 122.22 70.53 84.98 113.35"
          fill="#126b00"
        ></polygon>
        <polyline
          points="85.04 113.29 103.58 130 122.22 70.53 63.4 93.79 81.05 109.69"
          fill="url(#airplanes-11-b-uid-2)"
        ></polyline>
        <polygon
          points="81.05 109.69 81.05 121.27 84.98 113.35 122.22 70.53 81.05 109.69"
          fill="url(#airplanes-11-c-uid-2)"
        ></polygon>
        <polygon
          points="15.47 63.02 14.14 67.16 45.88 45.41 15.47 63.02"
          fill="#133970"
        ></polygon>
        <polyline
          points="13.44 60.69 5.43 51.55 45.88 45.41 26.62 75.74 15.47 63.02"
          fill="url(#airplanes-11-d-uid-2)"
        ></polyline>
        <polygon
          points="45.88 45.41 13.44 60.69 14.14 67.16 15.47 63.02 45.88 45.41"
          fill="url(#airplanes-11-e-uid-2)"
        ></polygon>
        <path
          d="M40.77 12.5v-.75a4.92 4.92 0 011-3 5.85 5.85 0 01.4-.47 12.5 12.5 0 00-22.25-2.64 12.15 12.15 0 00-.86 1.54 10.93 10.93 0 00-1 4.64v.68z"
          fill="url(#airplanes-11-a-uid-2)"
        ></path>
        <path
          d="M41.76 8.74a4.92 4.92 0 00-1 3v.75h12.1a6.19 6.19 0 00-10.7-4.22 5.85 5.85 0 00-.4.47z"
          fill="url(#airplanes-11-f-uid-2)"
        ></path>
        <path
          d="M18 11.82a10.93 10.93 0 011-4.64 12.15 12.15 0 01.86-1.54 8.12 8.12 0 00-4.53-1.37 8.24 8.24 0 00-8.19 8.23H18z"
          fill="url(#airplanes-11-g-uid-2)"
        ></path>
        <polygon
          points="73.37 44.52 65.72 64.36 139.57 2.14 73.37 44.52"
          fill="#746493"
        ></polygon>
        <polyline
          points="65.72 40.45 35.62 24.42 139.57 2.14 107.85 62.88 73.37 44.52"
          fill="url(#airplanes-11-h-uid-2)"
        ></polyline>
        <polygon
          points="73.37 44.52 139.57 2.14 65.72 40.45 65.72 64.36 73.37 44.52"
          fill="url(#airplanes-11-i-uid-2)"
        ></polygon>
      </svg>
    </Container>
  );
};

export default Greeting;
