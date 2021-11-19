import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Info from './info'
import { Icon } from 'react-native-elements'

const Search = () => {
    return (

        <>
            <View style={styles.HeaderContainer}>
                <View>
                    {
                        Info.info.map(action =>
                            <View key={action.id}>

                                <View style={styles.ImageContainer}>
                                    <Image source={{ uri: action.img }} style={styles.Image} />
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
                <View>
                    
                </View>
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
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        marginLeft: '4%'
    },
    ImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '-15%'

    },
    name: {
        color: 'white',
        marginTop: '8%',
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
        marginTop: '15%',
        marginLeft: '6%'

    },
    container: {
        backgroundColor: '#FBF4F4',
        flex: 1,

    },
    destinationContainer: {
        marginTop: '-25%',
        backgroundColor: 'white',

        margin: '4%',
        borderRadius: 10
    },
    padding: {
        padding: '4%'
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
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '700'


    },


})
export default Search