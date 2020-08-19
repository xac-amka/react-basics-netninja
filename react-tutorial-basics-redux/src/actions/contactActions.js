import { DELETE_CONTACT } from '../actions/actionTypes';

export const deleteContact = id => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}