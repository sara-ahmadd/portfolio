import "./css/main.css";
import About from "./components/About";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      {/*<Testimonials />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
