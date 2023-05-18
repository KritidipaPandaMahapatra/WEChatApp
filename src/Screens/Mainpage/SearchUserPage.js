import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {containerFull, formHead} from '../../CommonCss/pagecss';
import BottomNavbar from '../../Components/BottomNavbar';
import TopNavbar from '../../Components/TopNavbar';
import {searchbar} from '../../CommonCss/pagecss';
import UserCard from '../../Cards/UserCard';
const SearchUserPage = ({navigation, page}) => {
  const [text, setText] = useState('');
  let data = [
    {
      username: 'user1',
      profile_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR1Pof8ViB8t3SDMs9Bj2H6GdBqeo02RJZAjtktnwrhmAxPaoAcLY1_PQikfU0pafzTk&usqp=CAU',
    },
    {
      username: 'user2',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user3',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user4',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user5',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
    {
      username: 'user6',
      profile_image:
        'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
    },
  ];
  return (
    <View style={styles.searchcontainer}>
      <StatusBar />
      <TopNavbar navigation={navigation} />
      <BottomNavbar navigation={navigation} page={'SearchUserPage'} />
      <TextInput
        placeholder="Search by username.."
        style={[searchbar, {top: 40}]}
        onChangeText={text => setText(text)}
      />
      <ScrollView style={styles.userlists}>
        {data
          .filter(user => {
            if (text == '') {
              return null;
            } else if (
              user.username.toLowerCase().includes(text.toLowerCase())
            ) {
              return user;
            }
          })
          .map((item, index) => {
            return <UserCard key={item.username} user={item} />;
          })}
      </ScrollView>
    </View>
  );
};

export default SearchUserPage;

const styles = StyleSheet.create({
  searchcontainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  userlists: {
    width: '90%',
    marginTop: 40,
    // left: 10,
    // right: 10,
    //marginVertical: 10,
  },
});
