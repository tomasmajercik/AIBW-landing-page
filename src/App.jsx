import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Preview from "./components/Preview.jsx";
import Drinks from "./components/Drinks.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Faq from "./components/Faq.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Preview />
        <Drinks />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
