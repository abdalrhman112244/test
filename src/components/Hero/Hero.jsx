import { Container, Row } from "react-bootstrap";
import "./HeroStyle.css"
import Button from 'react-bootstrap/Button';
import hero from './../../assets/img/hero-img.png'
const Hero = () => {
    return (
        <div className="Hero">
            <Container>
                <Row>
                    <div className="desc col-md-6">
                        <h1 className="text-white">Better Solutions For Your Business</h1>
                        <p>We are team of talented designers making websites with Bootstrap</p>
                        <Button variant="info" className="BtnHero text-white">Info</Button>
                    </div>
                    <div className="thePhoto col-md-6">
                        <img src={hero} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Hero