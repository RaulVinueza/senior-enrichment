import React, { Component } from 'react'
import {NavLink, Route} from 'react-router-dom'
import StudentList from './StudentList'
import Student from './Student'
import CampusList from './CampusList'
import Campus from './Campus'
import AddCampusForm from './AddCampusForm'
import EditCampusForm from './EditCampusForm'
import AddStudentForm from './AddStudentForm'
import EditStudentForm from './EditStudentForm'
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
        <nav className="nav nav-pills justify-content-end">
          <NavLink className="nav-link" to="/home"> Home</NavLink>
          <NavLink className="nav-link" to="/students"> Students</NavLink>
        </nav>
          <Route exact path="/home" component={CampusList} />
          <Route path="/home/add/campus" component={AddCampusForm} />
          <Route path="/home/edit/campus/:id" render={props => {
            return <EditCampusForm campusId={+props.match.params.id} history={props.history}/>
            }}/>
          <Route path="/home/campus/:id" render={props => {
            return <Campus campusId={+props.match.params.id} history={props.history} />
          }} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/view/:id" render={props => {
            return <Student studentId={+props.match.params.id} history={props.history} />
          }} />
          <Route path="/students/add" component={AddStudentForm} />
          <Route path="/students/edit/:id" render={props => {
            return <EditStudentForm studentId={+props.match.params.id} history={props.history}/>
          }}/>

      </div>
    )
  }
}