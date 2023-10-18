import { Flex, Text } from "@chakra-ui/react";
import { DisplayCard as Project } from "./types";
import { Display as ProjectDisplay } from "./Display";
import { nanoid } from "nanoid";

export default function Projects() {
  return (
    <Flex w="100%" h="92vh" py="3rem" id="Home" flexDir="column" align="center" style={{
      backgroundColor: "#171717",
    }}>
      <Flex w="100%" justify="center" mb="1rem">
        <Text fontWeight="bold" fontSize="2xl">Projects</Text>
      </Flex>

      <Flex w="100%" justify="center" flexWrap="wrap">
        {projects.map(project => <ProjectDisplay key={nanoid()} params={project} />)}
      </Flex>
    </Flex>
  );
}

const projects: Project[] = [
  {
    name: "Foodsub",
    desc: ""
  },
  {
    name: "Serche", desc: ""
  },
  {
    name: "Gomoni", desc: ""
  },
  {
    name: "htgen", desc: ""
  }
]