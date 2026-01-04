"use client";

import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Work from "../components/sections/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}
