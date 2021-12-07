import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import Info from './info'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';

const Search = ({navigation}) => {
    const Data = () => {

        return (
            <>

            </>
        )
    }
    return (
        <>
            <View style={styles.HeaderContainer}>
                <View>
                    {
                        Info.info.map(action =>
                            <View key={action.id}>

                                <View style={styles.ImageContainer}>
                                    <Image source={action.img } style={styles.Image} />
                                    <View style={styles.name}>
                                        <Text style={styles.profilename}>
                                            {action.name} {action.surname}
                                        </Text>
                                        <Text style={styles.find}>Find The Best Hotel</Text>
                                    </View>
                                    <View style={styles.alarm}>
                                        <Icon name={'bell'} type="font-awesome" size={18} color='white' />
                                    </View>
                                </View>
                            </View>
                        )
                    }
                </View>

            </View>
            <View style={styles.container}>
                <View style={styles.destinationContainer}>
                    <View style={styles.padding}>
                        <View>
                            <Text style={styles.textDestination}>Destination</Text>
                            <Text style={styles.input}>Johannesburg,South Africa</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <View>
                                <Text style={styles.title}>Date</Text>
                                <Text style={styles.input}>02 Dec - 10 Dec</Text>
                            </View>
                            <View >
                                <Text style={styles.titles}>Rooms</Text>
                                <Text style={styles.rooms}>10 Guests - 5 Rooms</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchableText}>Search Hotels</Text></TouchableOpacity>
                </View>
                    <ScrollView>
                    <View style={{ marginTop: '-3%' }} >
                    
                    <View style={styles.map}>
                        <Text style={styles.location}>By Location</Text>
                        <Text style={styles.view}>View All</Text>
                    </View>

                    <View >
                        <View style={styles.picContainer}>
                            <ImageBackground source={require('../assets/sandton.png')} style={{ width: 150, height: 170 }}>
                                <TouchableOpacity onPress={()=>navigation.navigate('hotels')} style={styles.hotelname}>
                                    <Text style={styles.loca}>Sandton</Text>
                                    <Text style={styles.number}>10 Hotels</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                            <ImageBackground source={require('../assets/pretoria.png')} style={{ width: 150, height: 170, marginLeft: '10%', borderRadius: 20 }}>
                                <View style={styles.hotelname}>
                                    <Text style={styles.loca}>Pretoria</Text>
                                    <Text style={styles.number}>30 Hotels</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
            </View>
            <View>
                <Text style={styles. neartext}>Near You</Text>
                {
                    Info.results.map(data=>
                        <View key={data.id} style={styles.near}>
                           <TouchableOpacity onPress={()=>navigation}>
                                <Image source={data.image}/>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.hoteltext}>{data.hotelname}</Text>
                                <Text style={styles.locationName}>{data.location}</Text>
                                <View style={styles.nearContainer}>
                                <Text style={styles.price}>{data.price}/{data.state}</Text>
                                <View style={{flexDirection:'row'}}>
                                <Icon name={'star'} type={'font-awesome'} color={'#FAA455'} size={18} />
                                <Text style={styles.number}>4.9</Text>
                                </View>
                            </View>
                            </View>
                        </View>
                        )
                }
            </View>
                    </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    HeaderContainer: {
        height: '40%',
        backgroundColor: '#61B0A2',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    Image: {
        height: 90,
        width: 90,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        marginLeft: '4%'
    },
    ImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-30%'

    },
    name: {
        color: 'white',
        marginTop: '4%',
        padding: '2%'
    },
    profilename: {
        color: 'white',
        fontSize: 16

    },
    find: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    alarm: {
        marginTop: '12%',
        marginLeft: '6%'

    },
    container: {
        backgroundColor: '#FBF4F4',
        flex: 1,

    },
    destinationContainer: {
        marginTop: '-37%',
        backgroundColor: 'white',
        margin: '4%',
        borderRadius: 10
    },
    padding: {
        padding: '3%'
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    textDestination: {
        color: '#1C5248',
        fontSize: 24,
        fontWeight: '700'
    },
    input: {
        color: '#B2B2B2'
    },
    rooms: {
        color: '#B2B2B2',
        alignItems: 'flex-end',
        paddingLeft: '19%'
    },

    titles: {
        paddingLeft: '30%',
        color: '#1C5248',
        fontWeight: '700'
    },
    title: {
        color: '#1C5248',
        fontWeight: '700'
    },

    touchableOpacity: {
        backgroundColor: '#80D8C8',
        height: 60,
        marginTop: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: '100%',
        borderColor: 'rgba(0,0,0,.2)',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8
    },
    touchableText: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '700'


    },
    map: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1%',
        justifyContent: 'space-between'
    },
    location: {
        color: '#1C5248',
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Roboto'

    },
    view: {
        color: '#B2B2B2',
        fontSize: 19,
        fontWeight: '700',
    },
    picContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '6%'
        // justifyContent:'space-between'

    },
    hotelname: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: '50%',
        height: '40%',
        margin: '4%',
        alignItems: 'center'

    },
    loca: {
        color: '#1C5248',
        fontWeight: '700',
        fontSize: 20
    },
    number: {
        color: '#B2B2B2',
        fontSize: 18,
        fontWeight: '600',
    },
    near:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        margin:'2%',
        borderRadius:10,
        padding:'2%'
    },
    neartext:{
        color: '#1C5248',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        paddingLeft:'2%'
    },
    hoteltext:{
        color: '#1C5248',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
    locationName:{
        color: '#B2B2B2',
        fontSize: 18,
        fontWeight: '700',
        paddingLeft:'3%'
    },
    price:{
        color: '#1C5248',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
    nearContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'3%'
    }


})
export default Search