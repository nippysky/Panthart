import type { NextPage } from "next";
import Head from "next/head";
import Doings from "../components/Doings";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReachUs from "../components/ReachUs";
import Team from "../components/Team";
import ScrollUp from "../components/ScrollUp";

const Home: NextPage = () => {
  return (
    <section className="bg-mainBG w-full">
      <Head>
        <title>Panthart</title>
        <meta name="description" content="Exploring Blockchain Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="m-0 z-0">
        <Hero />
        <Doings />
        <Team />
        <ReachUs />
      </main>
      <ScrollUp />
    </section>
  );
};

export default Home;
