import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImage from "./Images/myImage.jpeg";
import Book from "./Images/Book.png";
import Movie from "./Images/Movie.png";
import Quiz from "./Images/Quiz.png";
import Recipe from "./Images/Recipe.png";

const Home = () => {
  const [showName, setShowName] = useState(true);

  const toggleName = () => {
    setShowName(!showName);
  };

  const projectsData = [
    {
      title: "Quiz App",
      image: Quiz,
      netlifyLink: "https://heroic-gelato-7eb042.netlify.app/",
    },
    {
      title: "Movie-Search App",
      image: Movie,
      netlifyLink: "https://rococo-alpaca-253a1d.netlify.app/",
    },
    {
      title: "Book-Finder App",
      image: Book,
      netlifyLink: "https://magnificent-mandazi-f4b55b.netlify.app/",
    },
    {
      title: "Recipe-Search App",
      image: Recipe,
      netlifyLink: "https://poetic-semolina-d028d9.netlify.app/",
    },
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col md={8}>
          <Card className={`name-container ${showName ? "show" : "hide"}`}>
            <Card.Body>
              <Card.Title>
                <h1 className="name" onClick={toggleName}>
                  I AM
                  <br /> TANMOY SAHA
                </h1>
                <h2
                  className={`details ${showName ? "hide" : "show"}`}
                  onClick={toggleName}
                >
                  I AM A
                  <br />
                  FULL STACK WEB DEVELOPER
                  <br />
                  Passionate about creating innovative and scalable web
                  solutions
                </h2>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="image-container">
          <Card>
            <Card.Img
              variant="top"
              src={myImage}
              alt="My Portfolio"
              className="rounded-image"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        {projectsData.map((project, index) => (
          <Col md={3} key={index}>
            <Card className="mb-3">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <a
                  href={project.netlifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
