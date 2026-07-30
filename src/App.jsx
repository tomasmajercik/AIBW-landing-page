import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Match from "./components/Match";
import HowItWorks from "./components/HowItWorks";
import Explorer from "./components/Explorer";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import useReveal from "./useReveal";

export default function App() {
  useReveal();

  // Vybraný záujem je spoločný pre celú stránku — keď na niečo klikneš
  // v hero alebo v bežiacom páse, nastaví sa filter v ukážke appky.
  const [interest, setInterest] = useState("futbal");

  function pick(key) {
    setInterest(key);
    document
      .getElementById("vyskusaj")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <Nav />
      <main>
        <Hero onPick={pick} />
        <Problem />
        <HowItWorks />
        <Match />
        <Explorer interestKey={interest} onInterest={setInterest} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
