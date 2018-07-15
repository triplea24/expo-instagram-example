import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){
    const url = 'http://192.168.7.50:3000/posts';
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