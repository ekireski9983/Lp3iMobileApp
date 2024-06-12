import { LinearGradient } from 'expo-linear-gradient';
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'


export const FbButton=({title, onPress, style})=>{

    return(
        <TouchableOpacity style={style} onPress={onPress}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });