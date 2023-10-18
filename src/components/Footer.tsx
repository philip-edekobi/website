import { Flex, useMediaQuery, Text, Spacer } from "@chakra-ui/react";

import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import classes from "@/styles/Footer.module.css";

export default function Footer() {
  const [isSmall] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex flexDir="column" w="100%" style={{
      backgroundColor: "#171717",
    }}>
      <Flex
        w="100%"
        px={isSmall ? "1.5rem" : "7rem"}
        flexDir={isSmall ? "column" : "row"}
        justify={isSmall ? "" : "space-between"}
      >
        <Flex flexDir="column" mb={isSmall ? "3" : ""}>
          <Text color="#FF0" fontWeight="extrabold" fontSize="2xl">
            Phil
          </Text>
          <Text fontSize="xl">Backend Developer</Text>
        </Flex>

        <Flex flexDir="column" my={isSmall ? "3" : ""}>
          <Text fontWeight="bold" fontSize="lg">
            Contact
          </Text>

          <Text
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "#EF0",
              },
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:luxury@luxurydev.xyz"
            >
              luxury@luxurydev.xyz
            </a>
          </Text>
        </Flex>

        <Flex my={isSmall ? "3" : ""}>
          <AiFillGithub
            size={25}
            style={{
              margin: "auto 1.5rem auto 0",
            }}
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
      </Flex>

      <Flex my="1rem" bgColor="#2a2b2e" px={isSmall ? "1.5rem" : "8rem"} py="1">
        <Text fontSize={isSmall ? "xs" : "sm"} bgColor="inherit">
          Copyright &copy;2023 by Philip Edekobi. All rights reserved.
        </Text>

        <Spacer bgColor="inherit" />

        <Text fontSize={isSmall ? "xs" : "sm"} bgColor="inherit">
          Inspired by{" "}
          <a
            href="https://www.behance.net/gallery/128820167/Python-Developer-Website-Design"
            rel="noreferrer"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            Aden by Munaf
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}
