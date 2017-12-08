import axios from 'axios'

//ACTION TYPES
const ADD_CAMPUS = 'ADD_CAMPUS'
const GET_CAMPUSES = 'GET_CAMPUSES'

//ACTION CREATORS
 const createAddCampusAction = campus => ({type: ADD_CAMPUS, campus})
 const createGetCampusesAction = campuses => ({type: GET_CAMPUSES, campuses})

//THUNK CREATORS
export const postNewCampus = newCampus => dispatch => {
    axios.post('/api/campuses/', newCampus)
    .then( res => res.data)
    .then( postedCampus => dispatch(createAddCampusAction(postedCampus)))
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
        case GET_CAMPUSES:
            return action.campuses
        default:
            return prevState
    }
}

