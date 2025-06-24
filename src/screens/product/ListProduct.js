import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

/**import component */
import QRScanner from '../../components/QRScanner';
const ListProductScreen = () => {
  const navigation = useNavigation();
  // Dữ liệu mẫu
  const [items, setItems] = useState([
    { id: '1', title: 'Item 1', description: 'Mô tả cho item 1' },
    { id: '2', title: 'Item 2', description: 'Mô tả cho item 2' },
    { id: '3', title: 'Item 3', description: 'Mô tả cho item 3' },
  ]);

  const handleItemPress = item => {
    navigation.navigate('DetailProductScreen', { item });
  };

  return (
    <View style={styles.container}>
      {/* <QRScanner /> */}
      {/* <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={() => handleItemPress(item)} />
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default ListProductScreen;
