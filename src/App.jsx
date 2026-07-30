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

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        {/* demo je najsilnejšia časť, preto ide hore — na mobile
            sa k nemu človek dostane po pár potiahnutiach */}
        <Explorer />
        <Match />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
