import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {containerFull, formHead} from '../../CommonCss/pagecss';
import BottomNavbar from '../../Components/BottomNavbar';
import TopNavbar from '../../Components/TopNavbar';
import FollowersRandomPost from '../../Components/FollowersRandomPost';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MainPage = ({navigation}) => {
  const [userData, setUserData] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(data => {
        console.log('async userdata', data);
        setUserData(JSON.parse(data));
      })
      .catch(err => {
        alert(err);
      });
  }, []);
  console.log('UserData=>', userData);
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={'MainPage'} />
      <BottomNavbar navigation={navigation} page={'MainPage'} />
      <FollowersRandomPost />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
