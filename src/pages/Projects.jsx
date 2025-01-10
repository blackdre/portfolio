import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "../assets/Projects.css"; // Custom styles for the timeline

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const timelineData = [
    {
      title: "Step 1",
      description: "This is the description for step 1.",
      date: "2025-01-01",
    },
    {
      title: "Step 2",
      description: "This is the description for step 2.",
      date: "2025-02-15",
    },
    {
      title: "Step 3",
      description: "This is the description for step 3.",
      date: "2025-03-10",
    },
    {
      title: "Step 4",
      description: "This is the description for step 4.",
      date: "2025-04-20",
    },
  ];

  return (
    <Container className='timeline my-5'>
      {timelineData.map((event, index) => (
        <Row
          key={index}
          className={`timeline-row ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          }`}
          data-aos='fade-up'>
          <Col md={6} className='timeline-content'>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {event.date}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={6}
            className='d-flex justify-content-center align-items-center'>
            <div className='timeline-dot'></div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Projects;
