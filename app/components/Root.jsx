import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import StudentList from './StudentList'
import Student from './Student'
import CampusList from './CampusList'
import Campus from './Campus'
import AddStudentForm from './AddStudentForm'
import AddCampusForm from './AddCampusform'
import {fetchAllCampuses, fetchAllStudents} from '../reducers'
import store from '../store'

export default class Root extends Component {
  constructor(){
    super()
  }

  componentDidMount(){ 
    store.dispatch(fetchAllCampuses())
    store.dispatch(fetchAllStudents())
  }

  render(){
    return (
      <div>
        <nav>
          <NavLink to="/home"> Home</NavLink>
          <NavLink to="/students"> Students</NavLink>
        </nav>
          <Route path="/home" component={CampusList} />
          <Route path="/add/campus" component={AddCampusForm} />
          <Route path="/campus/:id" render={props => {
            return <Campus campusId={+props.match.params.id} history={props.history} />
          }} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/:id" render={props => {
            return <Student studentId={+props.match.params.id} history={props.history} />
          }} />
          <Route path="/add/students" component={AddStudentForm} />

      </div>
    )
  }
}