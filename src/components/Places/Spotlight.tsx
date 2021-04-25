import React from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { colors } from "../../util/colors";
import { FiAlertCircle } from "react-icons/fi";

export function Spotlight() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
    lg: true,
  });
  return isWideVersion ? (
    <Flex px="4" pt="20">
      <Flex
        w="100%"
        maxW="1280px"
        mx="auto"
        borderRadius="10"
        bg="white"
        border="1px"
        borderColor={colors.border}
      >
        <Flex flexDir="column" flex="1" my="10" mx="16" gridGap={4}>
          <Flex
            alignItems="center"
            gridGap={2}
            w={120}
            bg={colors.orange}
            justifyContent="center"
            borderRadius="10"
            h="30px"
            color="white"
          >
            <Icon as={FiAlertCircle} />
            <Text fontWeight="600">Destaque</Text>
          </Flex>
          <Heading color={colors.title} fontWeight="600" fontSize="5xl" mb="8">
            Praia dos Ingleses
          </Heading>
          <Text>
            Uma parte do paraíso na terra. Frequentemente com águas claras em
            tons verdes e azuis. Um dos locais mais preferidos por turistas e
            viajantes.
          </Text>
        </Flex>
        <Flex flexDir="column" flex="1">
          <Image
            borderTopRightRadius="10"
            borderBottomRightRadius="10"
            height={280}
            src="https://images.unsplash.com/photo-1572895708386-944844d1f915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          />
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex px="4">
      <Flex
        w="100%"
        maxW="1280px"
        mx="auto"
        borderTopLeftRadius="10"
        borderTopRightRadius="10"
        bg="white"
        flexDir="column"
      >
        <Flex flexDir="column" flex="1" my="10" mx="16" gridGap={4}>
          <Flex
            alignItems="center"
            gridGap={2}
            w={120}
            bg={colors.orange}
            justifyContent="center"
            borderRadius="10"
            h="30px"
            color="white"
          >
            <Icon as={FiAlertCircle} />
            <Text fontWeight="600">Destaque</Text>
          </Flex>
          <Heading color={colors.title} fontWeight="600" fontSize="5xl" mb="8">
            Praia dos Ingleses
          </Heading>
          <Text>
            Uma parte do paraíso na terra. Frequentemente com águas claras em
            tons verdes e azuis. Um dos locais mais preferidos por turistas e
            viajantes.
          </Text>
        </Flex>
        <Flex flex="1">
          <Image
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="100% 50%"
            borderBottomLeftRadius="10"
            borderBottomRightRadius="10"
            src="https://images.unsplash.com/photo-1572895708386-944844d1f915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
