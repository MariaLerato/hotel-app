import React,{useState,useEffect} from 'react';
import {View,Text,Button,SafeAreaView,ScrollView} from 'react-native'
import Info from '../Components/info';
import model from './menu'

const About = ({route,navigation,users})=>{
    // const id=route.params.id
    const name=route.params.name
    const surname=route.params.surname
    const {itemId} = route.params
    const id = parseInt(itemId)
    const [info,setInfo] = useState([])
    let item = ()=>{
        return model.users.filter(action =>{
            return action.id === id
        })
    }
    // const navigation = useNavigation()
    const message = ()=>{
        alert('Added To Collection')
        navigation.navigate('firebase')
    }
    useEffect(()=>{
        setInfo(item())
    },[])
    return(
        <>
        
            <ScrollView>
            {
                info.map(data =>
                    <View key={data.id} style={{alignItems:'center'}}>
                        {/* <View style={{width:'60%',height:300,alignSelf:'center'}}>
                             <Avatar  size='xlarge' source={{uri:data.img}} style={{width:'100%',height:300,alignSelf:'center',margin:8}} />
                        </View> */}
                        <View>
                        <Text style={{fontSize:35,padding:4,alignSelf:'center',color:'green'}}>
                            {data.name}
                        </Text>
                        <Text style={{margin:4,padding:8,fontSize:20}} >    
                            {data.surname}
                        </Text>
                        </View> 
                        <TouchableOpacity 
                        style={{
                            backgroundColor:'lightseagreen',
                            alignSelf:'center',width:300,height:50,borderRadius:50}}
                            onPress={message}
                        >
                            <Text style={{color:'white',alignSelf:'center',paddingTop:12,fontSize:18}} >
                            {data.status}
                            </Text>
                        </TouchableOpacity>
                       
                    </View>
                    )
            }
            </ScrollView>
        
        </>
    )
}
export default About