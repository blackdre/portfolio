import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
// import "../assets/Projects.css";
import logo from "../assets/logo-with-bg.png";

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
      title: "TEFL international",
      description:
        "TEFL International is an online platform dedicated to reselling accredited TEFL (Teaching English as a Foreign Language) courses from multiple trusted providers. The website enables aspiring English teachers to easily explore, compare, and book TEFL certification programs that align with their career goals. With a user-friendly interface, customers can filter courses by location, provider, and format, making it easier than ever to find the ideal course to begin their teaching journey abroad",
      date: "2025-01-01",
      logo: `${logo}`,
      techStack: "React, Supabase, SurveyJS",
      URL: "https://teflinternational.world/",
    },
    {
      title: "Chipstech electronics",
      description: "This is the description for step 2.",
      date: "2025-02-15",
      logo: `${logo}`,
      techStack: "React, Supabase, SurveyJS",
    },
    {
      title: "Kuyanda Thare",
      description: "This is the description for step 3.",
      date: "2025-03-10",
      logo: `${logo}`,
      techStack: "React, Supabase, SurveyJS",
    },
    {
      title: "Step 4",
      description: "This is the description for step 4.",
      date: "2025-04-20",
      logo: `${logo}`,
      techStack: "React, Supabase, SurveyJS",
    },
  ];

  return (
    <Container className='timeline my-5'>
      {timelineData.map((event, index) => (
        <Row key={index} className='justify-content-center' data-aos='fade-up'>
          <Col md={8}>
            <div className='card border-warning bg-transparent mb-3 '>
              <div className='card-body'>
                <h1 className='card-title text-warning'>{event.title}</h1>
                <hr className='text-warning border-warning' />
                <Row>
                  <Col md={3}>
                    <img
                      src={event.logo}
                      alt={event.title}
                      className='img-fluid'
                    />
                  </Col>
                  <Col md={9}>
                    <p className='card-text text-info'>{event.description}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Projects;
