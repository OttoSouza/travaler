import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FiCalendar, FiCoffee } from "react-icons/fi";
import { colors } from "../../util/colors";

export function About() {
  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      maxW="1280px"
      mx="auto"
      flexDir={"row"}
      pt="14"
      px={["4", "4", "4", "4", "0"]}
    >
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        gap={20}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Flex flexDir="column" alignItems="flex-start">
            <Heading color={colors.title} fontWeight="600" fontSize="5xl">
              Florianópolis
            </Heading>
            <Text as="p" my="10" fontSize="1.125rem" color={colors.title}>
              Capital do estado de Santa Catarina no sul do Brasil, é
              maioritariamente constituída pela Ilha de Santa Catarina, com 54
              km de comprimento.
            </Text>

            <Text as="span" color={colors.subtitle}>
              É famosa pelas suas praias, incluindo estâncias turísticas
              populares como a Praia dos Ingleses na extremidade norte da ilha.
            </Text>
          </Flex>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          {isWideVersion ? (
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Box
                h={268}
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="column"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Icon
                  color={colors.orange}
                  as={FiCoffee}
                  ml="8"
                  my="8"
                  fontSize={["2rem", "2.5rem"]}
                />
                <Divider bg={colors.shapes} height="1px" width="100%" />

                <Heading ml="8" mt="8" mb="4" fontSize={["xl", "3xl"]}>
                  20
                </Heading>
                <Text
                  as="p"
                  fontSize={["1rem", "1.125rem"]}
                  ml="8"
                  w="60%"
                  color={colors.title}
                >
                  Comida e Bebida
                </Text>
              </Box>
              <Box
                h={268}
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="column"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Icon
                  color={colors.orange}
                  as={FiCalendar}
                  ml="8"
                  my="8"
                  fontSize={["2rem", "2.5rem"]}
                />
                <Divider bg={colors.shapes} height="1px" width="100%" />

                <Heading ml="8" mt="8" mb="4" fontSize={["xl", "3xl"]}>
                  11
                </Heading>
                <Text
                  as="p"
                  fontSize={["1rem", "1.125rem"]}
                  ml="8"
                  w="60%"
                  color={colors.title}
                >
                  Comida e Bebida
                </Text>
              </Box>
              <Box
                h={268}
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="column"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Icon
                  color={colors.orange}
                  as={FiCoffee}
                  ml="8"
                  my="8"
                  fontSize={["2rem", "2.5rem"]}
                />
                <Divider bg={colors.shapes} height="1px" width="100%" />

                <Heading ml="8" mt="8" mb="4" fontSize={["xl", "3xl"]}>
                  67
                </Heading>
                <Text
                  as="p"
                  fontSize={["01rem", "1.125rem"]}
                  ml="8"
                  w="60%"
                  color={colors.title}
                >
                  Pontos Turisticos
                </Text>
              </Box>
            </Flex>
          ) : (
            <Flex justifyContent="space-between" alignItems="flex-end" flexDir="column" gridGap={4}>
              <Box
                w="100%"
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="row"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Flex gridGap="8">
                  <Icon
                    color={colors.orange}
                    as={FiCoffee}
                    ml="8"
                    my="auto"
                    fontSize={["2rem", "2.5rem"]}
                  />
                  <Divider bg={colors.border} height="100px" width="1px" />
                </Flex>
                <Flex
                  flexDir="row"
                  alignItems="center"
                  ml="12"
                  justifyContent="center"
                  my="auto"
                >
                  <Heading fontSize="3xl">67</Heading>
                  <Text
                    as="p"
                    fontSize="1.125rem"
                    ml="8"
                    w="60%"
                    color={colors.title}
                  >
                    Pontos Turisticos
                  </Text>
                </Flex>
              </Box>
              <Box
                w="100%"
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="row"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Flex gridGap="8">
                  <Icon
                    color={colors.orange}
                    as={FiCoffee}
                    ml="8"
                    my="auto"
                    fontSize={["2rem", "2.5rem"]}
                  />
                  <Divider bg={colors.border} height="100px" width="1px" />
                </Flex>
                <Flex
                  flexDir="row"
                  alignItems="center"
                  ml="12"
                  justifyContent="center"
                  my="auto"
                >
                  <Heading fontSize="3xl">67</Heading>
                  <Text
                    as="p"
                    fontSize="1.125rem"
                    ml="8"
                    w="60%"
                    color={colors.title}
                  >
                    Pontos Turisticos
                  </Text>
                </Flex>
              </Box>
              <Box
                w="100%"
                bg="white"
                borderRadius="2xl"
                display="flex"
                flexDir="row"
                alignItems="flex-start"
                borderColor={colors.border}
                borderWidth="1px"
              >
                <Flex gridGap="8">
                  <Icon
                    color={colors.orange}
                    as={FiCoffee}
                    ml="8"
                    my="auto"
                    fontSize={["2rem", "2.5rem"]}
                  />
                  <Divider bg={colors.border} height="100px" width="1px" />
                </Flex>
                <Flex
                  flexDir="row"
                  alignItems="center"
                  ml="12"
                  justifyContent="center"
                  my="auto"
                >
                  <Heading fontSize="3xl">67</Heading>
                  <Text
                    as="p"
                    fontSize="1.125rem"
                    ml="8"
                    w="60%"
                    color={colors.title}
                  >
                    Pontos Turisticos
                  </Text>
                </Flex>
              </Box>
            </Flex>
          )}
        </GridItem>
      </Grid>
    </Flex>
  );
}
