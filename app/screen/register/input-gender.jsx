import React from 'react'
import {
    FlatList,
    View,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {  FbButton } from '../../components'
import { setGender } from '../../store/reducer/registerReducer'


const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>
                {item.label}
            </Text>
    </TouchableOpacity>
);



export default function RegisterInputGenderScreen({navigation}){
    const dispatch = useDispatch()
    const optList = useSelector((state) => state.register.optGender)
    const register = useSelector((state) => state.register.formInput)

    const renderItem = ({item}) => {
        const backgroundColor = item.value === register.gender ? '#4c669f' : '#d8eaed';
        const color = item.value === register.gender ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => dispatch(setGender(item.value))}
            backgroundColor={backgroundColor}
            textColor={color}
          />
        );
    };

    const onNextInput = () =>{
        try{
            
            if( register.gender === null || register.gender === ""){
                throw Error('Birth date is required')
            }

            navigation.navigate("RegisterEmail")
        }catch(err){
            Alert.alert('Error', err.message, [
              {text: 'OK', onPress: () => {
                console.log('ERR')
              }},
            ]);
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>What's your date of birth?</Text>
            <Text>Choose your date of birth. You can always make this private later. Why do I need to provide my date of birth?</Text>
            
            <View style={styles.containerInput}>
                <FlatList
                    data={optList}
                    renderItem={renderItem}
                    keyExtractor={item => item.value}
                    extraData={register.gender}/>
                    
            </View>
            
            <FbButton 
                style={styles.nextButton} 
                title="Next" onPress={onNextInput}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        flex:1,
        
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    item: {
      padding: 15,
    },
    title: {
      fontSize: 14,
    },
    nextButton:{
        flexDirection:'row',
    }
  });