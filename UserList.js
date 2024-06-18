import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserList = ({ users, navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { user: item })}>
      <Text style={styles.item}>{item.first_name} {item.last_name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default UserList;
