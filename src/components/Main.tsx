import { Flex, Heading, Text } from "@chakra-ui/react";

import { Waiting_for_the_Sunrise } from "@next/font/google";
const sunrise = Waiting_for_the_Sunrise({ weight: "400", subsets: ["latin"] });

export default function Main() {
  return (
    <Flex w="100%" h="92vh" id="Home" flexDir="column" align="center" style={{
      backgroundColor: "#171717",
    }}>

      <Flex w="80%" pt="10rem" flexDir="column" justify="center">
        <Heading sx={sunrise.style} fontSize="8xl" color="#EF0">
          Phil
        </Heading>

        <Text fontSize="3xl" fontWeight="thin" mb="2rem">Software Engineer</Text>

        <Text fontSize="l">
          I am a software engineer with vast and diverse experience in programming. I typically work on
          backend related systems using Golang and I have little experience in systems programming using C.
          I have 3 years of experience working as a backend engineer and a general programming experience of 5 years.<br />
          I&apos;m open to chatting via email or dm.
        </Text>
      </Flex>

      <Flex bgColor="#555!"></Flex>
    </Flex>
  );
}
