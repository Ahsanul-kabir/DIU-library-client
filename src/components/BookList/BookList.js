import React, { useContext, useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookList = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }

    const [books, setbooks] = useState([]);
    const [search, setSearch] = useState('');
    const [srcBooks, setsrcBooks] = useState([]);

    useEffect(() => {
        fetch('https://secure-savannah-11550.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setsrcBooks(data)
                setbooks(data)
            })
    }, [])

    const renderbooks = (books, index) => {
        return (
            <tr key={index}>
                <td>{books.serial}</td>
                <td>{books.bookName}</td>
                <td>{books.category}</td>
                <td>{books.writer}</td>
                <td>{books.bookID}</td>
            </tr>
        )
    }

    const handleChange = () => {
        let newMember = srcBooks.filter((member) => member.serial.startsWith(search))
        setbooks(newMember)
    }
    useEffect(() => {
        handleChange()
    }, [search])

    return (
        <section>
            <div style={containerStyle} className="row container-fluid">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                    <div class="input-group">
                        <div class="form-outline">
                            <input
                                id="search-focus"
                                type="text"
                                id="form1"
                                placeholder="Search here"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                className="form-control m-3" />
                        </div>
                    </div>

                    <div className='p-3'>
                        <ReactBootstrap.Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Book Name</th>
                                    <th>Book Category</th>
                                    <th>Writer</th>
                                    <th>Book ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(renderbooks)}
                            </tbody>
                        </ReactBootstrap.Table>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BookList;