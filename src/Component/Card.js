import React from "react";
import jhm from "./cards.jpg";
const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        width: "30%",
      }}
    >
      <div>
        <h1 style={{ fontSize: 40, color: "#cccc" }}>01</h1>
        <b style={{ fontSize: 18 }}>Ravivin Retro Pcs</b>
        <p>
          what happen when old PCs
          <br /> are given modern upgrades
        </p>
      </div>
      <div style={{ width: 100, marginTop: 5, marginBottom: 10 }}>
        <img src={jhm} alt="soy yo" />
      </div>
    </div>
  );
};
export default Card;
