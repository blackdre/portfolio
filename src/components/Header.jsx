import { FaBars } from "react-icons/fa";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import logo from "../assets/logo.png";
import Menu from "./Menu";

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

        {/* <!-- Offcanvas --> */}
        <Menu />
        {/* <!-- END OFFCANVAS --> */}
      </div>
    </nav>
  );
};
export default Header;
