import React, {Component} from 'react';
import {StyleSheet,View,Image } from 'react-native';

export default class PostPhoto extends Component{
    render(){
        return (
            <View>
                <Image
                    source={{uri:this.props.uri}} 
                    style={styles.image}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: null,
        height: 350,
    }
});