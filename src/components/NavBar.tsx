import { Flex, Header } from "@mantine/core";
import Image from "next/image";

import logo from "../../public/logo.png";
import classes from "@/styles/Nav.module.css";

const PAGE_SECTIONS = ["Home", "Projects", "About", "Blog"];

export default function Navbar() {
  function scrollToTop() {
    document.getElementById("Home")?.scrollIntoView();
  }

  return (
    <Header
      id="Home"
      height="4rem"
      mb="1rem"
      py="sm"
      px="6rem"
      sx={{
        display: "flex",
        alignContent: "center",
        border: "none",
      }}
    >
      <Flex
        sx={{
          width: "85%",
        }}
      >
        <Image
          className={classes.image}
          color="yellow"
          src={logo}
          alt="luxury.dev logo"
          width={75}
          height={45}
          onClick={scrollToTop}
        />
      </Flex>
    </Header>
  );
}
