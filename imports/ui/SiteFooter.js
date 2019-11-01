import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      // <div className="container">

      //   <div className="text-center site-footer">
      //     <div className="container-fluid">
      //       <div className="row">
      //         <div className="col-sm">
      //           <Link to="/">
      //             <h5 className="footer-link">Home</h5>
      //           </Link>
      //         </div>
      //         <div className="col-sm">
      //           <Link to="/about">
      //             <h5 className="footer-link">About Us</h5>
      //           </Link>
      //         </div>
      //         <div className="col-sm">
      //           <Link to="/services">
      //             <h5 className="footer-link">Services</h5>
      //           </Link>
      //         </div>
      //         <div className="col-sm">
      //           <Link to="/products">
      //             <h5 className="footer-link">Products</h5>
      //           </Link>
      //         </div>
      //         <div className="col-sm">
      //           <Link to="/contact">
      //             <h5 className="footer-link">Contact</h5>
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      // </div>

      <div className="mt-1 pt-5 pb-3 footer">
        <div className="container">
          <div className="row">
            <div className="col my-auto">
              <Link to="/" className="footer-link">
                <h4>Home</h4>
              </Link>
            </div>
            <div className="col my-auto">
              <Link to="/about" className="footer-link">
                <h4>About Us</h4>
              </Link>
            </div>
            <div className="col my-auto">
              <Link to="/products" className="footer-link">
                <h4>Products</h4>
              </Link>
            </div>
            <div className="col my-auto">
              <Link to="/contact" className="footer-link">
                <h4>Contact</h4>
              </Link>
            </div>
            {/* <div className="col-7 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li>- <a href="#">Lorem ipsum</a></li>
                <li>- <a href="#">Nam mauris velit</a></li>
                <li>- <a href="#">Etiam vitae mauris</a></li>
                <li>- <a href="#">Fusce scelerisque</a></li>
                <li>- <a href="#">Sed faucibus</a></li>
                <li>- <a href="#">Mauris efficitur nulla</a></li>
              </ul>
            </div> */}
            <div className="col location text-center">
              <h4 className="mt-4">Location</h4>
              <p>16610, Bayview Ave, Newmarket</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>(905) 555-5555</p>
              <p><i className="fa fa-envelope-o mr-3"></i>email@example.com</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-5 copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default withRouter(SiteFooter);