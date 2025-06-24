import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// Import screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';

import ListProductScreen from '../screens/product/ListProduct';
import DetailProductScreen from '../screens/product/DetailProduct';
import Qr from '../screens/Qr';
import CustomIcon from '../components/CustomIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Stack for Settings
const SettingsStack = createNativeStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  );
}

// Stack for Home
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// const HomeStack = createNativeStackNavigator({
//   screenOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   },
//   screens: {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
// });

const ListProductStack = createNativeStackNavigator();
function ListProductStackScreen() {
  return (
    <ListProductStack.Navigator>
      <ListProductStack.Screen
        name="ListProductScreen"
        component={ListProductScreen}
      />
      <ListProductStack.Screen
        name="DetailProductScreen"
        component={DetailProductScreen}
      />
    </ListProductStack.Navigator>
  );
}

const QrStack = createNativeStackNavigator();
function QrStackScreen() {
  return (
    <QrStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50', // Màu nền header
        },
        headerTintColor: '#fff', // Màu chữ, icon trong header
        headerTitleStyle: {
          fontWeight: 'bold', // Tuỳ chọn: in đậm
        },
      }}
    >
      <QrStack.Screen name="qr" component={Qr} />
    </QrStack.Navigator>
  );
}

// Bottom Tabs
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            tabBarLabel: 'Trang chủ', // tùy chọn tên hiển thị
          }}
        />
        <Tab.Screen name="Setting" component={SettingsStackScreen} />
        <Tab.Screen
          name="List"
          component={ListProductStackScreen}
          options={{ title: 'Danh sách' }}
        />
        <Tab.Screen
          name="qr"
          component={QrStackScreen}
          options={{ title: 'QR' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
