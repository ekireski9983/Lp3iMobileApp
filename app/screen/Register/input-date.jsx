import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert
} from "react-native";  

import { 
    CustomeInput,
    FbButton
} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { setBirthDate } from '../../store/reducer/registerReducer'

export default function RegisterInputDateScreen({navigation}){
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () =>{
        try{
            
            if( register.birthDate === null || register.birthDate === ""){
                throw Error('Birth date is required')
            }


            navigation.navigate("RegisterGender")
        }catch(err){
            Alert.alert('Error', err.message, [
              {text: 'OK', onPress: () => {
                console.log('ERR')
              }},
            ]);
        }

    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textHeader}>What's your date of birth?</Text>
            <Text>Choose your date of birth. You can always make this private later. Why do I need to provide my date of birth?</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    value={register.birthDate}
                    onChangeText={(value)=>dispatch(setBirthDate(value))}
                    label="Date of birth"/>
                
            </View>

            <FbButton title="Next" onPress={onNextInput}/>
            
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
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    
})