import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./header.css"
import ii1 from "../../img/sale.jpg"
import ii2 from "../../img/solde.jpg"
import ii3 from "../../img/blf.jpg"

function Header() {
    return (

        <div className="my">
            <section id="Home">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ii1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Enjoy a seamless shopping experience with our user-friendly website, secure payment options, and fast shipping. Join our community of satisfied customers today and make Store Home your go-to destination .</p>                                          
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ii2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <div className="mask">
                                    <ul>
                                        <li className="anim1">
                                            <div className="quote">Hello, this is a quote from a person.</div>
                                            <div className="source">- Person</div>
                                        </li>
                                    </ul>
                                </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ii3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className="mask">
                                    <ul>
                                        <li className="anim1">
                                            <div className="quote">Hello, this is a quote from a person.</div>
                                            <div className="source">- Person</div>
                                        </li>
                                    </ul>
                                </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </section>
        </div>
    )
}
export default Header;