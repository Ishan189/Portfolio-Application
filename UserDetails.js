// UserDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const UserDetails = ({ user }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={avatarStyles.container}>
          <Image style={avatarStyles.image} source={{ uri: user.avatar }} />
        </View>
        <View style={styles.userInfo}>
          {renderDetail('ID', user.id)}
          {renderDetail('UID', user.uid)}
          {renderDetail('Password', user.password)}
          {renderDetail('First Name', user.first_name)}
          {renderDetail('Last Name', user.last_name)}
          {renderDetail('Username', user.username)}
          {renderDetail('Email', user.email)}
        </View>
      </View>
    </ScrollView>
  );
};

const renderDetail = (label, value) => (
  <View style={styles.detailContainer} key={label}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const avatarStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 80,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  userInfo: {
    width: '100%',
    marginTop: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold', 
    marginRight: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'normal', 
  },
});

export default UserDetails;
