import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myImage from "./Images/myImage.jpeg";

const About = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col md={4} className="profile-picture">
          <Image src={myImage} alt="Profile Picture" fluid roundedCircle />
        </Col>
        <Col md={8} className="about-content">
          <h2 className="name">TANMOY SAHA</h2>
          <p className="introduction">
            Hello, I am a full-stack developer with a background in arts. I
            bring a unique perspective to my work, combining my artistic
            sensibilities with my technical skills. I have a passion for
            creating visually appealing and user-friendly websites and
            applications. In addition to coding, I also enjoy taking photos and
            videos, which allows me to explore my creativity in different
            mediums. With my expertise in web development and my artistic
            background, I strive to create engaging and immersive online
            experiences. I am constantly learning and keeping up with the latest
            technologies to enhance my skills and deliver high-quality results.
            I am excited to take on new challenges and collaborate on innovative
            projects.
          </p>
        </Col>
      </Row>
      <Row className="details-section">
        <Col>
          <h3 className="details-heading">Details</h3>
          <ul className="details-list">
            <li>
              <span className="details-label">Experience:</span> Fresher
            </li>
            <li>
              <span className="details-label">Education:</span> Bachelor's Of
              Arts in Education(Honours)
            </li>
            <li>
              <span className="details-label">Education:</span> Full Stack
              Development(Skill Safari)
            </li>
            <li>
              <span className="details-label">Skills:</span> HTML5, CSS3,
              Bootstrap, JavaScript, React.js
            </li>
            <li>
              <span className="details-label">Interests:</span> Photography,
              Videography, Photo editing, Video Editing, Gardening
            </li>
            <li>
              <span className="details-label">Contact:</span> Phone No -
              7602315138, Email - tanmoysaha710@gmail.com
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
