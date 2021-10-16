import React, {useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import moment from 'moment'
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageIssue = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
  }

  const getDate = localStorage.getItem('date')
  console.log(getDate)
  const [books, setbooks] = useState([]);
  const [search, setSearch] = useState('');
  const [srcBooks, setsrcBooks] = useState([]);
  const [date, setDate] = useState(getDate)
  const [indexDate, setIndexDate] = useState();

  useEffect(() => {
    fetch('http://localhost:5001/booksManage')
      .then(res => res.json())
      .then(data => {
        setsrcBooks(data)
        setbooks(data)
      })
  }, [])


  const renderbooks = (books, index) => {
    return (
      <tr key={index}>
        <td>{books.bookID}</td>
        <td>{books.reader_id}</td>
        <td>{books.date}</td>
        <td>{books.reserve_date}</td>
        <td>{indexDate == index && getDate}</td>
        <td data-toggle="tooltip"> <ReactBootstrap.Button onClick={
          () => {
            setDate(...date,moment().format('L'))
            setIndexDate(index)
            localStorage.setItem('date', moment().format('L'))
          }}><i class="fas fa-check-square"></i>Return</ReactBootstrap.Button> </td>
      </tr>
    )
  }

  const handleChange = () => {
    let newMember = srcBooks.filter((member) => member.reader_id.startsWith(search))
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
                placeholder="Search here(Reader/Member ID)"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="form-control m-4" />
            </div>
          </div>

          <div className='p-3'>
            <ReactBootstrap.Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Reader ID</th>
                  <th>Issue Date (M/D/Y)</th>
                  <th>reserve_date</th>
                  <th>return_date</th>
                  <th>Action</th>
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
export default ManageIssue;