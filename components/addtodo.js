import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View}  from 'react-native';

export default function AddTodo({sumbitHandler}){
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput style={styles.input}
            placeholder='new  todoo..'
            onChangeText={changeHandler}
            />
            <Button
            onPress={()=> sumbitHandler(text)}
            title='ADD'
            color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop:5,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})