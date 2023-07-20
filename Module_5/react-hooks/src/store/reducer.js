import { SET_TODO_INPUT, ADD_TODO_LIST, MAKE_DONE, REMOVE_TODO } from "./constants";
const initState = {
    todoInput: '',
    todoList: [
        {
            id: 1,
            name: 'Java',
            completed: false
        },
        {
            id: 2,
            name: 'React',
            completed: false
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT: {
            return {
                ...state,
                todoInput: action.payload
            }
        }
        case ADD_TODO_LIST: {
            const newTodoList = [...state.todoList];
            newTodoList.sort((todo1, todo2) => todo2.id - todo1.id);
            let lastId = newTodoList[0].id;
            return {
                ...state,
                todoInput: '',
                todoList: [...state.todoList, { id: lastId + 1, name: action.payload, completed: false }]
            }
        }
        case MAKE_DONE: {
            let newTodoList = state.todoList.map((item) => {
                if (item.id === action.payload.id) {
                    item.completed = true;
                }
                return item;
            })
            return {
                ...state,
                todoList: newTodoList
            }
        }
        case REMOVE_TODO: {
            let newTodoList = state.todoList.filter((item) => item.id != action.payload.id)
            return {
                ...state,
                todoList: newTodoList
            }
        }
        default: {
            throw new Error('Invalid Action')
        }
    }
}

export { initState };
export default reducer;