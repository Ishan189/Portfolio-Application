import React, { useState, useEffect } from 'react';
import { View, Button, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetails from './UserDetails';
import UserList from './UserList';

const Stack = createStackNavigator();

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async (size) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://random-data-api.com/api/users/random_user?size=${size}`);
      const data = await response.json();

      const usersWithSequentialIds = data.map((user, index) => ({
        ...user,
        id: index + 1,
      }));

      setUsersData(usersWithSequentialIds);
      setIsLoading(false);
    } catch (error) {
      setError('Error fetching user data');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData(80);
  }, []);

  const navigateToPreviousUser = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const navigateToNextUser = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, usersData.length - 1));
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
        <Button title="Retry" onPress={() => fetchUserData(80)} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          options={{
            title: 'Users',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        >
          {props => <UserList {...props} users={usersData} />}
        </Stack.Screen>
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{
            title: 'User Details',
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        />
      </Stack.Navigator>

      <View style={styles.navigationButtons}>
        <Button title="Previous" onPress={navigateToPreviousUser} color="#3498db" />
        <Button title="Next" onPress={navigateToNextUser} color="#3498db" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#3498db',
  },
});



export default App;
