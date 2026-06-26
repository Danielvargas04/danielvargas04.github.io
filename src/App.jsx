// App es el componente raíz: solo apila las 3 secciones en orden.
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
