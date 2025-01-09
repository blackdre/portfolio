const About = () => {
  return (
    <div
      className='container'
      style={{ paddingTop: "10vh;padding-bottom:10vh" }}>
      <div className='row align-items-center px-2'>
        <div className='col-12 col-md-7 col-lg-6'>
          <div className='lc-block mb-4'>
            <div>
              <h1>The quick brown fox jumps.</h1>
              <p>
                Aenean vel nisi in ipsum congue fermentum et ut arcu. Proin leo
                diam, vulputate eu tellus ac, mattis cursus nunc. Aenean vel
                nisi in ipsum congue fermentum et ut arcu. Proin leo diam,
                vulputate eu tellus ac, mattis cursus nunc.
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
              src='https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_connected_world_wuay.svg'
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
