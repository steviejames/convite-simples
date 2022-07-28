import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { confirmPresence, addGuest } from "../services/firebase";
const Home: NextPage = () => {
  const confirmation = async () => {
    const result = await confirmPresence(923326989, "confirm");
    console.log(result);
  };
  const cancelConfirmation = async () => {
    const result = await confirmPresence(923326989, "cancel");
    console.log(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Convite simples</title>
        <link rel="icon" href="/tapago.svg" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <h1>Convite Simples</h1>
      </main>
    </div>
  );
};

export default Home;
