import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Card } from "../Card";

export function CardsHome() {
  return (
    <Flex
      justifyContent="flex-end"
      gridGap="20"
      height="100%"
      display={["none", "none", "none", "none", "flex"]}
    >
      <Box w="45%">
        <SimpleGrid columns={1} spacing="40px">
          <Card image="/floripa.png" title="Florianopolis" places="98 locais" />
          <Card image="/blumenau.png" title="Blumenau" places="29 locais" />
        </SimpleGrid>
      </Box>
      <Box w="45%" mt="16">
        <SimpleGrid columns={1} spacing="40px">
          <Card image="/bombinhas.png" title="Bombinhas" places="43 locais" />
          <Card
            image="/aguas_mornas.png"
            title="Águas Mornas"
            places="13 locais"
          />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
