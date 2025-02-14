import Home from "@/components/Home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

const Page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Page;
