const { createStore } = 'redux';

const initialState = {
    todos: [],
    posts: []
}

function myReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state;
    }
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
})

const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk' 
}

store.dispatch(todoAction);

store.dispatch({ type: 'ADD_TODO', todo: 'buy milk' });
store.dispatch({ type: 'ADD_TODO', todo: 'do karate' });
store.dispatch({ type: 'ADD_POST', post: 'go to school' });