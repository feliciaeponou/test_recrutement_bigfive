
// import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import CarouselSection from "./CarouselSection";
import MapsSection from "./MapsSection";
import { Container } from "react-bootstrap";
import Header from "./Header";


export default function Home() {
    return (
        <Container fluid>
            <Header/>
            <HeroSection/>
            <CarouselSection/>
            {/* <MapsSection/> */}
            <Footer/>
        </Container>
       
     
    );
  }