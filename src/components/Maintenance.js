
import { Container,Button} from "react-bootstrap";
import maintenanceImage from '../includes/images/maintenance.png';
// import Home from "./Home";


export default function Maintenance() {
    return (
      <Container className="maintenance-body" fluid >
        <div className="row">
          <div className="col-md-6">
            <img src={maintenanceImage} alt="Maintenance Illustration" className="maintenance-image" />
          </div>
          <div className="col-md-6">
            <div className="vertical-align">
              <h1>Le mode maintenance est activé !!!</h1> <br></br><br></br><br></br>
             
              <Button href="/home" variant="outline-dark">Cliquez ici pour désactiver le mode maintenance</Button>
            </div>
          </div>
        </div>


        
        
      </Container>

    );
  }
  