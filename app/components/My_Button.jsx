import { Image,TouchableOpacity,Text,StyleSheet
} from 'react-native'

export const MyButton=(props)=>{
   return (
       <TouchableOpacity style={[style.container, props.style]}>
           <Image
           style={style.iconStyle} 
           source={props.imgUrl}/>
           <Text>{props.text}</Text>
       </TouchableOpacity>
   )
}
const style = StyleSheet.create({
   container:{
       padding:10,
       borderColor:'grey',
       backgroundColor:'#6495ED',
       borderWidth:0.5,
       borderRadius:5,
       flex:1,
       flexDirection:'row',
       justifyContent:'center'

   }
})