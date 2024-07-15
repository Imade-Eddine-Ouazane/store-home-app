import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"


const Navbar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="container-fluid">
                    <a class="navbar-brand navbar-brand-custom" href="#">Store Home</a>
                    <button class="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon navbar-toggler-icon-custom"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item nav-item-custom ">
                                <a class="nav-link nav-link-custom" href={"/"}>Home</a>
                            </li>
                           
                            <li class="nav-item nav-item-custom">
                                <a class="nav-link nav-link-custom" href={"/shope"} >shope
                                </a>
                            </li>
                            
                            <li class="nav-item nav-item-custom">
                                <a class="nav-link nav-link-custom" href={"/cart"}>cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;