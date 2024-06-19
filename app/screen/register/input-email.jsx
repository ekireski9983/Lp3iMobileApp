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
import { setEmail } from '../../store/reducer/registerReducer'


export default function RegisterInputEmailScreen({navigation}){
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () =>{
        try{
            
            if( register.email === null || register.email === ""){
                throw Error('Email is required')
            }

            navigation.navigate("RegisterPassword")
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
            <Text style={styles.textHeader}>What's your email address?</Text>
            <Text>Enter the email address at which you can be contacted. No one will see this on your profile.</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    value={register.email}
                    onChangeText={(value)=>dispatch(setEmail(value))}
                    label="Email"/>
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