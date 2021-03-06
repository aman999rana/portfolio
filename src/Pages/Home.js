import aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../Assets/aman.jpeg";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  useEffect(() => {
    aos.init({duration:5000});
  },[]);
  return (
    <div data-aos="fade-right">
    <section id="home"> 
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              {/* <img src={myImg} alt="home pic" className="img-fluid" /> */}
              <img src={myImg} alt="home pic" className="img-fluid" />
            </Col>
            <Col md={7} className="home-header">
              <h1  className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br"> Aman Rana</strong>
              </h1>

              <div style={{  textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            
            
          </Row>
        </Container>    
      </Container>
      <SelfIntro/>
      
    </section>
    </div>
  );
}

export default Home;