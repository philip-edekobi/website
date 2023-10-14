import { Flex, Text } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Flex h="50vh" w="100%" py="3rem" style={{
      backgroundColor: "#262729",
    }}>
      <Flex w="100%" justify="center" mb="1rem">
        <Text fontWeight="bold" fontSize="2xl">What I Do</Text>
      </Flex>

      <Flex></Flex>
    </Flex>
  );
}
