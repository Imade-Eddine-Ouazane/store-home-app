import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12 col-sm-12">
                            <p class="logo"><i class="bi bi-chat"></i> WisdomWave</p>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <ul class="d-flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-12 col-sm-12">
                            <p>&copy;2023_WisdomWave</p>
                        </div>

                        <div class="col-lg-1 col-md-12 col-sm-12">
                     

                            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
                                class="bi bi-arrow-up-short"></i></a>
                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
}
export default Footer;