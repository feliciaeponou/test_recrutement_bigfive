import { Form,Button} from "react-bootstrap";
import './css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCaretDown } from '@fortawesome/free-solid-svg-icons'


library.add(faCaretDown);

export default function HeroSection() {
    return (
      // <Container fluid>
      <div className="hero-bg" >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-align-center p-top-50">
            <h1>CORPORATE INC.</h1>
            <p>Faites nous savoir votre besoin !</p>
            <FontAwesomeIcon icon="caret-down" size="3x" color="#0047b2"  />   
            <div className="hero-form">
              <Form>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control className="no-border" type="text" placeholder="Saisir votre besoin ici" />
                  </div>
                </div> <br></br>
                <div className="row">
                  <div className="col-md-4">
                    <Form.Control className="no-border" type="text" placeholder="Nom et prénom(s)" />
                  </div>
                  <div className="col-md-4">
                    <Form.Control className="no-border" type="text" placeholder="Numéro de téléphone" />
                  </div>
                  <div className="col-md-4">
                    <Form.Control className="no-border" type="email" placeholder="Email" />
                  </div>
                </div>
              </Form>
             
            </div> <br></br>  
            <Button className="blue" size="lg">Contactez-nous</Button>

          </div>
          <div className="col-md-3"></div>

        </div>
        

        {/* <h1>This is the hero section ! </h1> */}
      </div>
      

      // </Container>
    );
  }