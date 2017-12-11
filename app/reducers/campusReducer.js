import axios from 'axios'

//ACTION TYPES
const ADD_CAMPUS = 'ADD_CAMPUS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const EDIT_CAMPUS = 'EDIT_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

//ACTION CREATORS
 const createAddCampusAction = campus => ({type: ADD_CAMPUS, campus})
 const createGetCampusesAction = campuses => ({type: GET_CAMPUSES, campuses})
 const createEditCampusAction = (id, campus) => ({type: EDIT_CAMPUS, id, campus})
 const createDeleteCampusAction = campusId =>  ({type: DELETE_CAMPUS, campusId})

//THUNK CREATORS
export const postNewCampus = (newCampus, back) => dispatch => {
    back()
    axios.post('/api/campuses/', newCampus)
    .then( res => res.data)
    .then( postedCampus => dispatch(createAddCampusAction(postedCampus)))
}

export const putCampusEdits = (id, editedCampus, back) => dispatch => {
    back()
    axios.put(`/api/campuses/${id}`, editedCampus)
    .then((res) => res.data)
    .then(campus => dispatch(createEditCampusAction(id, campus)))
}

export const deleteCampusById = id => dispatch => {
    axios.delete(`/api/campuses/${id}`)
    .then(res => res.status)
    .then(status => status === 202 && dispatch(createDeleteCampusAction(id)))
}

export const fetchAllCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then( res => res.data)
    .then( campuses => dispatch(createGetCampusesAction(campuses)))
}

//REDUCER
export default function(prevState = [], action){
    switch (action.type){
        case ADD_CAMPUS:
            return [...prevState, action.campus]
        case EDIT_CAMPUS:
            action.campus.id = action.id
            return prevState.map(campus => campus.id === action.id ? action.campus : campus)
        case DELETE_CAMPUS:
            return prevState.filter(campus => campus.id !== action.campusId)
        case GET_CAMPUSES:
            return action.campuses
        default:
            return prevState
    }
}

