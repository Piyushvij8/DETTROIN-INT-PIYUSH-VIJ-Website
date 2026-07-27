import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatStrip from "./components/StatStrip";
import About from "./components/About";
import Programs from "./components/Programs";
import Trust from "./components/Trust";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <Programs />
        <Trust />
        <Contact />
      </main>
    </div>
  );
}
