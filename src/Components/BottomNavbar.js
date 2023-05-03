import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fantisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {icons1} from '../CommonCss/pagecss';
const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="home-variant" style={icons1} />
      <Ionicons name={'search'} style={icons1} />
      <Fantisto name={'heart'} style={icons1} />
      <FontAwesome name={'user-circle'} style={icons1} />
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#1111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingVertical: 10,
  },
});
