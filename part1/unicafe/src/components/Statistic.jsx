import React from "react";

export const Statistic = ({ detail }) => (
  <tr>
    <td>{detail.text}</td>
    <td>{detail.value}</td>
  </tr>
);
