import axios from 'axios'

//ACTION TYPES
const ADD_STUDENT = 'ADD_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'
const DELETE_STUDENT = 'DELETE_STUDENT'

//ACTION CREATORS
const createAddStudentAction = student => ({type: ADD_STUDENT, student})
const createGetStudentsAction = students => ({type: GET_STUDENTS, students})
const createEditStudentAction = (id, student) => ({type: EDIT_STUDENT, id, student})
const createDeleteStudentAction = studentId => ({type: DELETE_STUDENT, studentId})

//THUNK CREATORS
export const postNewStudent = (newStudent, back) => dispatch => {
    back()
    axios.post('/api/students/', newStudent)
    .then(res => res.data)
    .then( postedStudent => dispatch(createAddStudentAction(postedStudent)))
}

export const putStudentEdits = (id, editedStudent, back) => dispatch => {
    back()
    axios.put(`/api/students/${id}`, editedStudent)
    .then(res => res.status)
    .then(status => status === 202 && dispatch(createEditStudentAction(id, editedStudent)))
}

export const deleteStudentById = id => dispatch => {
    axios.delete(`/api/students/${id}`)
    .then(res => res.status)
    .then(status => status === 202 && dispatch(createDeleteStudentAction(id)))
}

export const fetchAllStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => dispatch(createGetStudentsAction(students)))
}

//REDUCER
export default function(prevState = [], action){
    switch (action.type){
        case ADD_STUDENT:
            return [...prevState, action.student]
        case EDIT_STUDENT:
            action.student.id = action.id
            return prevState.map(student => student.id === action.id ? action.student : student)
        case DELETE_STUDENT:
            return prevState.filter(student => student.id !== action.studentId)
        case GET_STUDENTS:
            return action.students
        default:
            return prevState
    }
}

//need to change backend so that the edited record is sent back along with a status of 202