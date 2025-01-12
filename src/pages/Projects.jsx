import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
// import "../assets/Projects.css";
import logo from "../assets/logo-with-bg.png";
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
      logo: `${logo}`,
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
      title: "Chipstech electronics",
      description: "This is the description for step 2.",
      date: "2025-02-15",
      logo: `${logo}`,
      techStack: [
        <SiHtml5 key='html5' />,
        <SiCss3 key='css3' />,
        <SiJavascript key='javascript' />,
        <SiReact key='react' />,
        <SiSupabase key='supabase' />,
        <SiDigitalocean key='digitalocean' />,
      ],
    },
    {
      title: "Kuyanda Thare",
      description: "This is the description for step 3.",
      date: "2025-03-10",
      logo: `${logo}`,
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
      title: "Step 4",
      description: "This is the description for step 4.",
      date: "2025-04-20",
      logo: `${logo}`,
      techStack: [<SiReact key='react' />, <SiSupabase key='supabase' />],
    },
  ];

  return (
    <Container className='timeline my-5'>
      {timelineData.map((event, index) => (
        <Row key={index} className='justify-content-center'>
          <Col md={8} data-aos='fade-up'>
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
