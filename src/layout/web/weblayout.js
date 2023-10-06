import React from "react";
import Header from "./header";

const WebLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebLayout;
