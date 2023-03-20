import { useState } from "react";

import { Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import logo from "../../public/logo.png";
import classes from "@/styles/Nav.module.css";
import { nanoid } from "nanoid";

const PAGE_SECTIONS = ["Home", "Projects", "About", "Blog"];

type NavItemProps = {
  name: string;
  clickAction: (section: string) => void;
  currentSection: string;
};

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("Home");
  const [isSmall] = useMediaQuery("(max-width: 768px)");

  function scrollToTop() {
    document.getElementById("Home")?.scrollIntoView();
  }

  function changeSection(section: string) {
    if (section !== "Blog") {
      setCurrentSection(section);
      document.getElementById(section)?.scrollIntoView();
      return;
    }
  }

  return (
    <Flex
      id="Home"
      h="4rem"
      w="100%"
      flexGrow="1"
      align="center"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "none",
      }}
    >
      <Spacer />
      <Image
        className={classes.image}
        color="yellow"
        src={logo}
        alt="luxury.dev logo"
        width={75}
        height={45}
        onClick={scrollToTop}
      />

      <Spacer />

      {!isSmall && (
        <Flex>
          {PAGE_SECTIONS.map(section => (
            <NavItem
              name={section}
              key={nanoid()}
              clickAction={changeSection}
              currentSection={currentSection}
            />
          ))}
        </Flex>
      )}

      <Spacer />

      <Flex>
        <AiFillGithub size={25} className={classes.icon} />
        <AiFillTwitterCircle size={25} className={classes.icon} />
        <BsLinkedin size={23} className={classes.icon} />
      </Flex>

      <Spacer />

      {isSmall && (
        <>
          <Menu></Menu>
          <Spacer />
        </>
      )}
    </Flex>
  );
}

function NavItem({ name, clickAction, currentSection }: NavItemProps) {
  return (
    <Flex
      mx="6"
      onClick={() => clickAction(name)}
      sx={{
        display: "inline",
        fontWeight: "bold",
        fontSize: "1.05rem",
        color: currentSection === name ? "#EF0" : "",
        borderBottom: currentSection === name ? "3px solid #EF0" : "inherit",
        padding: "3px 0",
      }}
      className={classes.pageSection}
    >
      {name}
    </Flex>
  );
}
