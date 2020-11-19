import { ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE, ADD_CATEGORY, REMOVE_CATEGORY , LOGGED_IN_USER, CLEAR_STORE} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addExpense = payload => ({
    type: ADD_EXPENSE,
    payload: {
        title: payload,
        id: uuidv4(),
    }
})

export const deleteExpense = payload => ({
    type: DELETE_EXPENSE,
    payload
})
export const editExpense = payload => ({
    type: EDIT_EXPENSE,
    payload :{
        title : payload,
        id : payload.uid
}})


export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload: {
        title: payload,
        id: uuidv4()
    }
})
export const removeCategory = (payload) => ({
    type: REMOVE_CATEGORY,
    payload
})


export const loggedInUser = payload =>({
    type : LOGGED_IN_USER,
    payload
})

export const clearStore = payload =>({
    type : CLEAR_STORE,
    payload
})