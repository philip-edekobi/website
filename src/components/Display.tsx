import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { DisplayCard as Skill } from "./types";

export const Display: React.ComponentType<{ params: Skill }> = ({ params: skill }) => {
    return (
        <Flex
            flexDir="column" mx="2rem" bgColor="#E1b20f" my="1.2rem"
            borderRadius="2xl" h="15rem" minW="30%" maxW="30%" align="center"
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