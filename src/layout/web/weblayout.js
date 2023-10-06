import React from "react";
import Header from "./header";
import Footer from "./footer";

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
