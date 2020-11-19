import { ADD_EXPENSE, ADD_CATEGORY, REMOVE_CATEGORY, EDIT_EXPENSE, DELETE_EXPENSE,  LOGGED_IN_USER,CLEAR_STORE } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initState = {
    category: [
        {
            title: 'Accomodation',
            id: uuidv4()
        },
        {
            title: 'Salary',
            id: uuidv4()
        },
        {
            title: 'Food',
            id: uuidv4()
        },
        {
            title: 'Travel',
            id: uuidv4()
        }],
    data: [],
    type: ['Income', 'Expense'],
    loggedInUser : ""
}


const reducer = (state = initState, { type, payload, }) => {
    switch (type) {
        case ADD_EXPENSE: {
            return {
                ...state, data: [...state.data, payload]
            }
        }

        case DELETE_EXPENSE: {
            return {
                ...state, data: state.data.filter(item => item.id !== payload)
            }

        }
        case EDIT_EXPENSE: {
            return {
                ...state,
                data: state.data.map(item => item.id === payload.id ?  payload : item )
            }

        }
        case ADD_CATEGORY: {
            return {
                ...state, category: [...state.category, payload]
            }
        }
        case REMOVE_CATEGORY: {
            return {
                ...state, category: state.category.filter(item => item.id !== payload)
            }
        }

        case LOGGED_IN_USER :{
            return {
                ...state,
                loggedInUser : payload
               }
        }
        case CLEAR_STORE :{
            return{
                ...state,
                data : []
            }
        }
        default:
            return state
    }
}

export default reducer