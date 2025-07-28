import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Formation from "../components/Formation";
import Services from "../components/Services";
import Equipe from "../components/Equipe";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Equipe />
      <Footer />
    </div>
  );
}

export default Home;
