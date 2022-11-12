import type { NextPage } from "next";
import Head from "next/head";
import Doings from "../components/Doings";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ReachUs from "../components/ReachUs";
import Team from "../components/Team";
import ScrollUp from "../components/ScrollUp";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme } = useTheme();
  return (
    <section className="bg-mainBG dark:bg-darkBG w-full">
      <Head>
        <title>Panthart - The African Web 3 Company</title>
        <meta name="description" content="Exploring Blockchain Technology" />
        <link
          rel="icon"
          href={theme === "dark" ? "/favicon_dark.ico" : "/favicon.ico"}
        />
      </Head>

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

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
