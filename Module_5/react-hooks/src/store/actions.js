import { SET_TODO_INPUT, ADD_TODO_LIST, MAKE_DONE, REMOVE_TODO } from './constants';
export const setTodoInput = (payload) => {
    return { 
        type: SET_TODO_INPUT, 
        payload: payload
    }
}

export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload: payload
    }
}

export const makeDone = (payload) => {
    return {
        type: MAKE_DONE,
        payload: payload
    }
}

export const addTodoList = (payload) => {
    return {
        type: ADD_TODO_LIST,
        payload: payload
    }
}