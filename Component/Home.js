
import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"

function Home() {


    const [data, setData] = useState([])
    // console.log(data)

    // like comment and share and save state
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [share, setShare] = useState(false)
    const [save, setSave] = useState(false)


    const getAPIData = async () => {

        const url = "https://dummyjson.com/users";
        let result = await fetch(url);
        result = await result.json();
        setData(result.users)
        // fetch("https://dummyjson.com/users")
        //   .then(response => response.json())
        //   .then(data => setData(data.users))
    }

    useEffect(() => {
        getAPIData()
    }, [])
    return (




        <>
            {data.length ?
                <>
                    {/* Top View */}
                    <ScrollView horizontal>
                        <View style={styles.top}>

                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                            <Image source={require("../Assets/images.jpg")} style={styles.img} />
                        </View>
                    </ScrollView>



                    <Text style={{ justifyContent: "center", alignItems: "center", marginTop: 2 }}>____________________________________________________________</Text>
                    {/* Body */}
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {

                            return (
                                <View style={styles.body}>
                                    <View style={styles.imgHead}>
                                        <View style={{ flex: 3, flexDirection: "row", alignItems: 'center' }}>
                                            <TouchableOpacity>
                                               <Ionic name="person-circle-sharp" size={45}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.imgHeadName} >{item.firstName} {item.lastName}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.imageHedIcon}>
                                            <TouchableOpacity>
                                                <Image source={require("../Assets/threedot.png")} style={styles.imageHedIcon} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    <View style={styles.imgBody}>
                                        <Image source={{ uri: item.image }}
                                            style={styles.apiImg}
                                        />
                                    </View>
                                    <View style={styles.imgFooter}>
                                        <View style={{ flex: 3, flexDirection: "row", alignItems: 'center' }}>
                                            <TouchableOpacity style={{margin:5}} onPress={() => setLike(!like)}>
                                                {like ?
                                                    <AntDesign name="like1" size={30} color={"#e91e63"} />
                                                    :
                                                    <AntDesign name="like1" size={30}  />

                                                }  
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{margin:5}}  onPress={() => setComment(!comment)}>
                                            {comment ?
                                                    <FontAwesome name="comment" size={30}   color={"#e91e63"}/>
                                                    :
                                                    <FontAwesome name="comment" size={30}  />

                                                }
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{margin:5}}   onPress={() => setShare(!share)}>
                                            {share ?
                                                    <FontAwesome name="share-square" size={30}  color={"#e91e63"}/>
                                                    :
                                                    <FontAwesome name="share-square" size={30}  />

                                                }
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, alignItems: "flex-end", padding: 8 }}>
                                            <TouchableOpacity onPress={() => setSave(!save)}>
                                            {save ?
                                                    <Ionic name="save-sharp" size={30} color={"#e91e63"} />
                                                    :
                                                    <Ionic name="save-sharp" size={30}  />

                                                }
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            )
                        }}
                    />
                </>

                :
                <Text
                    style={{ flex: 1, justifyContent: "center", alignItems: "center", fontSize: 50 }}
                >

                    No Data Found</Text>
            }

        </>



    )
}

const styles = StyleSheet.create({
    top: {
        height: "13%",
        // backgroundColor:"lightblue",
        justifyContent: "center",
        flexDirection: 'row'
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "black",
        margin: 10
    },
    body: {
        flex: 1,
        // backgroundColor: "lightblue",
        margin: 15
    },
    imgHead: {
        // backgroundColor: "gray",
        fontSize: 50,
        // color: "black",
        flexDirection: "row"
    },
    imgHeadImg: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: "black",
        margin: 5
    },
    imgHeadName: {
        fontWeight: "bold",
        fontSize: 20,
        color:" #e91e63"
    },
    imageHedIcon: {
        flex: 1,
        width: 30,
        height: 30,
        marginTop: 6,
        justifyContent: "center",
        alignItems: "flex-end",
    },

    imgBody: {
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center"
    },
    imgFooter: {
        flexDirection: "row",
        // backgroundColor: "red",
    },
    imgFooterIconLeft: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        margin: 5
    },
    apiImg: {
        width: 380,
        height: 520,
    }
})

export default Home