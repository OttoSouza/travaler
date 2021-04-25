import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { useRouter } from "next/router";

export default function NotAuthenticated() {
  const { push } = useRouter();
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <Box
        bg="red.200"
        padding="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        borderRadius="lg"
        boxShadow="2xl"
        color="blackAlpha.800"
        gridGap="4"
      >
        <Flex alignItems="center" justifyContent="center" gridGap="2">
          <Icon as={FiAlertCircle} color="red" fontSize="2xl" />
          <Text fontWeight="bold" fontSize="2xl" color="red">
            Cadastre-se para ter todo o acesso
          </Text>
        </Flex>
        <Button colorScheme="red" variant="solid" onClick={() => push("/")}>
          Ir para o site
        </Button>
      </Box>
    </Flex>
  );
}
