import { Flex } from "@chakra-ui/react";
import React from "react";

interface BannerProps {
  image: string;
}

export function Banner({ image }: BannerProps) {
  return (
    <Flex
      width="100%"
      height={["200px", "350px", "500px"]}
      bgImage={`url('${image}')`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="100% 50%"
      __css={{
        margin: "0px !important"
      }}
      
    ></Flex>
  );
}
