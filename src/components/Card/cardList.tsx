import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "./";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
interface States {
  id: string;
  title: string;
  image: string;
  places: string;
}

interface ItemCardProps {
  states: States[];
}

export function CardList({ states }: ItemCardProps) {
  return (
    <SimpleGrid columns={[1, 2, 2, 4, 4]} spacing="8" my="5">
      {states.map((state) => (
        <Link href={`dashboard/places/${state.id}`} key={state.id}>
          <ChakraLink>
            <Card
              image={state.image}
              title={state.title}
              places={state.places}
            />
          </ChakraLink>
        </Link>
      ))}
    </SimpleGrid>
  );
}
