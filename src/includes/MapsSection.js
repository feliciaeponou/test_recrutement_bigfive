
import { Container} from "react-bootstrap";
import './css/style.css';

export default function MapsSection() {
   
  
    return (
        <Container id="contactez-nous">
            <br></br>
        <br></br>
        <br></br>
            
              
                <div id="googlemaps"></div>
                
                <iframe className="maps" title="MapsSection" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15891.17477283731!2d-3.9967012!3d5.2948593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xddb2eec2907d9472!2sBig%20Five%20Abidjan!5e0!3m2!1sfr!2sus!4v1637131159158!5m2!1sfr!2sus"  allowfullscreen="" loading="lazy">
                    <h1>Bonjour ici</h1>
                    <div id="contactform">
                
                
                </div>
                </iframe>
            
        </Container>
    );
  }