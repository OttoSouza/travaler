import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SignInButton } from "../SignInButton";
import { MdArrowBack } from "react-icons/md";
import { colors } from "../../util/colors";
import { useRouter } from "next/router";
interface PlacesHeaderProps {
  title: string;
}

export function PlacesHeader({ title }: PlacesHeaderProps) {
  const { push } = useRouter();
  return (
    <Flex
      as="header"
      width="100%"
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridGap="4"
        >
          <Image src="../../Logo.svg" alt="Logo" display={["none","none","inline","inline","inline",]}/>
          <IconButton
            width="40px"
            height="40px"
            bg="transparent"
            aria-label="back"
            icon={<MdArrowBack color="#a0acb3" />}
            borderWidth="1px"
            borderColor={colors.complement}
            onClick={() => push("/dashboard")}
          />
        </Box>

        <Text color={colors.complement} fontWeight="500" fontSize="1.125rem">
          {title}
        </Text>

        <SignInButton />
      </Flex>
    </Flex>
  );
}
