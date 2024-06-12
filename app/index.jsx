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
  RegisterInputPasswordScreen,
  ProfileScreen
} from "./screen"
import store from './store'
import { Provider } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: '#e91e63' }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} 
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />
          <Stack.Screen name="Splash" options={{headerShown:false}} component={SplashScreen} />
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
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
