import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {icons1} from '../CommonCss/pagecss';
const TopNavbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WEChat</Text>
      <Ionicons name={'chatbubbles'} style={styles.icon} />
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    top: 0,
    zIndex: 100,
    backgroundColor: '#9dc2ff',
  },
  text: {
    color: '#fff',
    left: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    color: '#fff',
    right: 30,
    fontSize: 30,
  },
});
