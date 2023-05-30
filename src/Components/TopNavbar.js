import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {icons1} from '../CommonCss/pagecss';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const TopNavbar = ({navigation, page}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="library-add"
        size={24}
        color="white"
        style={styles.addicon}
        onPress={() => navigation.navigate('AddPost')}
      />
      <Text style={styles.text}>WEChat</Text>
      {page === 'MainPage' && (
        <Ionicons
          name={'chatbubbles'}
          style={styles.icon}
          onPress={() => navigation.navigate('All_Chats')}
        />
      )}
      {page === 'My_UserProfile' && (
        <Ionicons
          name={'settings-sharp'}
          style={styles.icon}
          onPress={() => navigation.navigate('Settings1')}
        />
      )}
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
    // left: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    color: '#fff',
    //  right: 30,
    fontSize: 30,
  },
  addicon: {},
});
