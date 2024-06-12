import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LoginScreen,
  HomeScreen,
  SplashScreen,
  RegisterInputNameScreen,
  RegisterInputDateScreen,
  RegisterInputEmailScreen,
  RegisterInputGenderScreen,
  RegisterInputPasswordScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Splash" 
          options={{headerShown:false}}
          component={SplashScreen} />
        <Stack.Screen name="Login" 
          options={{headerShown:false}}
          component={LoginScreen} />

        <Stack.Screen name="RegisterName" component={RegisterInputNameScreen} />
        <Stack.Screen name="RegisterDate" component={RegisterInputDateScreen} />
        <Stack.Screen name="RegisterGender" component={RegisterInputGenderScreen} />
        <Stack.Screen name="RegisterEmail" component={RegisterInputEmailScreen} />
        <Stack.Screen name="RegisterPassword" component={RegisterInputPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
