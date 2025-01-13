import HeadingText from "../components/HeadingText";
import bless from "../assets/bless.png";

const About = () => {
  return (
    <div
      className='container'
      style={{ paddingTop: "10vh;padding-bottom:10vh" }}>
      <div className='row align-items-center px-2'>
        <div className='col-12 col-md-7 col-lg-6'>
          <div className='lc-block mb-4'>
            <div>
              <h1 className='rfs-30 fw-bold text-warning'>More about me</h1>
              <p className='lead text-info'>
                I am a Software Developer who is interested in Full Stack and
                Python Engineer roles. I am most comfortable working with
                Python, Django and React, however, I am open to working with and
                learning new technologies. I&apos;m looking for a challenge,
                growth and to be part of a team. I feel that I have learned a
                lot on my own, but to truly master my trade I need to be a part
                of an organization. I&apos;m motivated, passionate, and driven
                to deliver the only thing missing is a workplace.
              </p>
            </div>
          </div>
          {/* <!-- /lc-block --> */}
          <div className='lc-block d-flex mb-5'>
            <div className='pe-3'>
              <h3 className='h2 mb-0 text-secondary'>100%</h3>
              <span className='mb-0 text-muted'> Satisfaction </span>
            </div>
            <div className='border-start'></div>
            <div className='px-3'>
              <h3 className='h2 mb-0 text-secondary'>24/7</h3>
              <span className='mb-0 text-muted'> Support </span>
            </div>
            <div className='border-start'></div>
            <div className='ps-3'>
              <h3 className='h2 mb-0 text-secondary'>+40k</h3>
              <span className='mb-0 text-muted'> Products </span>
            </div>
          </div>
          {/* <!-- /lc-block --> */}
        </div>
        {/* <!-- /col --> */}
        <div className='col-12 col-md-5 col-lg-6'>
          <div className='lc-block'>
            <img
              alt=''
              className='img-fluid mx-auto d-block'
              src={bless}
              loading='lazy'
            />
          </div>
          {/* <!-- /lc-block --> */}
        </div>
        {/* <!-- /col --> */}
      </div>
    </div>
  );
};
export default About;
