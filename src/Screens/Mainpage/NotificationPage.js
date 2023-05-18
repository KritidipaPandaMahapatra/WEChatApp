import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {containerFull, formHead} from '../../CommonCss/pagecss';
import BottomNavbar from '../../Components/BottomNavbar';
import TopNavbar from '../../Components/TopNavbar';

const NotificationPage = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} />
      <BottomNavbar navigation={navigation} page={'NotificationPage'} />
      {/* <Text style={formHead}>Notifications</Text> */}
      <View style={styles.c1}>
        <View style={styles.notificationbar}>
          <Text>Some Notifications </Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Some Notifications </Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Some Notifications </Text>
        </View>
        <View style={styles.notificationbar}>
          <Text>Some Notifications </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  notificationbar: {
    width: '96%',
    height: 50,
    backgroundColor: '#111111',
    margin: 10,
  },
});
