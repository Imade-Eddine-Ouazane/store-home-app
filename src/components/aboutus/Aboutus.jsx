import React from 'react';

import "./aboutus.css"
import n1 from "../../img/rrr.jpg";
function Aboutus() {
  return (
    <div>
      <section id="About_Us">
      <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img src={n1} alt="" className='img-fluid' />
                    
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 text-content">
                    <h3>who we are</h3>
                    <h1>We are a company dedicated to providing the best service possible</h1>

                    <p>Enjoy a seamless shopping experience with our user-friendly website, secure payment options, and fast shipping. Join our community of satisfied customers today and make Store Home your go-to destination for [product category or service].</p>
                    <a href="">Happy shopping!</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
  }
export default Aboutus;