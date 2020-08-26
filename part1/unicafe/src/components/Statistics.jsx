import React from "react";
import { Statistic } from "./Statistic";

export const Statistics = ({ details }) => {
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          {details.map((detail) => (
            <Statistic key={detail.text} detail={detail}></Statistic>
          ))}
        </tbody>
      </table>
    </>
  );
};
