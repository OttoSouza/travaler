import { GetStaticPaths, GetStaticProps } from "next";

import { useSession } from "next-auth/client";
import { api } from "../../../services/api";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import NotAuthenticated from "../../../components/NotAuthenticated/index";
import { PlacesHeader } from "../../../components/Places/PlacesHeader";
import { Banner } from "../../../components/Places/Banner";
import { colors } from "../../../util/colors";
import { About } from "../../../components/Places/About";
import { Spotlight } from "../../../components/Places/Spotlight";
import MeetAll from "../../../components/Places/MeetAll";
import { BestRated } from "../../../components/Places/BestRated";
interface States {
  id: string;
  title: string;
  image: string;
  places: string;
}

interface AboutState {
  state: States;
}

export default function AboutStates({ state }: AboutState) {
  const [session, loading] = useSession();
  const { push } = useRouter();

  if (loading) return null;
  if (!loading && !session) return <NotAuthenticated />;

  return (
    <VStack >
      <PlacesHeader title={state.title} />
      <Banner image={state.image} />
      <About />
      <BestRated />

      <Spotlight />
      <MeetAll/>

    </VStack>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const response = await api.get(`states/${slug}`);

  const state = {
    id: response.data.id,
    title: response.data.title,
    image: response.data.image,
    places: response.data.places,
  };

  return {
    props: { state },
    revalidate: 60 * 60 * 24,
  };
};
