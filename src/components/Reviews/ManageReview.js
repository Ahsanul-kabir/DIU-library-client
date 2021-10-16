import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Topbar from '../Dashboard/Topbar/Topbar';

const ManageReview = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://secure-savannah-11550.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])


    const manageReview = (reviews, index) => {
        return (
            <div class="card m-4">
                <div class="card-header">
                    Members Review
                </div>
                <div class="card-body">
                    <h5 class="card-title">Member Name: {reviews.FullName}</h5>
                    <p class="card-text">{reviews.description}</p>
                </div>
            </div>
        )
    }

    return (
        <section>
            <div style={containerStyle} className="row container-fluid">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                <Topbar></Topbar>
                    <div className='p-3'>
                        {reviews.map(manageReview)}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ManageReview;