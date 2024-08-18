import React from "react";
import Head from "next/head";
import Link from "next/link";
import FloatingDockDemo from "@/components/example/floating-dock-demo";

const DemoAceternity = () => {
  return (
    <>
      <Head>
        <title>Demo Aceternity</title>
        <meta name="description" content="Demo page for Aceternity project" />
      </Head>
      <FloatingDockDemo />
    </>
  );
};

export default DemoAceternity;
