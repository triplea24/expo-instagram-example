import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

import { Post } from '../components';

const url = 'http://192.168.7.50:3000/posts';

export default class FeedScreen extends Component{
    state = {
        posts: [],
    }
    
    componentDidMount(){
        axios.get(url)
            .then(res => {
                this.setState({posts: res.data});
            }).catch( err=> {
                console.log(err);
            })
    }

    renderPosts(){
        let key = 0;
        return this.state.posts.map(_post => {
            return (
                <Post
                    key={key++} 
                    data={_post}/>
            );
        });
    }

    render(){
        return (
            <ScrollView>
                { this.renderPosts() }
            </ScrollView>
        );
    }
}