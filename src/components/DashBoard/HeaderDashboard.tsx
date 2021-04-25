import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../util/colors";
import { ActiveLink } from "../ActiveLink";

interface DashBoardHeaderProps {
  isLoading: boolean;
}
export function HeaderDashboard({ isLoading }: DashBoardHeaderProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      maxW={1280}
      flexDir={["column","column","column","row","row"]}
    >
      <Heading color={colors.title} fontSize="2.25rem" fontWeight="600">
        Selecione uma cidade
        {!isLoading && (
          <Spinner
            thickness="2px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.400"
            size="md"
            ml="5"
          />
        )}
      </Heading>
      <Flex gridGap="5">
        <ActiveLink label="Todos" isSelected={true} />
        <ActiveLink label="Mais acessadas" isSelected={false} />
      </Flex>
    </Flex>
  );
}
