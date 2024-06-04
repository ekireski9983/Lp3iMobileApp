import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';  
import { MyButton, FbButton } from '../../components' 
import { ICFacebook, ICGoogle } from '../../../assets'       
import React from 'react'


const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({navigation}){
  const [email, onChangeEmail] = React.useState('')
  const [pasword, onChangePassword] = React.useState('')

  const onSubmitLogin =()=>{
    try{
      if(email.trim().length === 0 ){
        throw Error('Email is required')
      }

      if(pasword.trim().length === 0 ){
        throw Error('Password is required')
      }

      navigation.replace("Home")
    }catch(err){
      Alert.alert('Error', err.message, [
        {text: 'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  }


  const onRegister=()=>{
    navigation.navigate("RegisterName")
  }

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 400}}>
          <ImageBackground 
            source={ require('../../../assets/images/Subtract.png') } 
            resizeMode="cover"
            style={{width:windowWidth, height:400}}>
              <View style={style.brandStyle}>
                <Image 
                  source={ require('../../../assets/images/Brand.png') } 
                />
              </View>
              
            <Text style={style.textLoginStyle}>Login</Text>
          </ImageBackground>
        </View>
      
        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder='type username or email'
            placeholderTextColor='#c7c7c7'
            value={email}/>

          <Text style={[style.textLabel,{marginTop:20}]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, {marginBottom:12}]}
            onChangeText={onChangePassword}
            placeholder='type your password'
            placeholderTextColor='#c7c7c7'
            value={pasword}/>

          <FbButton
            onPress={onSubmitLogin}
            title="Login"/>

            
        </View>

        <Text style={style.textContinueStyle}>
          Or continue with
        </Text>

        <View style={style.btnContainer}>
          <MyButton
            text="Google"
            imgUrl={ICGoogle}/>

          <MyButton
            style={{marginLeft:15}}
            text="Facebook"
            imgUrl={ICFacebook}/>
        </View>

        <View style={style.containerBottom}>
          <Text>Don't have account? </Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={{fontWeight:'bold'}}>Create now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { 
    padding:20
  },
  textInputStyle:{
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle:{
    fontSize:32,
    marginTop:150,
    fontWeight:'bold',
    textAlign:'center'
    
  },
  brandStyle:{
    marginTop:100,
    alignItems:'center',
    justifyContent:'center'
  },
  textLabel:{
    fontSize:12,
    fontWeight:'bold'
  },
  btnContainer:{
    flex:1,
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20
  },
  textContinueStyle:{
    textAlign:'center',
    padding:10
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30
  }
})