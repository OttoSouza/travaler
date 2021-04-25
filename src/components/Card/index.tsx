import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../util/colors";

interface ItemCardProps {
  image: string;
  title: string;
  places: string;
}

export function Card({ image, title, places }: ItemCardProps) {
  return (
    <Box
      maxW={300}
      borderWidth="1px"
      borderRadius="3xl"
      overflow="hidden"
      borderColor={colors.border}
    >
      <Image src={image} height="250px" width="100%" />
      <Box padding="5">
        <Box d="flex" alignItems="flex-start">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            <Text fontWeight="600" color={colors.title} fontSize="1.125rem">
              {title}
            </Text>
            <Text fontWeight="400" color={colors.subtitle} fontSize="1rem">
              {places}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
