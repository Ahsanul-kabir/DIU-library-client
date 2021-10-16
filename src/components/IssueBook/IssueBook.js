import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

class IssueBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookID: '',
            reader_id: '',
            date: moment().format('L'),
            reserve_date: '',
            return_date:'',
            book: [],
            reader: [],
        }
    }
    componentDidMount() {
        fetch('http://localhost:5001/books')
            .then(res => res.json())
            .then(book => this.setState({ book }));
        // .then(book => this.setState({ book }, () => console.log('book fetched...', book)));
        fetch('http://localhost:5001/members')
            .then(res => res.json())
            .then(reader => this.setState({ reader }));
        // .then(reader => this.setState({ reader }, () => console.log('reader fetched...', reader)));
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:5001/api/tregpost', this.state)
            .then(response => {
                alert('Book Issue Successfully')
                // console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { bookID, reader_id,reserve_date } = this.state
        return (
            <section>
                <div style={containerStyle} className="row container-fluid">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-10 p-5">
                        <form onSubmit={this.submitHandler}>

                            <div className="form-group">
                                <label for="tid">Enter bookID:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="bookID"
                                    value={bookID}
                                    onChange={this.changeHandler}
                                    required
                                />
                            </div>
                            {this.state.book.map(book => {
                                if (this.state.bookID === book.bookID)
                                    return (
                                        <h4>Book: {book.bookName} Is Available</h4>
                                    )
                            })}

                            <div className="form-group">  <label for="reader_id">Enter Reader Id:</label>
                                <input className="form-control"
                                    type="text"
                                    name="reader_id"
                                    value={reader_id}
                                    onChange={this.changeHandler}
                                    required
                                />
                            </div>
                            {this.state.reader.map(re => {
                                if (this.state.reader_id === re.id)
                                    return (
                                        <h4>Name: {re.FullName} Is Verified</h4>
                                    )
                            })}


                            <div className="form-group">  <label for="reserve_date">Reserve Date:</label>
                                <input className="form-control"
                                    type="text"
                                    name="reserve_date"
                                    value={reserve_date}
                                    onChange={this.changeHandler}
                                    required
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default IssueBook