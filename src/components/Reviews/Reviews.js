import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';


const Reviews = () => {
    const [info, setInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();



    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('email', info.email);
        formData.append('FullName', info.FullName);
        formData.append('description', info.description);

        fetch('https://secure-savannah-11550.herokuapp.com/addreview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Review Added')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="row container-fluid">
            <div className="col-md-12">
                <div style={{ width: '100%', background: 'gray', borderRadius: '10px', padding: '30px 50px', margin:'0 auto'}} className="col-md-6 mt-5">
                    <h5 className="text-brand"><h1 className="dashboard-title">Give A Review</h1></h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Email ID" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="FullName" placeholder="Your Name" className="form-control" />
                            {errors.FullName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" ref={register({ required: false })} placeholder="Description" className="form-control" name="description" id="" cols="10" rows="3"></textarea>
                        </div>

                        <div className="form-group text-right">
                            <button type="submit" className="btn main-btn" style={{ textTransform: 'uppercase' }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;