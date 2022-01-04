import React,{useState} from 'react';
import {View,Text,Button,SafeAreaView,TextInput, FlatList,ScrollView,StyleSheet} from 'react-native'
import { ListItem } from 'react-native-elements';
import model from './menu'

const Landing = ({navigation})=>{

    const [userName,setUserName] = useState('')
  
   const [name,setName] = useState('')
   const [surname,setSurname] = useState('')
   const [status,setStatus] = useState('')
   
  
   
    
    return(
        <>
            <View style={Styles.container}>
              <TextInput 
              value={name}
              onChangeText={user=>setName(user)}
              placeholder='Enter Name'

              />
               <TextInput 
              value={surname}
              onChangeText={user=>setSurname(user)}
              placeholder='Enter surname'

              />
              <Button
              title='submit'
              onPress={()=>navigation.navigate('about',{
                  id:id,
                  name:name,
                  surname:surname
              })}
              />
            </View>
            <View>
            {
                model.users.map(data=>
                    <ListItem key={data.id}>
                    <ListItem.Title>{data.name}</ListItem.Title>
                    <ListItem.Chevron onPress={()=>navigation.navigate('about',{
                        itemId:data.id
                    })}/>
                </ListItem>
                    )
            }
            </View>

        </>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Landing