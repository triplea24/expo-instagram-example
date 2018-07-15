import axios from 'axios';
// import 

const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: res.data,
                });
            });
    };
}