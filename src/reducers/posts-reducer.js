import { FETCH_POSTS } from '../actions';

const initialState = [];

export default function (state = initialState,action){
    switch (action.type){
        case FETCH_POSTS:
            return action.payload;
        default:
            return state;
    }
}