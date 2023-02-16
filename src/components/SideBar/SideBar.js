import { Divider, Typography } from "@mui/material";
import React from "react";
import InfoSideBar from "./InfoSideBar";

const SideBar = () => {
  return (
    <div className=" w-96 min-h-600 bg-black p-5 text-white self-end">
      <Typography variant="h3" color="orange">
        New
      </Typography>
      {InfoSideBar.map((e) => (
        <div>
          <div className="my-5">
            <Typography variant="h5" fontWeight="bold">
              {e.title}
            </Typography>
            <Typography cla variant="h6">
              {" "}
              {e.info}{" "}
            </Typography>
          </div>
          <Divider color="white" className="m-10" />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
