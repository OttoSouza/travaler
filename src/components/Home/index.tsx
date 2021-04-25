import { Flex } from "@chakra-ui/react";
import React from "react";
import { CardsHome } from "./CardsHome";
import { Slogan } from "./Slogan";

export function Home() {
  return (
    <Flex
      justifyContent={["center", "center", "center", "center", "space-between"]}
      alignItems="center"
      flexDir={["column", "column", "column", "row"]}
      maxW={1280}
      width="100%"
      mx="auto"
      my="auto"
      px={["4", "4", "4", "5", "0"]}
      gridGap={10}
    >
      <Slogan />
      <CardsHome />
    </Flex>
  );
}
