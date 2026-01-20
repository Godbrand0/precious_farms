import {
  Navbar,
  Hero,
  About,
  Products,
  Services,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="overflow-x-hidden font-['Arlon',_'Inter',_system-ui,_sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
