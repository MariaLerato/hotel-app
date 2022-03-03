import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Avatar } from 'react-native'
import { Icon } from 'react-native-elements';
import { img } from './gallery/reusables';
import BackendInfo from './service/service'
import ProfilePicture from 'react-native-profile-picture';

const Profile = ({ navigation, route }) => {
    const [Client, setClient] = useState([])
    const [isLoaded,setIsLoaded] = useState(false)
    const [image,setImage] = useState()
    const retrieveData = (e) => {
        BackendInfo.getClient()
            .then((res) => {
                console.log('client',res.data)
                setIsLoaded(true)
                setClient(res.data)
            })
    }
    useEffect(() => {
        retrieveData()
    }, [])
    const LogOut =()=>{

    }
    return (
        <View style={Styles.container}>
              
            {Client.map(data =>
                    <>
                    <View style={Styles.header}>
                        <Image source={{ uri:data.image.localUri}} style={{ width: 160, height: 160, borderRadius: 70, borderColor: 'white', borderWidth: 5, marginTop: '-8%' }}></Image>
                        <Text style={Styles.headText}>{data.name} {data.surname}</Text>
                        </View>
                        
                    </>
                )
            }
            <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={Styles.edit}>
                            <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>Edit Profile</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigation.navigate('myHistory')} style={Styles.touchableOpacity}>
                        <Icon name='logout' size={25} color={'white'} /><Text style={Styles.touchableText}>LogOut</Text>
                        </TouchableOpacity >
                        
        </View>
    )

}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    user: {
        width: 90,
        height: 90,
        borderRadius: 40
        , borderColor: 'white',
        borderWidth: 1
    },
    header: {
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white',
        
        width: '100%',
        alignItems: 'center'
    },
    headText: {
        color: '#1C5248',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: '5%',
      
    },
    edit: {
        backgroundColor: '#EBE9E9',
        height: 60,
        marginTop: '2%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        width: '80%',
        borderColor: 'black',
    },
    history: {
        marginTop: '4%',
        backgroundColor: '#EBE9E9',
        borderTopStartRadius: 40,
        borderTopEndRadius: 20,

    },
    historyHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4%'
    },
    textContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 65,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '4%',
        borderRadius: 15,
        marginBottom: '4%'
    },
    touchableOpacity: {
        backgroundColor: '#06AC8E',
        height: 68,
        marginTop: '4%',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        width: '80%',
        borderColor: 'rgba(0,0,0,.2)',
    },
    touchableText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '600',
        paddingLeft:'2%'
    },
    touchable:{
        marginBottom:'2%',
        marginTop:'2%'
    }

})

export default Profile