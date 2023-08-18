import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function Login(props) {


    // Getting data form input field
    const [email,setEmail] =  useState()
    const [password,setPassword] = useState()

    const move = () => {
      
        if(email==="admin@gmail.com" && password==12345){
            props.navigation.navigate("MainTabs")
        }
        else{
            console.warn("details are not matching");
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "black", textAlign: "center", fontSize: 25 }}>Login</Text>
                    <TextInput style={styles.inputField} onChangeText={(text)=>setEmail(text)} placeholder='Email' />
                    <TextInput style={styles.inputField} onChangeText={(text)=>setPassword(text)} placeholder='Password' />
                    <View >
                        <TouchableOpacity onPress={move} >
                            <Text style={styles.button}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Registration")}>
                        <Text style={{ textAlign: "center", fontSize: 18, color: "blue" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // justifyContent:"flex-end",
        marginBottom: 40,


    },
    login: {
        width: "80%",
        // height: "50%",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "lightblue",
        shadowColor: "black",
        elevation: 20,

    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        marginTop: "15%",
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        elevation: 10
    },
    button: {
        textAlign: "center",
        backgroundColor: "red",
        fontSize: 20,
        padding: 8,
        color: "white",
        margin: 25,
        marginLeft: "25%",
        marginRight: "25%",
        borderRadius: 8,
        shadowColor: "black",
        elevation: 10
    }
})
export default Login