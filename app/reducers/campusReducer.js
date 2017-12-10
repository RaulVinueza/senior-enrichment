import axios from 'axios'

//ACTION TYPES
const ADD_CAMPUS = 'ADD_CAMPUS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const EDIT_CAMPUS = 'EDIT_CAMPUS'

//ACTION CREATORS
 const createAddCampusAction = campus => ({type: ADD_CAMPUS, campus})
 const createGetCampusesAction = campuses => ({type: GET_CAMPUSES, campuses})
 const createEditCampusAction = (id, campus) => ({type: EDIT_CAMPUS, id, campus})

//THUNK CREATORS
export const postNewCampus = newCampus => dispatch => {
    axios.post('/api/campuses/', newCampus)
    .then( res => res.data)
    .then( postedCampus => dispatch(createAddCampusAction(postedCampus)))
}

export const putCampusEdits = (id, editedCampus) => dispatch => {
    axios.put(`/api/campuses/${id}`, editedCampus)
    .then((res) => res.status)
    .then(status => status === 202 && dispatch(createEditCampusAction(id, editedCampus)))
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
        case GET_CAMPUSES:
            return action.campuses
        default:
            return prevState
    }
}

