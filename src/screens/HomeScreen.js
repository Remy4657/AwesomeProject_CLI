import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('HomeScreen mounted');

    return () => console.log('HomeScreen unmounted');
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 2555</Text>
      <Button onPress={() => navigation.navigate('Details')}>Trang chu</Button>
    </View>
  );
};
export default HomeScreen;
