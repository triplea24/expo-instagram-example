import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Post } from '../components';
import { fetchPosts } from '../actions';

class FeedScreen extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        let key = 0;
        return this.props.posts.map(_post => {
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

function mapStateToProps(state){
    return {
        posts: state.posts,
    };
}

export default connect(mapStateToProps, { fetchPosts })(FeedScreen);