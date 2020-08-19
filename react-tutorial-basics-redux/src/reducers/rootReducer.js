import { DELETE_CONTACT } from '../actions/actionTypes'

const initialState = {
    contacts: [
        {id: 1, name: 'School Admission', number: '+1-182281288'},
        {id: 2, name: 'Security Lab', number: '+976-89681888'},
        {id: 3, name: 'Space Jam', number: '+00-123456789'},
    ]
}

const rootReducer = (state = initialState, action) => {
    if(action.type === DELETE_CONTACT) {
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
    }
    else {
        return state;
    }
}

export default rootReducer;