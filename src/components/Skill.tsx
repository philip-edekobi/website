import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { Skill } from "./types";

export const SkillDisplay: React.ComponentType<{ skill: Skill }> = ({ skill }) => {
    return (
        <Flex
            flexDir="column" mx="2rem" bgColor="#E1b20f"
            borderRadius="2xl" h="15rem" w="30%" align="center"
            py="1rem" px="1.7rem"
        >
            <Flex>
                <IconContext.Provider value={{
                    color: "black", size: "3rem"
                }}>
                    {skill.icon}
                </IconContext.Provider>
            </Flex>

            <Flex mt="4" mb="2">
                <Text fontSize="l" fontWeight="bold" color="black">{skill.name}</Text>
            </Flex>

            <Flex mb="4">
                <Text fontSize="sm" color="black">{skill.desc}</Text>
            </Flex>
        </Flex>
    );
}