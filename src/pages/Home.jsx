import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Formation from "../components/Formation";
import Services from "../components/Services";
import Equipe from "../components/Equipe";
import Footer from "../components/Footer";
import Partenaire from "../components/Partenaire";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Equipe />
      <Partenaire />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
