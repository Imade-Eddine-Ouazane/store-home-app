import React from 'react';
import "./header.css"
import imad from "./hero-image.png"


const Header = () => {
    return (
        <div>
            <section id="home" class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 text-content">
                            <h1>the digital service you really want</h1>
                            <p>we are the champion my friend x2
                            </p>
                            <button class="btn"><a href="#">Estimate Project</a></button>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12">
                            <img src={imad} alt="" class="img-fluid"/>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Header;