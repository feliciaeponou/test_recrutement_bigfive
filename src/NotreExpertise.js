
import { Container } from "react-bootstrap";
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import expertiseImage from './includes/images/expertise.png'


export default function NotreExpertise() {
    return (
      <Container >
        <Header/>
        <div className="row">
          <div className="col-md-6">
            <img src={expertiseImage} alt="expertise Illustration" className="expertise-image" />
          </div>
          <div className="col-md-6 vertical-align">
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu nunc, tristique sit amet neque non, dapibus suscipit risus. Donec lobortis aliquet nisl, eu lacinia nisi lacinia vel. Aenean aliquam orci augue, id vestibulum nibh finibus sed. Curabitur nec vulputate massa. Etiam libero massa, hendrerit vitae convallis sit amet, venenatis non massa. Curabitur porttitor purus a tortor tincidunt tempor. Fusce posuere vehicula lectus sit amet auctor. Suspendisse at eros odio. Phasellus euismod nulla non orci varius, a interdum neque dapibus. Morbi et venenatis enim, at euismod orci. In porta congue eros rutrum dapibus.</p>
          </div>
        </div>  
        <div className="row bg-black">
          <div className="col-md-6 vertical-align">
            <h1 className="white">LOREM IPSUM</h1>
            <p className="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu nunc, tristique sit amet neque non, dapibus suscipit risus. Donec lobortis aliquet nisl, eu lacinia nisi lacinia vel. Aenean aliquam orci augue, id vestibulum nibh finibus sed. Curabitur nec vulputate massa. Etiam libero massa, hendrerit vitae convallis sit amet, venenatis non massa. Curabitur porttitor purus a tortor tincidunt tempor. Fusce posuere vehicula lectus sit amet auctor. Suspendisse at eros odio. Phasellus euismod nulla non orci varius, a interdum neque dapibus. Morbi et venenatis enim, at euismod orci. In porta congue eros rutrum dapibus.</p>
          </div>
          <div className="col-md-6">
            <img src={expertiseImage} alt="expertise Illustration" className="expertise-image" />
          </div>
        </div>
        <Footer/>
      </Container>
    );
  }