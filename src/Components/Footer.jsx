import React from 'react';
import ps from "../assets/playstore.svg"
import as from "../assets/applestore.png"

const Folder = () => {
    return (
        <>
         <footer style={{backgroundColor: "#ffcf3c", border: "2px black solid", width: "100%", margin: "0"}}>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="container-fluid my-0" style={{marginLeft: "0px", marginRight: "0px", padding: "0"}}>
    {/* Footer */}
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: "", width: "100%", margin: "0"}}>
      {/* Section: Social media */}
      <section className="text-center p-4" style={{backgroundColor: ""}}>
        {/* Left */}
        <div className='mb-3'>
          <span className="h1 text-dark text-center  ">Faster. Easier. Free
          Download the Application Now</span>
        </div>
        {/* Left */}
        {/* Right */}
        
        <div >
         <img src={ps} alt="" className='p-2'  style={{width:"25%"}}/>
         <img src={as} alt="" className='p-2' style={{width:"25%"}} />
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links */}
      <section style={{background:"#075ead"}} className='pt-3'>
        <div className="container-fluid text-center text-md-start mt-5 " >
          {/* Grid row */}
          <div className="row mt-3 ">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}} />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}} />
              <p>
                <a href="#!" className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" className="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" className="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" className="text-white">Bootstrap Angular</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}} />
              <p>
                <a href="#!" className="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" className="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" className="text-white">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" className="text-white">Help</a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}} />
              <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section >
      {/* Section: Links */}
      {/* Copyright */}
      <div className="text-center p-3" style={{background:"#075ead"}}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  </div>
</footer>
         
            
        </>
    );
}

export default Folder;
