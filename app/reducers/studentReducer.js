import axios from 'axios'

//ACTION TYPES
const ADD_STUDENT = 'ADD_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'

//ACTION CREATORS
const createAddStudentAction = student => ({type: ADD_STUDENT, student})
const createGetStudentsAction = students => ({type: GET_STUDENTS, students})

//THUNK CREATORS
export const postNewStudent = newStudent => dispatch => {
    axios.post('/api/students/', newStudent)
    .then(res => res.data)
    .then( postedStudent => dispatch(createAddStudentAction(postedStudent)))
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
        case GET_STUDENTS:
            return action.students
        default:
            return prevState
    }
}