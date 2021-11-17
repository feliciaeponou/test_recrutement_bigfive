import { Container,Button,Nav} from "react-bootstrap";
import logo from '../includes/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPhoneAlt,faHome,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare,faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faPhoneAlt, faHome, faEnvelope,faLinkedin,faFacebookSquare,faTwitterSquare);

export default function Header() {
    return (

        <Container fluid>

    <div className="row">
      <div className="col-md-2">
        <div className="rotated-div">
        <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="col-md-10 h-150">
        <div className="row header-grey pd-l-200"> 
          <div className="col-md-3 ">
            <div className="row v-center">
              <div className="col-md-3">
                <FontAwesomeIcon icon="phone-alt" size="3x" color="#0047b2"  />    
              </div>
              <div className="col-md-9">
                <p> <span className="light-grey"> Contacts :  </span><br></br> <span className="bold"> +33 7 55 15 78 18 </span> </p>
               
              </div>
            </div>
          </div>
          
          <div className="col-md-3 border-left-grey">
            <div className="row v-center">
               
                <div className="col-md-3">
                  <FontAwesomeIcon icon="home" size="3x" color="#0047b2"  />    
                </div>
                <div className="col-md-9">
                  <p> <span className="light-grey"> Localisation :  </span><br></br> <span className="bold"> Mordor Est. </span> </p>
                
                </div>
            </div>
          </div>
          <div className="col-md-3 border-left-grey ">
          
            <div className="row v-center">
           
                <div className="col-md-3">
                  <FontAwesomeIcon icon="envelope" size="3x" color="#0047b2"  />    
                </div>
                <div className="col-md-9">
                  <p> <span className="light-grey"> Mail :  </span><br></br> <span className="bold"> corpo@corpo.test </span> </p>
                
                </div>
            </div>
          </div>
          <div className="col-md-3 btn-contact-us">
            <Button className="blue" size="lg">Contactez-nous</Button>
          </div>
        </div>
        <div className="row header-blue pd-l-200 v-center" >

          <div className="row ">
            <div className="col-md-8">
              <Nav as="ul">
                <Nav.Item as="li">
                  <Nav.Link href={process.env.PUBLIC_URL + '/'} className="nav-link">ACCUEIL</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href={process.env.PUBLIC_URL + '/NotreExpertise'} eventKey="link-1" className="nav-link">NOTRE EXPERTISE</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href={process.env.PUBLIC_URL + '/#contactez-nous'} eventKey="link-2" className="nav-link">CONTACTEZ-NOUS</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href={process.env.PUBLIC_URL + '/maintenance'} eventKey="link-2" className="nav-link">MAINTENANCE</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-md-4">
            <Nav className="justify-content-end" >
              <Nav.Item>
                <Nav.Link><FontAwesomeIcon icon={["fab", "facebook-square"]}  size="2x" color="#ffffff"  /> </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={["fab", "twitter-square"]}  size="2x" color="#ffffff"  /> </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={["fab", "linkedin"]}  size="2x" color="#ffffff"  /> </Nav.Link>
              </Nav.Item>
              
            </Nav>
            
            </div>
          </div>
          
          
        </div>
      </div>

    </div>

</Container>
      
    );
  }