import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import StudentList from './StudentList'
import CampusList from './CampusList'
import AddStudentForm from './AddStudentForm'
import AddCampusForm from './AddCampusform'

export default class Root extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <nav>
          <NavLink to="/home"> Home</NavLink>
          <NavLink to="/students"> Students</NavLink>
        </nav>
          <Route path="/home" component={CampusList} />
          <Route path ="/add/campus" component={AddCampusForm} />
          
          <Route path="/students" component={StudentList} />
          <Route path="/add/students" component={AddStudentForm} />
          
      </div>
    )
  }
}