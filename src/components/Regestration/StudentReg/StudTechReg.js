import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const StudTechReg = () => {

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
        formData.append('role', info.role);
        formData.append('id', info.id);
        formData.append('department', info.department);
        formData.append('Number', info.Number);

        fetch('https://secure-savannah-11550.herokuapp.com/reg', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Registration Successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="row container-fluid">
            <div className="col-md-12">
                <div style={{ width: '100%', background: '#F5F6FA', borderRadius: '10px', padding: '30px 50px' }} className="col-md-6 mt-5">
                    <h5 className="text-brand">Student & Teacher Registration</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Email ID" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} name="FullName" placeholder="Full Name" className="form-control" />
                            {errors.FullName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="role" placeholder="Srudent OR Teacher" className="form-control" />
                            {errors.role && <span className="text-danger">This field is required</span>}
                        </div>

                        {/* <div className="form-group">
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div> */}

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="id" placeholder="Student OR Teacher ID" className="form-control" />
                            {errors.id && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="department" placeholder="Department" className="form-control" />
                            {errors.department && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="tel" ref={register({ required: true, minLength: 6, maxLength: 12 })} name="Number" placeholder="Phone Number" className="form-control" />
                            {errors.Number && <span className="text-danger">This field is required</span>}
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

export default StudTechReg;