import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ChatCard = ({chat}) => {
  return (
    <View style={styles.ChatCard}>
      <Image source={{uri: chat.profile_image}} style={styles.image} />
      <View style={styles.c1}>
        <Text style={styles.username}>{chat.username}</Text>
        <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
      </View>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  ChatCard: {
    width: '100%',
    padding: 10,
    backgroundColor: '#111111',
    marginTop: 10,
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
  lastmessage: {
    color: 'gray',
    fontSize: 19,
  },
});
