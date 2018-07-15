import React,{Component} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import UserAvatar from './UserAvatar';
import PostPhoto from './PostPhoto';

export default class Post extends Component{
    // TODO: OnLikePress should be implemented
    render(){
        const { username, user_avatar, uri, caption } = this.props.data;
        // const avatarUri = "https://cdn.iconscout.com/public/images/icon/free/png-256/avatar-user-teacher-312a499a08079a12-256x256.png";
        // const postUri = "https://cdn.iconscout.com/public/images/icon/free/png-256/avatar-user-teacher-312a499a08079a12-256x256.png";
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailContainer}>
                    <UserAvatar uri={user_avatar} />
                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{username}</Text>
                    </View>
                </View>
                <PostPhoto uri={uri} />
                <View style={styles.likeContainer}>
                    <Ionicons 
                        name='ios-heart-outline'
                        size={30}
                    />
                </View>
                <View style={styles.imageMeta}>
                    <Text style={styles.username}>{username}</Text>
                    <Text>{caption}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    thumbnailContainer: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    userContainer: {
        justifyContent: 'center',
        padding: 10,
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