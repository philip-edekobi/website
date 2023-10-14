import { useState } from "react";
import { useRouter } from "next/router";

import {
  Flex,
  Spacer,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";

import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

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

  const router = useRouter();

  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  function changeSection(section: string) {
    if (section !== "Blog") {
      setCurrentSection(section);
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
      return;
    }

    router.push(process.env.blogUrl ?? "https://blog.luxurydev.xyz");
  }

  return (
    <Flex id="Home" h="4rem" w="100%" align="center" position="sticky" top="0">
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
        <AiFillGithub
          size={25}
          className={classes.icon}
          onClick={() => {
            window.open("https://github.com/philip-edekobi", "_blank");
          }}
        />
        <AiFillTwitterCircle
          size={25}
          className={classes.icon}
          onClick={() => {
            window.open("https://twitter.com/edekobi_philip", "_blank");
          }}
        />
        <BsLinkedin
          size={23}
          className={classes.icon}
          onClick={() => {
            window.open("https://linkedin.com/in/philip-edekobi", "_blank");
          }}
        />
      </Flex>

      <Spacer />

      {isSmall && (
        <>
          <Menu>
            <MenuButton as={IconButton} variant="outline" icon={<HiMenu />} />
            <MenuList bgColor="#1a1b1e">
              {PAGE_SECTIONS.map(section => (
                <MenuItem
                  bgColor="#1a1b1e"
                  color="#ddd"
                  onClick={() => changeSection(section)}
                  key={nanoid()}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#ddd",
                      color: "#1a1b1e",
                    },
                  }}
                >
                  {section}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
        "&:hover": {
          color: "#DE0",
        },
      }}
      className={classes.pageSection}
    >
      {name}
    </Flex>
  );
}
