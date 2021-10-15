import React, { useContext, useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Members = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }

    const [members, setmembers] = useState([]);
    const [search, setSearch] = useState('');
    const [srcMember, setSrcMember] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/members')
            .then(res => res.json())
            .then(data => {
                setSrcMember(data)
                setmembers(data)
            })
    }, [])

    const renderMembers = (members, index) => {
        return (
            <tr key={index}>
                <td>{members.id}</td>
                <td>{members.email}</td>
                <td>{members.FullName}</td>
                <td>{members.role}</td>

                <td>{members.department}</td>
                <td>{members.Number}</td>
            </tr>
        )
    }

    const handleChange = () => {
        let newMember = srcMember.filter((member) => member.id.startsWith(search))
        setmembers(newMember)
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
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Full Name</th>
                                    <th>Role</th>
                                    <th>Department</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(renderMembers)}
                            </tbody>
                        </ReactBootstrap.Table>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Members;