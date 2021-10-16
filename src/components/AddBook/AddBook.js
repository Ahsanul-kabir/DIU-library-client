import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Topbar from '../Dashboard/Topbar/Topbar';

const AddBook = () => {
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
        formData.append('serial', info.serial);
        formData.append('bookName', info.bookName);
        formData.append('category', info.category);
        formData.append('writer', info.writer);
        formData.append('bookID', info.bookID);

        fetch('https://secure-savannah-11550.herokuapp.com/addBook', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Book Data Insert Successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <Topbar></Topbar>
                <div style={{ width: '100%', background: '#F5F6FA', borderRadius: '10px', padding: '30px 50px' }} className="col-md-6 mt-5">
                    <h5 className="text-brand">Add Book</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="serial" placeholder="Serial" className="form-control" />
                            {errors.serial && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="bookName" placeholder="Book Name" className="form-control" />
                            {errors.bookName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="category" placeholder="Book Category" className="form-control" />
                            {errors.category && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="writer" placeholder="Writer" className="form-control" />
                            {errors.writer && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" ref={register({ required: true })} name="bookID" placeholder="Book ID" className="form-control" />
                            {errors.bookID && <span className="text-danger">This field is required</span>}
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

export default AddBook;