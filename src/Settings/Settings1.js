import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formHead3, gohomeicon} from '../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings1 = ({navigation}) => {
  const logout = () => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.navigate('Login');
    });
  };
  return (
    <View style={styles.container}>
      <Ionicons
        name={'chevron-back-circle'}
        size={30}
        color="white"
        style={gohomeicon}
        onPress={() => navigation.navigate('My_UserProfile')}
      />
      <Text style={formHead3}>Settings</Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate('Edit Profile')}>
        Edit Profile
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate('Change Password')}>
        Change Password
      </Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1} onPress={() => logout()}>
        Logout
      </Text>
    </View>
  );
};

export default Settings1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  formHead: {
    color: '#c0c0c0',
    fontWeight: '700',
  },
  txt1: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
