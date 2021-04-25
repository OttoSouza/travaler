import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { colors } from "../../../util/colors";

export function DiscoveryButton() {
  const [session] = useSession();
  const toast = useToast();
  const { push } = useRouter();

  const handleIfUserLoggedIn = () => {
    if (!session) {
      toast({
        title: "Registre-se",
        description: "Voce nao tem nenhuma conta cadastrada",
        status: "error",
        position: "top-left",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  };

  return (
    <Button
      onClick={handleIfUserLoggedIn}
      w="100%"
      h="5rem"
      borderRadius="1rem"
      marginTop="2rem"
      bg={colors.discoberyButton}
      colorScheme="orange"
      fontSize="xl"
      fontWeight="medium"
      maxW="330px"
    >
      Descubra todos os lugares
    </Button>
  );
}
