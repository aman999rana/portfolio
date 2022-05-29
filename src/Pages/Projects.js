// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import cred  from '../Assets/credo_pic.png'
import expidea from '../Assets/expidea.png'

function Projects() {
  useEffect(() => {
    aos.init({duration:5000});
  },[]);
  return (
       <div data-aos="fade-right">
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              // imgPath="porfolio-react\src\Assets\credo_pic.png"
              imgPath={cred}
              title="Credo Beauty"
              description="CredoBeauty is an E-commerce platform,Where they are building a destination where one can find the most comprehensive collection of the most beautiful, safe and effective beauty products in the world."
              techD="Html | Advance Javascript | Css "
              link="luxury-otter-de9ba2.netlify.app/"
              a="https://github.com/FloatingHeart7/creado.git"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              // imgPath="https://i.ibb.co/Hgm2WYb/Whats-App-Image-2022-04-28-at-1-37-33-PM.jpg"
              imgPath={expidea}
              title="Expidea clone"
              description="Expedia Group, Inc. is an American online travel shopping company for consumer and small business travel."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | Reactjs "
              link="https://glittering-sopapillas-cbd15c.netlify.app/"
              a="https://github.com/Papil123/Expedia-clone"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/svBqmGq/youtube.png"
              title="Youtube"
              description="This is the clone of youtube, which is a free video sharing website that makes it easy to watch online videos.."
              tech="Tech-Stacks"
              techD="javascript | html | css | api "
              link="https://youtube-clone-topaz-six.vercel.app/"
              a="https://github.com/jatinsharma9871/youtube-clone"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
    </div>
  );
}
export default Projects;
