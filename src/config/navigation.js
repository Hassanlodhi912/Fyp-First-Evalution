import { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { onAuthStateChanged } from 'firebase/auth'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Old Screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Menu from '../screens/Menu';
import Carts from "../screens/Cart/index"
import UserCart from "../pages/UserCart";

//New Screens
import LoginScreen from '../pages/LoginScreen';
import SignUpScreen from '../pages/SignUpScreen';
import HomeScreen from '../pages/HomeScreen'
import Welcome from "../pages/Welcome"

import { auth, logoutUser } from './firebase';
import { lightShade, bgColor, darkShade } from './colors';
import forgotPassword from '../screens/ForgotPassword';
import CustomDrawer from '../components/CustomDrawer';
import { colors } from '../global/Style';
import Productpage from '../pages/Productpage';
import DetailsScreen from '../pages/DetailsScreen';
import CategoriesScreen from "../pages/CategoriesScreen";
import Placeorder from "../pages/PlaceOrder";
import Payment from '../screens/CheckOut/Payment';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    });
  }, [])

  return <NavigationContainer>
    {
      user ? <MainDrawer />
        : <AuthStack />
    }
  </NavigationContainer>
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown:false,
        drawerStyle: {
          backgroundColor: 'white',
        },
        drawerActiveBackgroundColor: lightShade,
        drawerActiveTintColor: "red",
        drawerInactiveTintColor: 'black',
      }}
    >
      <Drawer.Screen
        name="Shop By Voice "
        component={DashboardStack}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />
     
    <Drawer.Screen name="Clothes" component={CategoriesScreen}  options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="tshirt" size={24} color={color} />
          ),
        }} />
    <Drawer.Screen name="Home Appliances" component={Placeorder} options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="fridge" size={24} color={color} />
           
          ),
        }}
                    />
    <Drawer.Screen name="Furniture" component={DetailsScreen}
    options={{
      drawerIcon: ({ color }) => (
        <MaterialCommunityIcons name="table-furniture" size={24} color={color} />
      ),
    }} />
    <Drawer.Screen name="Kitchen & Decor" component={DetailsScreen} options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="kitchen" size={24} color={color} />
           
          ),
        }} />
         <Drawer.Screen name="profile" component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      />
    <Drawer.Screen name=" Voice Setting" component={DetailsScreen} options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="keyboard-voice" size={24} color={color} />
           
          ),
        }}/>
        <Drawer.Screen name=" Cart" component={UserCart} options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="cart-plus" size={24} color={color} />
           
          ),
        }}/>
         <Drawer.Screen name="Order List" component={Placeorder} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="checkmark-done" size={24} color={color} />
           
          ),
        }}/>
    </Drawer.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }}

      />
      <Stack.Screen name="detail" component={DetailsScreen} options={{ headerShown: false }}
      />

      
       <Stack.Screen name="categories" component={CategoriesScreen} options={{ headerShown: false }}
      />
      <Stack.Screen name="Cart" component={UserCart} options={{ headerShown: false }}
      />
      <Stack.Screen name="Orderlist" component={Placeorder} options={{ headerShown: false }}
      />


      {/* <Stack.Screen name="menu" component={Menu}
        options={({ route }) => ({ id: route.params.id })}
      /> */}

    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='welcome'
    >
      <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }}
      />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }}
      />
      <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
