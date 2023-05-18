import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatCard from '../../Cards/ChatCard';
import {searchbar} from '../../CommonCss/pagecss';
const All_Chats = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  let chats = [
    {
      username: 'user1',
      lastmessage: 'Hello',
      time: '12:00',
      profile_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR1Pof8ViB8t3SDMs9Bj2H6GdBqeo02RJZAjtktnwrhmAxPaoAcLY1_PQikfU0pafzTk&usqp=CAU',
    },
    {
      username: 'user2',
      lastmessage: 'Hey!How are you?',
      time: '1:00',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user3',
      lastmessage: 'Hey!How are you?',
      time: '1:00',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user4',
      lastmessage: 'Hey!How are you?',
      time: '1:00',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user5',
      lastmessage: 'Hey!How are you?',
      time: '1:00',
      profile_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZC10tCzjEfIWCY8xr8po45JqOcmkjT-3v-0GxEys_SAcBtv5yGYvFWsX7qJDaJzsbzc&usqp=CAU',
    },
    {
      username: 'user6',
      lastmessage: 'Hey!How are you?',
      time: '1:00',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Ionicons
        name={'chevron-back-circle'}
        size={30}
        color="white"
        style={styles.gohomeicon}
        onPress={() => navigation.navigate('MainPage')}
      />
      <View style={styles.c1}>
        <Text style={styles.formHead2}>Your Chats</Text>
        <TextInput
          style={searchbar}
          placeholder="Search"
          onChangeText={text => setKeyword(text)}
        />
      </View>
      <View style={styles.c2}>
        {chats
          .filter(chat => {
            if (keyword == '') {
              return chat;
            } else if (
              chat.username.toLowerCase().includes(keyword.toLowerCase()) ||
              chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return chat;
            }
          })
          .map(chats => {
            return <ChatCard key={chats.username} chat={chats} />;
          })}
      </View>
    </ScrollView>
  );
};

export default All_Chats;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  gohomeicon: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 100,
    color: 'white',
    fontSize: 30,
  },
  formHead2: {
    color: 'white',
    fontSize: 20,
    top: 10,
  },
  c1: {
    width: '95%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#111111',
    alignSelf: 'center',
    borderRadius: 18,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 10,
  },
  // searchbar: {
  //   width: '90%',
  //   backgroundColor: 'white',
  //   borderRadius: 30,
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   marginTop: 20,
  //   fontSize: 18,
  // },
  c2: {
    width: '100%',
    padding: 10,
  },
});
