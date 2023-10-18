import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

import classes from "@/styles/About.module.css";

export default function About() {
  return (
    <Flex h="50vh" w="100%" justify="center" py="3rem" flexDir="column" style={{
      backgroundColor: "#1c1c1c",
    }}>

      <Flex w="100%" justify="center" mb="rem">
        <Text fontWeight="bold" fontSize="2xl">About</Text>
      </Flex>

      <Flex w="100%" px="15%">

        <Flex w="40%" px="0.7rem" py="1rem" flexDir="column">
          <Box bgImage={""}></Box>

          <Spacer />

          <Flex mb={1}>
            <Text fontWeight="bold" fontSize="2xl">Philip Edekobi</Text>
          </Flex>

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
        </Flex>

        <Flex w="60%" px="0.7rem" py="1rem">
          <Text>{about}</Text>
        </Flex>

      </Flex>
    </Flex>
  );
}

const about = `I am a software wit 15000 years experience. The way things is going 
I don't know. Bt normally reason am you go see say some things just mumu but wetin man go
do about am except accept na cos if you talkk you go too collect ma man you go collect tire
but anyhow sha we move.
`;
