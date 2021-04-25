import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { signIn, useSession, signOut } from "next-auth/client";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { colors } from "../../util/colors";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        aria-label="Google"
        icon={<FaSignOutAlt />}
        bg="transparent"
      />
      <Box bg={colors.orange} width="1px" height="10" mx="2" display={["none","flex","flex","flex", "flex"]}></Box>
      <Flex alignItems="center" gridGap="4" display={["none","flex","flex","flex", "flex"]}>
        <Text fontWeight="bold" color={colors.title}>
          {session.user.name}
        </Text>
        <Avatar src={session.user.image} w={10} h={10} mr="2" />
      </Flex>
    </Flex>
  ) : (
    <Flex gridGap="4">
      <IconButton
        aria-label="Google"
        icon={<FcGoogle />}
        bg="transparent"
        fontSize="32"
        onClick={() => signIn("google")}
      />
      <IconButton
        onClick={() => signIn("github")}
        aria-label="Google"
        icon={<FiGithub />}
        bg="transparent"
        fontSize="32"
      />
    </Flex>
  );
}
