import React from "react";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import { SignInButton } from "../SignInButton/index";
import { SearchInput } from "../Form/SearchInput";
import { colors } from "../../util/colors";

interface HeaderProps {
  hasSession: boolean;
}

export default function Header({ hasSession }: HeaderProps) {
  return !hasSession ? (
    <Flex
      as="header"
      width="100%"
      mx="auto"
      px="4"
      py="4"
      alignItems="center"
      justifyContent="center"
      bg="white"
      borderBottom="1px"
      borderColor={colors.border}
    >
      <Flex
        w="100%"
        maxW="1280px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src="Logo.svg" alt="Logo" />

        <SignInButton />
      </Flex>
    </Flex>
  ) : (
    <Flex
      as="header"
      width="100%"
      mx="auto"
      px="1rem"
      py="1rem"
      alignItems="center"
      justifyContent="center"
      bg="white"
      borderBottom="1px"
      borderColor={colors.others}
    >
      <Flex
        w="100%"
        maxW={1280}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src="Logo.svg" alt="Logo" display={["none","none","flex","flex", "flex"]} />
        <SearchInput />
        <SignInButton />
      </Flex>
    </Flex>
  );
}
