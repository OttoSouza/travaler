import { Box, Stack, Text, Divider, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FiCamera, FiStar } from "react-icons/fi";
import { colors } from "../../../util/colors";

interface PlaceCardProps {
  title: string;
  type: string;
  icon: IconType;
  image: string;
  score: string;
}

export function PlaceCard({ title, type, icon, image, score }: PlaceCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="2rem"
      overflow="hidden"
      borderColor={colors.others}
      position="relative"
      bg="white"
    >
      <Flex
        width="100%"
        height="200px"
        bgImage={`url('${image}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="100% 40%"
        mb="6"
        alignItems="center"
        justifyContent={["center", "center", "center", "flex-start"]}
      ></Flex>
      <Box>
        <Box d="flex" alignItems="flex-start">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            width="100%"
          >
            <Text
              fontWeight="600"
              color={colors.title}
              fontSize="1.125rem"
              ml="6"
            >
              {title}
            </Text>
            <Divider width="100%" height="1px" my="6" bg="cyan.100" />
            <Flex
              alignItems="center"
              mx="6"
              justifyContent="space-between"
              mb="6"
            >
              <Text fontWeight="400" color={colors.subtitle} fontSize="1rem">
                {type}
              </Text>

              <Icon color="orange.400" as={icon} fontSize="1.5rem" />
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        bg="orange.400"
        w="56px"
        h="83px"
        top="0"
        left="24px"
        borderRadius="5"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDir="column"
        gridGap={2}
      >
        <Icon as={FiStar} fontSize="1.5rem" color="white" />
        <Text fontWeight="600" color="white" fontSize="1.125rem">
          {score}
        </Text>
      </Box>
    </Box>
  );
}
