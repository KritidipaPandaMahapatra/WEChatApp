import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../assets/images.jpeg';
const UserCard = ({user, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Other_UserProfile', {user: user});
      }}>
      <View style={styles.ChatCard}>
        {user.profilepic ? (
          <Image source={{uri: user.profilepic}} style={styles.image} />
        ) : (
          <Image source={images} style={styles.image} />
        )}
        <View style={styles.c1}>
          <Text style={styles.username}>{user.username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    marginTop: 10,
  },
  ChatCard: {
    width: '100%',
    padding: 10,
    backgroundColor: '#111111',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  c1: {
    marginLeft: 10,
  },
});
