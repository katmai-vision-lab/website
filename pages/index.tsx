import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Katmai Vision Lab – Wildlife AI for Katmai National Park</title>
        <meta
          name="description"
          content="Open-source ML pipeline for detecting and tracking Alaskan brown bears in Katmai National Park. Bear detection, multi-object tracking, salmon detection coming soon."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Demo />
        <Roadmap />
      </main>

      <Footer />
    </>
  );
}
