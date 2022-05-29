import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
  DiBootstrap,
  DiHtml5,
  
} from "react-icons/di";
import {SiRedux,SiExpress,SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (<div id="skills" >
    <br/>
    <br/>
    <br/>
    <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
    <span className="purple">Skills</span> 
    </h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>




   

          
      
      {/* <Col xs={4} md={2} className="tech-icons" styles ={{width:"2230" ,height :"35"}}>
        <DiNodejs />
       
        <p>Node JS</p>
      </Col> */}

       <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>Express</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <  DiNodejs/>
        <p>Node</p>
      </Col>




         
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVo6gT3G03Ly_rt_BH-_fcUyhd2nkpSFdPw7ItkXDP-D_xtJ3U7VkHiETwWsSqAD8eSc&usqp=CAU" alt="hibernate" width="30" height="30"/> */}
        <p>Bootstrap</p>
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </Col> */}

     
    {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <img scr="https://i.ibb.co/vqrkZDc/icons8-mysql-logo-50.png"/> */}
        {/* <img src="https://i.ibb.co/0GhdyF2/icons8-mysql-logo-50-1.png"/>
        <p>MySQL</p> */}
      {/* </Col> */}

    {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>React</p>
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>Express</p>
      </Col> */}



      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /> */}

    {/* <img src="https://i.ibb.co/GPyftmJ/icons8-spring-logo-48-1.png" alt="spring" width="30" height="30"/> */}
        {/* <p>Css</p>
      </Col> */}
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>Html</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <p>Github</p>
      </Col>
   
    </Row>
    </div>
  );
}

export default Techstack;