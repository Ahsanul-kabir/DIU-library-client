import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import StudTechReg from './components/Regestration/StudentReg/StudTechReg';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Members from './components/Members/Members';
import AddBook from './components/AddBook/AddBook';
import BookList from './components/BookList/BookList';
import IssueBook from './components/IssueBook/IssueBook';
import ManageIssue from './components/ManageIssue/ManageIssue';
import ManageReview from './components/Reviews/ManageReview';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/reg">
          <StudTechReg></StudTechReg>
        </Route>
        <Route path="/memberList">
          <Members></Members>
        </Route>
        <Route path="/addBook">
          <AddBook></AddBook>
        </Route>
        <Route path="/bookList">
          <BookList></BookList>
        </Route>
        <Route path="/issueBook">
          <IssueBook></IssueBook>
        </Route>
        <Route path="/manageIssue">
          <ManageIssue></ManageIssue>
        </Route>
        <Route path="/manageReview">
          <ManageReview></ManageReview>
        </Route>

        {/* <PrivateRoute path="/dashboard">
        <Sidebar></Sidebar>
        </PrivateRoute> */}

        <Route path="/dashboard">
        <Sidebar></Sidebar>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
