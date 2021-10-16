import './Footer.css';
import React from 'react';
import logo from '../../../resources/images/logos/logo-f.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="Footer">
            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={logo} alt="" className="pb-4" />
                        <p className="text-white">
                            Bangladesh
                        </p>
                        <p className="text-white">
                            Official: diu.lobrary@info.com
                        </p>
                        <p className="text-white">
                            Helpline: +8801753458322
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3 style={{ color: 'orange' }} className="pb-4">Quick Links</h3>
                        <p className="text-white">
                            Dashboard
                        </p>
                        <p className="text-white">
                            My Books
                        </p>
                        <p className="text-white">
                            Developers Panel
                        </p>
                        <p className="text-white">
                            About Us
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h3 style={{ color: 'orange' }} className="pb-4">About Us</h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil labore perspiciatis numquam possimus provident amet?
                        </p>
                        <FaFacebookSquare className="footer-icons" />
                        <FaInstagramSquare className="footer-icons" />
                        <FaTwitterSquare className="footer-icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;