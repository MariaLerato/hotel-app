import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import Info from './info'
import { Icon } from 'react-native-elements'
import SearchAlt from './searchAlt';
import { navbars } from './gallery/reusables';


const Search = ({ navigation, route }) => {
    const id = route.params.id
    const name = route.params.name
    const status = route.params.status
    const dateIn = route.params.dateIn
    const dateOut = route.params.dateOut

    const DisplayHotels = () => {
        return (
            <View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {SearchAlt.hotels.filter(data =>
                        data.province.includes(id)).map(action => (
                            <View style={{ padding: '3%'}} key={action.id}>
                                <ImageBackground source={action.image} style={{ width:170,height:180, borderRadius: 40,borderTopStartRadius:20 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate(action.nav,{number:name})} style={styles.hotelname}>
                                        <Text style={styles.loca}>{action.location}</Text>
                                        <Text style={styles.number}>{action.location.length} Hotels</Text>
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        ))}
                </View>
            </View>
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
                                    <Image source={action.img} style={styles.Image} />
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
                            <Text style={styles.input}>{id}</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <View>
                                <Text style={styles.title}>Date</Text>
                                <Text style={styles.input}>{dateIn} / {dateOut}</Text>
                            </View>
                            <View >
                                <Text style={styles.titles}>Rooms</Text>
                                <Text style={styles.rooms}>{status} Guests, {name} Rooms</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.touchableOpacity}><Text style={styles.touchableText}>Search Hotels</Text></TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginTop: '-3%' }} >
                        <View style={styles.map}>
                            <Text style={styles.location}>By Location</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('hotels')}><Text style={styles.view}>View All</Text></TouchableOpacity>
                        </View>

                        <View >
                            <DisplayHotels />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.neartext}>Near You</Text>
                        {
                            SearchAlt.nearby.filter(data =>
                                data.province === id
                            ).map(action => (
                                < View key={action.id} style={styles.near}>
                                    <TouchableOpacity onPress={() => navigation.navigate('hotelrooms')}>
                                        <Image source={action.image} style={{width:65,height:65,borderRadius:5,marginTop:'6%'}}/>
                                    </TouchableOpacity>
                                    <View style={{paddingLeft:'2%'}}>
                                        <Text style={styles.hoteltext}>{action.hotelname}</Text>
                                        <Text style={styles.locationName}>{action.location}</Text>
                                        <View style={styles.nearContainer}>
                                            <Text style={styles.price}>{action.price}/{action.state}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name={'star'} type={'font-awesome'} color={'#FAA455'} size={18} />
                                                <Text style={styles.number}>4.9</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>    
                            ))
                           
                   
                        }
            </View>
        </ScrollView>
            </View >
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
        , paddingLeft: '2%'
    },
    view: {
        color: '#B2B2B2',
        fontSize: 19,
        fontWeight: '700',
        marginLeft: '4%'
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
        marginTop: '45%',
        height: '40%',
        margin: '8%',
        alignItems: 'center',
        justifyContent:'center'

    },
    loca: {
        color: '#1C5248',
        fontWeight: '700',
        fontSize: 25
    },
    number: {
        color: '#B2B2B2',
        fontSize: 18,
        fontWeight: '700',
    },
    near: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 10,
        padding: '2%'
        , paddingLeft: '2%'
    },
    neartext: {
        color: '#1C5248',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Roboto',
        paddingLeft: '2%'
    },
    hoteltext: {
        color: '#1C5248',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
    locationName: {
        color: '#B2B2B2',
        fontSize: 18,
        fontWeight: '700',
        paddingLeft: '3%'
    },
    price: {
        color: '#1C5248',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Roboto',
    },
    nearContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '3%'
    }


})
export default Search