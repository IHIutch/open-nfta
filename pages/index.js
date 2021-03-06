import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { useGetTrips } from "@/utils/react-query/trips";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
});

export default function Home() {
  const { data: trips } = useGetTrips({
    where: {
      serviceId: 1,
    },
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position="fixed" boxSize="100%">
        <Map />
      </Box>
    </>
  );
}
