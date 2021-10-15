import React from 'react';
import './Brands.css'
import brand1 from '../../../resources/images/brand1.png'
import brand2 from '../../../resources/images/brand2.png'
import brand3 from '../../../resources/images/brand3.jpg'
import brand4 from '../../../resources/images/brand4.jpg'

const Brands = () => {
    return (
        <div className="container">
            <h1 style={{textAlign:"center"}}>Our Brands</h1>
            <div style={{margin:"50px 0 10px 30%"}} className="row d-flex justify-content-center">
                <div className="col-md-10 offset-md-1 brand-logo">
                    <img src={brand1} alt=""/>
                    <img src={brand4} alt=""/>
                    <img src={brand3} alt=""/>
                    <img src={brand2} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Brands;