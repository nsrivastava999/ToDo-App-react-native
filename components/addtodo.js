import React,{useState} from 'react'
import {StyleSheet, Text, TextInput, Button, View} from 'react-native';


export default function AddToddo({submitHandler}) {

    const [text,setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return( 
        <View>
            <TextInput style={styles.inputBox} 
                placeholder='Add New Item'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button 
                onPress={ () => submitHandler(text) }
                title = 'Add to List'
                color = '#2eb8b8'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        padding:10,
        margin:10,
        borderColor:'#2eb8b8',
        // width:'90%',
        borderWidth:2,
        fontSize:20,
    },
})