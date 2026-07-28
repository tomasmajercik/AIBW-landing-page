import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Formats from "./components/Formats.jsx";
import Feed from "./components/Feed.jsx";
import Trust from "./components/Trust.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Formats />
        <Feed />
        <Trust />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
