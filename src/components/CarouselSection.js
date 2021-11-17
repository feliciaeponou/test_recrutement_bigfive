
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCubes } from '@fortawesome/free-solid-svg-icons'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Card} from "react-bootstrap";


library.add(faCubes);

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  


export default function CarouselSection() {
    return (
        
        <Container >
            
            
            <br></br>
        <br></br>
        <br></br>
        
            <div >
                
                <Carousel responsive={responsive}>
                    <div>
                        <Card>
                            <Card.Header>
                                <div className="icon">
                                    <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>LOREM IPSUM</Card.Title>
                                <Card.Text>
                                    Fusce at fringilla ipsum. Curabitur eget gravida lacus. Morbi rhoncus suscipit rutrum. Proin magna ante, tincidunt at libero id, lacinia suscipit purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt tempus risus sed aliquet. Nulla facilisi. Aenean id mi velit. Nam feugiat scelerisque elit ut vestibulum. Donec eu erat ex. Quisque ornare gravida auctor.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 4</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <div className="icon">
                            <FontAwesomeIcon icon="cubes" size="3x" color="#0047b2"  />   
                        </div>
                        <p className="legend">Legend 4</p>
                    </div>
                </Carousel>
        </div>
      </Container>
    );
  }