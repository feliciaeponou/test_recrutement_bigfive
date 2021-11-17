
import { Container,Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPhoneAlt,faHome,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare,faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


library.add(faPhoneAlt, faHome, faEnvelope,faLinkedin,faFacebookSquare,faTwitterSquare);

export default function Footer() {
    return (
    
<Container>
<br></br>
        <br></br>
        <br></br>
            <div className="row" >
                <div className="col-md-5">
                    <h5>2021 | Developpé par Big Five Solutions</h5>
                </div>
                <div className="col-md-2">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link><FontAwesomeIcon icon={["fab", "facebook-square"]}  size="2x" color="#0047b2"  /> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={["fab", "twitter-square"]}  size="2x" color="#0047b2"  /> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={["fab", "linkedin"]}  size="2x" color="#0047b2"  /> </Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </div>
                <div className="col-md-5">
                    <Nav defaultActiveKey="./" as="ul">
                        <Nav.Item as="li">
                        <Nav.Link href={process.env.PUBLIC_URL + '/'} className="nav-link-footer">ACCUEIL</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link href={process.env.PUBLIC_URL + '/NotreExpertise'} eventKey="link-1" className="nav-link-footer">NOTRE EXPERTISE</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link href={process.env.PUBLIC_URL + '/#contactez-nous'} eventKey="link-2" className="nav-link-footer">CONTACTEZ-NOUS</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
              
            </div>
            
        </Container>
       
        
    );
  }