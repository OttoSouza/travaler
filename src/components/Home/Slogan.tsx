import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { colors } from "../../util/colors";
import { DiscoveryButton } from "./DiscoveryButton";
export function Slogan() {
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      flexDir="column"
      bg="transparent"
      
    >
      <Heading
        as="h1"
        fontWeight="semibold"
        fontSize="5rem"
        color={colors.title}
        lineHeight={1}
        maxW={330}
      >
        Viva uma grande aventura
      </Heading>
      <Text
        fontSize="20px"
        color={colors.subtitle}
        fontWeight="normal"
        marginTop="2rem"
        lineHeight="30px"
        maxW={300}
      >
        Descubra locais incríveis para se visitar em cidades maravilhosas de
        Santa Catarina.
      </Text>

      <DiscoveryButton />
    </Flex>
  );
}
