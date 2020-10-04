import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import Header from "../components/layout/Header"; 
import { Intro } from "../styles/pages/Home";
import { useScroll } from "../utils/hooks/useScroll";


export default function Home() {

  const { scrollY } = useScroll();

  return (
    <>
      <Header color={scrollY <= 200 ? "light" : "dark"}/>
      <Intro></Intro>
    </>
  );
}
