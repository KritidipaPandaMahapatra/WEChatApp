import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {containerFull, formHead} from '../../CommonCss/pagecss';
import BottomNavbar from '../../Components/BottomNavbar';
import TopNavbar from '../../Components/TopNavbar';
import {searchbar} from '../../CommonCss/pagecss';
import UserCard from '../../Cards/UserCard';
import {ActivityIndicator} from 'react-native';
const SearchUserPage = ({navigation, page}) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const getallusers = async () => {
    if (text.length > 0) {
      setLoading(true);
      fetch(`http://10.0.2.2:3000/searchuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: text,
        }),
      })
        .then(res => res.json())
        .then(data => {
          // console.log('DATA', data);
          if (data.error) {
            setData([]);
            setError(data.error);
            setLoading(false);
          } else if (data.message == 'User Found') {
            setError(null);
            setData(data.user);
            setLoading(false);
          }
        })
        .catch(err => {
          setData([]);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    getallusers();
  }, [text]);
  // let data = [
  //   {
  //     username: 'user1',
  //     profile_image:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR1Pof8ViB8t3SDMs9Bj2H6GdBqeo02RJZAjtktnwrhmAxPaoAcLY1_PQikfU0pafzTk&usqp=CAU',
  //   },
  //   {
  //     username: 'user2',
  //     profile_image:
  //       'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  //   },
  //   {
  //     username: 'user3',
  //     profile_image:
  //       'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  //   },
  //   {
  //     username: 'user4',
  //     profile_image:
  //       'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  //   },
  //   {
  //     username: 'user5',
  //     profile_image:
  //       'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  //   },
  //   {
  //     username: 'user6',
  //     profile_image:
  //       'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  //   },
  // ];
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
      {loading ? (
        <ActivityIndicator size={'large'} color="white" />
      ) : (
        <>
          {error ? (
            <Text
              style={{
                color: 'white',
                top: 50,
                width: '80%',
                textAlign: 'center',
              }}>
              {error}
            </Text>
          ) : (
            <ScrollView style={styles.userlists}>
              {data
                // .filter(user => {
                //   if (text == '') {
                //     return null;
                //   } else if (
                //     user.username.toLowerCase().includes(text.toLowerCase())
                //   ) {
                //     return user;
                //   }
                // })
                .map((item, index) => {
                  return (
                    <UserCard
                      key={item.username}
                      user={item}
                      navigation={navigation}
                    />
                  );
                })}
            </ScrollView>
          )}
        </>
      )}
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
