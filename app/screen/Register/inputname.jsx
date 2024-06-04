import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ScrollView
     } from "react-native";
     import {
        CostumerInput,
        Fbbutton
    }from '../../components'

export default function RegisterInputNameScreen(){
   return(
    <ScrollView style={StyleSheet.container}>
        <Text style={StyleSheet.textheader}>What's your name</Text>
        <Text>Enter the name you use in real life</Text>

        <View style={StyleSheet.container}>
            <CustomeInput 
            label="First name"/>
            <CustomeInput 
            label="surename"/>
        </View>
        <FbButton title="Next"/>
    </ScrollView>
   )
}
const styles = StyleSheet.create({
    container:{
        padding:15
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textheader:{
        fontWeight:'700',
        fontSize:24,
    },
})