import Bookings from "./components/Bookings/Bookings";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const Home:React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Bookings />
    </div>
  );
}

export default Home;