import { Flex, Text } from "@chakra-ui/react";
import { Skill } from "./types";
import { SkillDisplay } from "./Skill";

import { AiOutlineSetting, AiFillCompass } from "react-icons/ai";
import { nanoid } from "nanoid";

export default function WhatIDo() {
    return (
        <Flex h="60vh" w="100%" py="3rem" flexDir="column" style={{
            backgroundColor: "#1c1c1c",
        }}>
            <Flex w="100%" justify="center" mb="1rem">
                <Text fontWeight="bold" fontSize="2xl">What I Do</Text>
            </Flex>

            <Flex justify="center">
                {skills.map(skill => <SkillDisplay key={nanoid()} skill={skill} />)}
            </Flex>
        </Flex>
    );
}

const skills: Skill[] = [
    {
        name: "Backend Engineering",
        desc: "I have experience in backend sih soadkfrpo jdj aiodfj paodfp dcfkd paodskjf paiodsjf poadsjp s ",
        icon: <AiOutlineSetting color="black" />,
    },
    {
        name: "Systems Dev",
        desc: "Systems work",
        icon: <AiFillCompass style={{
            color: "black"
        }} />,
    }
];
