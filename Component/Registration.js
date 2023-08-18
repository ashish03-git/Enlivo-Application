import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'

function Registration(props) {
    return (

        <ScrollView style={{marginTop:50}}>
            <View style={styles.container} >
                <View style={styles.registration}>
                    <View style={{ padding: 15 }}>
                        <Text style={{ textAlign: "center", color: "black", fontSize: 25 }}>Registration</Text>
                        <View>
                            <TextInput style={styles.inputField} placeholder='Name'></TextInput>
                            <TextInput style={styles.inputField} placeholder='Email'></TextInput>
                            <TextInput style={styles.inputField} placeholder='Phone'></TextInput>
                            <TextInput style={styles.inputField} placeholder='Password'></TextInput>
                            <TextInput style={styles.inputField} placeholder='Gender'></TextInput>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.button}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                                <Text style={{ textAlign: "center", fontSize: 18, color: "blue" }}>Click To Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    registration: {
        width: "90%",
        borderWidth: 2,
        backgroundColor: "lightblue",
        borderRadius: 8,
        shadowColor: "black",
        elevation: 20
    },
    inputField: {
        backgroundColor: "white",
        padding: 10,
        fontSize: 20,
        margin: 10,
        marginTop: "8%",
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "black",
        elevation: 10

    },
    button: {
        backgroundColor: "red",
        textAlign: "center",
        padding: 8,
        margin: 25,
        color: "white",
        fontSize: 20,
        borderRadius: 10,
        shadowColor: "black",
        elevation: 10,
        marginLeft: "25%",
        marginRight: "25%",
    }
})
export default Registration