import Head from "next/head";

import { getSession } from "next-auth/client";
import { Flex, Link as ChakraLink, Spinner } from "@chakra-ui/react";

import { GetServerSideProps } from "next";

import { useStates } from "../../hooks/useState";
import React from "react";
import Header from "../../components/Header";
import { HeaderDashboard } from "../../components/DashBoard/HeaderDashboard";
import { CardList } from "../../components/Card/cardList";
import { useRouter } from "next/router";
export default function Dashboard({ session }) {
  const { isLoading, filterStates } = useStates();
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh"
        color="orange.400"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>Listagem de cidades | Traveler</title>
      </Head>

      <Flex width="100vw" height="100vh" flexDir="column">
        <Header hasSession={!!session} />

        <Flex
          flexDir="column"
          height="100%"
          mx="auto"
          mt="10"
          px="4"
          w="100%"
          alignItems="center"
        >
          <HeaderDashboard isLoading />

          <CardList states={filterStates} />
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
