import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formHead3, gohomeicon} from '../CommonCss/pagecss';
//import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={'chevron-back-circle'}
        size={30}
        color="white"
        style={gohomeicon}
        onPress={() => navigation.navigate('My_UserProfile')}
      />
      <Text style={formHead3}>Edit Profile</Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate('ChangePic')}>
        Change Profile Picture
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate('Change Username')}>
        Change Username
      </Text>
      <Text
        style={styles.txt1}
        onPress={() => navigation.navigate('Change Description')}>
        Change Desscription
      </Text>
    </View>
  );
};

export default EditProfile;

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
