import React from "react";
import Banner from "./Banner";
import dynamic from "next/dynamic";

const DynamicBanner = dynamic(() => import("../components/Banner"), {
  ssr: false,
});
const DynamicHeader = dynamic(() => import("../components/Header"), {
  ssr: false,
});
const DynamicSectionA = dynamic(() => import("../components/SectionA"), {
  ssr: false,
});
const DynamicSectionC = dynamic(() => import("../components/SectionC"), {
  ssr: false,
});
const DynamicSectionB = dynamic(() => import("../components/SectionB"), {
  ssr: false,
});
const DynamicFooter = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

const Layout = () => {
  return (
    <>
      <DynamicHeader />
      <Banner />
      <DynamicSectionA />
      <DynamicSectionB />
      <DynamicSectionC />
      <DynamicFooter />
    </>
  );
};

export default Layout;
