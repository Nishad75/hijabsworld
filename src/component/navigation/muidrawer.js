import { Drawer } from "@mui/material";
import React from "react";

const MuiDrawer = ({ openDrawer, toogleDrawer, anchor, drawer }) => {
  return (
    <>
      <Drawer anchor={anchor} open={openDrawer} onClick={toogleDrawer}>
        {drawer}
      </Drawer>
    </>
  );
};

export default MuiDrawer;