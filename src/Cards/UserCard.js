import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserCard = ({user}) => {
  return (
    <View style={styles.ChatCard}>
      <Image source={{uri: user.profile_image}} style={styles.image} />
      <View style={styles.c1}>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </View>
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
