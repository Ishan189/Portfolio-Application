import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const UserDetails = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image style={styles.profileImage} source={{ uri: user.avatar }} />
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone_number}</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{user.address.city}, {user.address.state}</Text>
        <Text style={styles.label}>Company:</Text>
        <Text style={styles.value}>{user.employment.title} at {user.employment.key_skill}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default UserDetails;
