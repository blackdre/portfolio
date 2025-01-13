import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
// import "../assets/Projects.css";
import tefl from "../assets/logo-with-bg.png";
import thare from "../assets/thare.png";
import chips from "../assets/chips.png";

import {
  SiApache,
  SiCss3,
  SiDigitalocean,
  SiDjango,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiResend,
  SiSlack,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

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
      logo: `${tefl}`,
      techStack: [
        <SiHtml5 key='html5' className='text-primary' />,
        <SiCss3 key='css3' className='text-warning' />,
        <SiJavascript key='javascript' />,
        <SiReact key='react' />,
        <SiSupabase key='supabase' />,
        <SiDigitalocean key='digitalocean' />,
        <SiGithub key='github' />,
        <SiResend key='resend' />,
      ],
      URL: "https://teflinternational.world/",
    },
    {
      title: "Kuyanda Thare",
      description:
        "Kuyanda Commodities is a company that is in the funeral insurance business. Kuyanda thare is their funeral insurance management app that allows them to save and manage their customers data. It also allows them to manage their funeral policies and payments and stokvels.",
      date: "2025-03-10",
      logo: `${thare}`,
      techStack: [
        <SiHtml5 key='html5' />,
        <SiCss3 key='css3' />,
        <SiJavascript key='javascript' />,
        <SiPython key='python' />,
        <SiDjango key='django' />,
        <SiRabbitmq key='rabbitmq' />,
        <SiRedis key='redis' />,
        <SiPostgresql key='supabase' />,
        <SiDocker key='docker' />,
        <SiGithub key='github' />,
        <SiLinux key='linux' />,
        <SiApache key='apache' />,
      ],
    },
    {
      title: "Chipstech electronics",
      description:
        "Chipstech is a small electronics repair shop located in Harrismith FS, South Africa. They are a small business that does repairs on electronics such as laptops, phones, and other electronics. They also do repairs on printers and other electronics. They are a small business that does repairs on electronics such as laptops, phones, and other electronics. They also do repairs on printers and other electronics.",
      date: "2025-04-20",
      logo: `${chips}`,
      techStack: [
        <SiHtml5 key='html5' />,
        <SiCss3 key='css3' />,
        <SiJavascript key='javascript' />,
        <SiReact key='react' />,
        <SiSupabase key='supabase' />,
        <SiDigitalocean key='digitalocean' />,
      ],
    },
  ];

  return (
    <Container className='timeline my-5'>
      {timelineData.map((event, index) => (
        <Row key={index} className='justify-content-center'>
          <Col md={8} data-aos='fade-up'>
            <div className='card border-warning bg-transparent mb-3 '>
              <div className='card-body'>
                <h1 className='card-title'>
                  <a className='nav nav-link text-warning' href={event.URL}>
                    {event.title}
                  </a>
                </h1>
                <hr className='text-warning border-warning' />
                <Row>
                  <Col md={3}>
                    <a href={event.URL} target='_blank' rel='noreferrer'>
                      <img
                        src={event.logo}
                        alt={event.title}
                        className='img-fluid'
                      />
                    </a>
                  </Col>
                  <Col md={9}>
                    <h5 className='card-text text-info'>{event.description}</h5>
                    <div className='lc-block'>
                      <h3 className='text-light'>Tools / tech</h3>
                      {/* Buttons */}
                      {event.techStack.map((tech, index) => (
                        <a
                          key={index}
                          className='btn btn-outline-success btn-lg mx-1 mb-2'
                          style={{ borderRadius: "0px" }}>
                          {tech}
                        </a>
                      ))}
                    </div>
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
