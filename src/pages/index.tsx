import Head from "next/head";
import { getSession } from "next-auth/client";

import { Home as HomeComponent } from "../components/Home/index";
import { GetServerSideProps } from "next";

import { Flex } from "@chakra-ui/react";
import  Header  from "../components/Header";

export default function Home({ session }) {
  return (
    <>
      <Head>
        <title>Inicio | Traveler</title>
      </Head>

      <Flex width="100vw" height="100vh" direction="column">
        <Header hasSession={!!session} />
        <HomeComponent />
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
