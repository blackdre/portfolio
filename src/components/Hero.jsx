import {
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
  SiReact,
  SiSlack,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Canvas } from "@react-three/fiber";
import Me from "../assets/untitled.glb";
import Model from "./Model";
import { Bounds, Environment, OrbitControls } from "@react-three/drei";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className='container mt-2'>
      <div className='row flex-lg-row-reverse align-items-center bg-transparent col-xxl-10 mx-auto py-4'>
        <div className='col-lg-6'>
          <div className='' style={{ width: "100%", height: "75vh" }}>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 10, near: 0.1, far: 1000 }}>
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset='sunset' />
              {/* GLB Model */}
              <Bounds fit clip observe margin={1}>
                <Model path={Me} />
              </Bounds>
              <OrbitControls /> {/* Enables mouse control */}
            </Canvas>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='mb-4'>
            <div>
              <h1 className='rfs-30 fw-bold text-warning'>
                Hi I&apos;m Blessing
              </h1>
            </div>
          </div>
          <div className='mb-4'>
            <div>
              <p className='lead text-info'>
                &quot;Choose a job you love, and you will never have to work a
                day in your life.&quot; - Confucius
              </p>
            </div>
          </div>

          <div className='lc-block'>
            <div className='lc-block'>
              <p className='text-info'>Techstack/Tools</p>
              {/* Buttons */}
              <a
                className='btn btn-outline-primary btn-sm'
                style={{ borderRadius: "0" }}>
                <SiHtml5 />
              </a>
              <a
                className='btn btn-outline-secondary btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiCss3 />
              </a>
              <a
                className='btn btn-outline-warning btn-sm'
                style={{ borderRadius: "0px" }}>
                <SiJavascript />
              </a>
              <a
                className='btn btn-outline-info btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiTypescript />
              </a>
              <a
                className='btn btn-outline-info  btn-sm'
                style={{ borderRadius: "0px" }}>
                <SiReact />
              </a>

              <a
                className='btn btn-outline-warning btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiPython />
              </a>
              <a
                className='btn btn-outline-primary btn-sm '
                style={{ borderRadius: "0px" }}>
                <SiDjango />
              </a>
              <a
                className='btn btn-outline-light btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiPostgresql />
              </a>
            </div>
            <div className='lc-block'>
              {/* Buttons */}
              <a
                className='btn btn-outline-info btn-sm'
                style={{ borderRadius: "0px" }}>
                <SiLinux />
              </a>
              <a
                className='btn btn-outline-warning btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiPostman />
              </a>
              <a
                className='btn btn-outline-info btn-sm'
                style={{ borderRadius: "0px" }}>
                <SiSlack />
              </a>
              <a
                className='btn btn-outline-success btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiSupabase />
              </a>
              <a
                className='btn btn-outline-info btn-sm '
                style={{ borderRadius: "0px" }}>
                <SiDocker />
              </a>
              <a
                className='btn btn-outline-primary btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiDigitalocean />
              </a>
              <a
                className='btn btn-outline-light btn-sm '
                style={{ borderRadius: "0px" }}>
                <SiGithub />
              </a>
              <a
                className='btn btn-outline-danger btn-sm m-2'
                style={{ borderRadius: "0px" }}>
                <SiGitlab />
              </a>
            </div>

            <div className='lc-block'>
              <a
                className='btn btn-outline-warning'
                style={{ borderRadius: "0px" }}>
                CV <FaDownload />
              </a>
              <Button
                variant='outline-primary'
                className='m-2'
                style={{ borderRadius: "0px" }}>
                Projects
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
