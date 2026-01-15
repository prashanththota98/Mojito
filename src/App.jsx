import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="bg-black min-h-screen overflow-y-hidden">
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Contact />
    </main>
  );
};

export default App;
