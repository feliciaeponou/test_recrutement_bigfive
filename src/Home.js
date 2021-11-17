import Header from "./includes/Header";
import HeroSection from "./includes/HeroSection";
import CarouselSection from "./includes/CarouselSection";
import MapsSection from "./includes/MapsSection";
import Footer from "./includes/Footer";



export default function Home() {
    return (
        <div>
            <Header />
            <HeroSection/>
            <CarouselSection/>
            <MapsSection/>
            <Footer/>
        </div>
       
     
    );
  }