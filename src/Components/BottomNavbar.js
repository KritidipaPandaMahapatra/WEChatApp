import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fantisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {icons1} from '../CommonCss/pagecss';
const BottomNavbar = ({navigation, page}) => {
  //console.log('page', page);
  return (
    <View style={styles.container}>
      {page === 'MainPage' ? (
        <MaterialCommunityIcons
          name="home-variant"
          style={styles.activeicons1}
          onPress={() => navigation.navigate('MainPage')}
        />
      ) : (
        <MaterialCommunityIcons
          name="home-variant"
          style={icons1}
          onPress={() => navigation.navigate('MainPage')}
        />
      )}
      {page === 'SearchUserPage' ? (
        <Ionicons
          name={'search'}
          style={styles.activeicons1}
          onPress={() => navigation.navigate('SearchUserPage')}
        />
      ) : (
        <Ionicons
          name={'search'}
          style={icons1}
          onPress={() => navigation.navigate('SearchUserPage')}
        />
      )}
      {page === 'NotificationPage' ? (
        <Fantisto
          name={'heart'}
          style={styles.activeicons1}
          onPress={() => navigation.navigate('NotificationPage')}
        />
      ) : (
        <Fantisto
          name={'heart'}
          style={icons1}
          onPress={() => navigation.navigate('NotificationPage')}
        />
      )}
      {page === 'My_UserProfile' ? (
        <FontAwesome
          name={'user-circle'}
          style={styles.activeicons1}
          onPress={() => navigation.navigate('My_UserProfile')}
        />
      ) : (
        <FontAwesome
          name={'user-circle'}
          style={icons1}
          onPress={() => navigation.navigate('My_UserProfile')}
        />
      )}
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#111',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingVertical: 10,
  },
  activeicons1: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 25,
    padding: 10,
  },
});
