import { FaBars } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-transparent'>
      <div className='container py-3'>
        {/* <!-- Mobile Logo --> */}
        <a className='navbar-brand d-lg-none' href=''>
          <img
            src={logo}
            width='150'
            className='align-middle me-1'
            alt='logo'
          />
        </a>
        {/* <!-- end Mobile Logo--> */}

        {/* <!-- Desktop Logo --> */}
        <div className='lc-block position-absolute start-50 translate-middle top-50 d-none d-lg-block'>
          <a editable='inline' className='navbar-brand mx-auto' href='/'>
            <img
              src={logo}
              width='200'
              height='200'
              className='d-block mx-auto img-fluid'
              alt='My Website'
            />
          </a>
        </div>
        {/* <!-- end Desktop Logo--> */}

        <div className='lc-block d-none d-lg-block'>
          <a>
            <SiGithub className='text-warning' size={24} />
          </a>
          <a>
            <SiLinkedin className='text-warning m-2' size={24} />
          </a>
          <a>
            <SiX className='text-warning' size={24} />
          </a>
        </div>

        {/* <!-- WordPress Menu --> */}
        <button
          className='navbar-toggler border-0'
          data-bs-toggle='offcanvas'
          data-bs-target='#navbarNavHamburger'
          aria-controls='navbarNavHamburger'>
          <FaBars></FaBars>
        </button>

        {/* <!-- To customize and view the offcanvas, utilize the "show" className, but make sure to remove it once you are finished. --> */}
        <div
          className='offcanvas offcanvas-end shadow bg-dark'
          tabIndex='-1'
          id='navbarNavHamburger'
          aria-labelledby='navbarNavHamburgerLabel'>
          <div className='offcanvas-header'>
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'></button>
          </div>
          <div className='offcanvas-body'>
            <div className='row'>
              <div className='col-12'>
                <div className='lc-block mb-4'>
                  <div lc-helper='shortcode' className='live-shortcode me-auto'>
                    {/* <!--  lc_nav_menu --> */}
                    <ul id='menu-menu-1' className='navbar-nav'>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom nav-item nav-item-32739'>
                        <a
                          href='https://library.livecanvas.com/starters'
                          className='nav-link '>
                          BS5 Page Templates
                        </a>
                      </li>
                      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-home nav-item nav-item-32738'>
                        <a
                          href='https://library.livecanvas.com/sections/'
                          className='nav-link '>
                          BS5 Snippets
                        </a>
                      </li>
                    </ul>
                    {/* <!-- /lc_nav_menu --> */}
                  </div>
                </div>
                <div className='lc-block d-grid gap-3'>
                  <a className='btn btn-outline-primary' href='#' role='button'>
                    Sign in
                  </a>
                  <a className='btn btn-primary' href='#' role='button'>
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END OFFCANVAS --> */}
      </div>
    </nav>
  );
};
export default Header;
