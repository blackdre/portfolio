import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Contact = () => {
  return (
    <div className='container py-5'>
      <div className='row min-vh-50 align-items-center'>
        <div className='col-md-12 text-center'>
          <div className='lc-block mb-4'>
            <div editable='rich'>
              <h2 className='display-3 fw-bolder text-warning'>
                Reach out to me
              </h2>
              <p className='text-info'>
                my inbox is always open.
                <br /> Whether its to discussing your project or a job
                opportunity, <br /> Whether you have a question or just want to
                say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
          </div>
          {/* <!-- /lc-block --> */}
          <div className='lc-block mb-5'>
            <a
              className='btn btn-lg btn-outline-success m-2'
              href='https://goo.gl/maps/zy3NkDKV3x4iyUkL9'
              role='button'>
              <SiX />
            </a>
            <a
              className='btn btn-lg btn-outline-primary'
              href='https://goo.gl/maps/zy3NkDKV3x4iyUkL9'
              role='button'>
              <FaEnvelope />
            </a>
            <a
              className='btn btn-lg btn-outline-info m-2'
              href='https://goo.gl/maps/zy3NkDKV3x4iyUkL9'
              role='button'>
              <FaLinkedin />
            </a>
          </div>
          {/* <!-- /lc-block --> */}
          <div className='lc-block border-top col-md-6 offset-md-3'>
            <div editable='rich'>
              <h2 className='fw-bolder'>
                <br />
              </h2>
            </div>
          </div>
          <div className='lc-block mb-4'>
            <div editable='rich'>
              <h2 className='fw-bolder'>Working Hours</h2>
            </div>
          </div>
          <div className='lc-block'>
            <div editable='rich'>
              <p>Monday to Friday: 07:00 – 19:45</p>
              <p>Saturday to Sunday: 11:00 – 17:00</p>
            </div>
          </div>
          {/* <!-- /lc-block --> */}
        </div>
        {/* <!-- /col --> */}
      </div>
    </div>
  );
};
export default Contact;
