import React,{Component} from 'react';
import {View,StyleSheet,TouchableWithoutFeedback,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import UserAvatar from './UserAvatar';
import PostPhoto from './PostPhoto';

export default class Post extends Component{
    // TODO: OnLikePress should be implemented
    constructor(props){
        super(props);
        this.state = { 
            liked: false,
            likeIcon: 'ios-heart-outline',
        };
    }

    toggleLike(){
        const liked = !this.state.liked;
        const likeIcon = liked ? 'ios-heart' : 'ios-heart-outline';
        this.setState({ liked,likeIcon });
    }

    render(){
        const { username, user_avatar, uri, caption } = this.props.data;
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailContainer}>
                    <UserAvatar uri={user_avatar} />
                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{username}</Text>
                    </View>
                </View>
                <PostPhoto uri={uri} />
                <View style={styles.postMetaContainer}>
                    <View style={styles.likeContainer}>
                        <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
                            <Ionicons
                                name={this.state.likeIcon}
                                size={30}
                                style={{color: this.state.liked ? 'red' : 'black'}}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.imageMeta}>
                        <Text style={styles.username}>{username}</Text>
                        <Text>{caption}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const padding = 10;

const styles = StyleSheet.create({
    container: {
    },
    thumbnailContainer: {
        flexDirection: 'row',
        padding: padding,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    userContainer: {
        justifyContent: 'center',
        padding: padding,
    },
    postMetaContainer: {
        padding: padding,
    },
    imageMeta: {
        flexDirection: 'row',
    },
    username: {
        fontWeight: 'bold',
        paddingRight: 5,
    },
    likeContainer: {
        paddingTop: 10,
        paddingBottom: 5,
    },
});