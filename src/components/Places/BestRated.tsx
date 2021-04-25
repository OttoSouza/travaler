import {
  Flex,
  Grid,
  GridItem,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FiCalendar, FiCamera, FiCoffee } from "react-icons/fi";
import { colors } from "../../util/colors";

import { PlaceCard } from "./PlacesCard";

export function BestRated() {
  
  return (
    <Flex
      w="100%"
      maxW="1280px"
      mx="auto"
      flexDir={"column"}
      alignItems={["center", "flex-start"]}
      pt="20"
      px={["4", "4", "4", "4", "0"]}

    >
      <Heading color={colors.title} fontWeight="600" fontSize="5xl" mb="8">
        Top Avaliados
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={["10px", "20px"]}
        alignItems="center"
        justifyContent="center"
        w="100%"
        mb="5"
      >
        <PlaceCard
          title="Lagoa da Conceição"
          type="Pontos Turisticos"
          icon={FiCamera}
          score="4.7"
          image="https://images.unsplash.com/photo-1599590218842-1950b641661f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1298&q=80"
        />
        <PlaceCard
          title="Doce e Companhia"
          type="Comida e Bebida"
          icon={FiCoffee}
          score="5.0"
          image="https://images.unsplash.com/photo-1546549158-993c3d92d592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
        <PlaceCard
          title="Praia do Campeche"
          type="Pontos Turisticos"
          score="4.9"
          icon={FiCamera}
          image="https://images.unsplash.com/photo-1469797384183-f961931553e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        <PlaceCard
          title="Expo Tatto Floripa"
          score="4.6"
          type="Eventos Organizados"
          icon={FiCalendar}
          image="https://images.unsplash.com/photo-1602103494381-5db708061ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80"
        />
      </Grid>
    </Flex>
  );
}
