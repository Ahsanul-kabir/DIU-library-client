// import React, { Component } from 'react';
// import moment from 'moment'

// export default class ManageIssue extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       id: '',
//       user: [],
//       issue: '',
//       date: moment().format('L')
//     }
//   }
//   componentDidMount() {
//     fetch('http://localhost:5001/issue')
//       .then(res => res.json())
//       .then(user => this.setState({ user }, () => console.log('user fetched...', user)));
//     this.afteredit();
//   }
//   changeHandler = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   edit = (issue) => {

//     this.setState({
//       issue: issue
//     })
//     this.afteredit();
//   }
//   fetch1 = () => {
//     fetch('http://localhost:5001/issue')
//       .then(res => res.json())
//       .then(user => this.setState({ user }, () => console.log('user fetched...', user)));
//   }
//   afteredit = () => {
//     fetch("http://localhost:5001/issues", {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(
//         {
//           issue: this.state.issue,
//           date: this.state.date,
//         }
//       )
//     })
//       .catch(function (error) {
//         alert(error);
//       });
//     this.fetch1();
//   }
//   render() {
//     const { id } = this.state
//     return (
//       <div className="conatainer">
//         <h4>&nbsp;</h4>
//         <div className="row container">
//           <div className="col-sm-4">

//           </div>

//           {/* <div className="col-sm-4">
//             <div className="form-group">  <label for="id">Enter user Id:</label>
//               <input className="form-control"
//                 type="text"
//                 name="id"
//                 id="id"
//                 value={id}
//                 onChange={this.changeHandler}
//               />
//             </div>
//           </div> */}
//           <div className="col-sm-4">
//           </div>
//         </div>

//         <div className="container">
//           <table class="table ">
//             <thead>
//               <tr>
//                 <th>Readers Id</th>
//                 <th>ISBN</th>
//                 <th>Issue Date</th>
//                 <th>Reserve Date</th>
//                 <th>Return Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.user.map(us => {
//                 if (this.state.id === us.readers_id)
//                   return (
//                     <tr>
//                       <td>{us.readers_id}</td>
//                       <td>{us.ISBN}</td>
//                       <td>{us.issue_date}</td>
//                       <td>{us.reserve_date}</td>
//                       <td>{us.return_date}</td>
//                       <td data-toggle="tooltip" title="Mark As Return Book"> <button onClick={() => this.edit(us.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
//                     </tr>
//                   )
//                 else if (!this.state.id) {
//                   return (
//                     <tr>
//                       <td>{us.readers_id}</td>
//                       <td>{us.ISBN}</td>
//                       <td>{us.issue_date}</td>
//                       <td>{us.reserve_date}</td>
//                       <td>{us.return_date}</td>
//                       <td data-toggle="tooltip" title="Mark As Return Book"> <button onClick={() => this.edit(us.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
//                     </tr>
//                   )
//                 }
//               }
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }


import React, { useContext, useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageIssue = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
  }

  const [books, setbooks] = useState([]);
  const [search, setSearch] = useState('');
  const [srcBooks, setsrcBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/booksuuu')
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
        <td>{books.return_date}</td>
        <td data-toggle="tooltip" title="Mark As Return Book"> <button onClick={() => this.edit(books.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
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
                                placeholder="Search here (Member ID)"
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
                  <th>Book ID</th>
                  <th>Reader ID</th>
                  <th>Issue Date (M/D/Y)</th>
                  <th>reserve_date</th>
                  <th>return_date</th>
                  <td data-toggle="tooltip" title="Mark As Return Book"> <button onClick={() => this.edit(books.readers_id)} ><i class="fas fa-check-square"></i></button> </td>
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