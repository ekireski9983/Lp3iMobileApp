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
import { setFirstName, setSureName } from '../../store/reducer/registerReducer'

export default function RegisterInputNameScreen({navigation}){
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () =>{
        try{
            
            if( register.firstName === null || register.firstName === ""){
                throw Error('First name is required')
            }

            if( register.sureName === null ||  register.sureName === ""){
                throw Error('Sure name is required')
            }

            navigation.navigate("RegisterDate")
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
            <Text style={styles.textHeader}>What's your name?</Text>
            <Text>Enter the name you use in real life.</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    value={register.firstName}
                    onChangeText={(value)=>dispatch(setFirstName(value))}
                    label="First name"/>
                
                <CustomeInput 
                    value={register.sureName} 
                    onChangeText={(value)=>dispatch(setSureName(value))}
                    label="Surename"/>
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