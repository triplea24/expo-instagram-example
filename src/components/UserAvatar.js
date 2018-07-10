import React, {Component} from 'react';
import {Image,StyleSheet } from 'react-native';

export default class PostPhoto extends Component{
    render(){
        return (
            <Image
                source={{uri:this.props.uri}} 
                style={styles.image}/>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});