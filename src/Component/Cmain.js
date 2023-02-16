import React from "react";
import jey from "./main.jpg";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import jgm from "./cards.jpg";
import Card from "./Card";

const Cmain = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}>
      <img src={jey} alt="mi img" style={{ width: "50%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gridGap: 50,
          width: " 50%",
          margin: "15",
        }}
      >
        <div>
          <article
            style={{
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            THE BRIGTH FUTURE OF WEB 3.0
          </article>
        </div>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hannds or the people. But is it
            really fulfilling its promise?
          </p>
          <ColorButton variant="contained ">READ MORE</ColorButton>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cmain;
