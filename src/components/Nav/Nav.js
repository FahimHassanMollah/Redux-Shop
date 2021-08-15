import React from 'react'
import logo from '../../assets/images/logo.webp';
import { BsFillBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-sticky">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" className="img-fluid" style={{ width: "100%", height: "60px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="ms-auto">
                            <div className="">

                                <Link className="cart-icon-wrapper" to="/cart">
                                    <i><BsFillBagFill></BsFillBagFill></i>
                                    <div className="cart-amount">
                                        <span>1</span>
                                    </div>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
