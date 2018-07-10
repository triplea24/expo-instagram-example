import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Header extends Component{
    render(){
        let {title} = this.props;
        if(!title)title = 'header';
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}
const styles = {
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 24,
        alignItems: 'center',
        borderBottomColor: "#ddd",
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 13,
    }
}