import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

export default function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        }, 5000);
    },[navigation])

    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} 
            style={styles.linearGradient}>
            <View style={styles.textContainer}>
                <Text style={styles.textSpalash}>Facebook</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    textContainer:{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    textSpalash:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})