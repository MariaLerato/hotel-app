import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./landing";
import About from "./about";

class model{
    users = [
        {
            id:'0',name:'Maria',surname:'Fenyane',status:'single'
        },{
            id:'1',name:'Lerato',surname:'Khumalo',status:'in-relationship'
        },{
            id:'2',name:'Mantwa',surname:'Ntsoane',status:'contract-relationship'
        }
    ]
}
export default new model()