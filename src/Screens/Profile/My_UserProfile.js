import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//import {containerFull, formHead} from '../../CommonCss/pagecss';
import BottomNavbar from '../../Components/BottomNavbar';
import TopNavbar from '../../Components/TopNavbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../assests/images.jpeg';
const My_UserProfile = ({navigation, page}) => {
  const [userData, setUserData] = React.useState(null);
  console.log('Userr->', userData);
  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(async data => {
        // console.log('email', data.email);
        //setUserData(JSON.parse(data));
        fetch(`http://10.0.2.2:3000/userData`, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + JSON.parse(data).token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.message == 'User Found') {
              setUserData(data.user);
              //  console.log(data.user);
            } else {
              alert('Something went wrong');
              navigation.navigate('Login');
            }
          })
          .catch(err => {
            // navigation.navigate('Login');
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const data = {
    username: 'user1',
    followers: 1100,
    following: 1023,
    description: 'I am a software developer',
    profile_Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZC10tCzjEfIWCY8xr8po45JqOcmkjT-3v-0GxEys_SAcBtv5yGYvFWsX7qJDaJzsbzc&usqp=CAU',
    posts: [
      {
        id: 1,
        post_Image:
          'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
      },
      {
        id: 2,
        post_Image:
          'https://thumbs.dreamstime.com/b/bird-black-capped-lory-12845174.jpg',
      },
      {
        id: 3,
        post_Image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j6JvaLSgm_t5CY43Hns7PRbRn9bv5TWrYw&usqp=CAU',
      },
      {
        id: 4,
        post_Image:
          'https://thumbs.dreamstime.com/b/bird-black-capped-lory-12845174.jpg',
      },
    ],
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={'My_UserProfile'} />
      <BottomNavbar navigation={navigation} page={'My_UserProfile'} />
      {userData ? (
        <ScrollView>
          <View style={styles.c1}>
            {userData.profilepic.length > 0 ? (
              <Image
                style={styles.profile_Image}
                source={{uri: data.profile_Image}}
              />
            ) : (
              <Image style={styles.profile_Image} source={images} />
            )}
            <Text style={styles.txt}>@{userData.username}</Text>
            <View style={styles.c11}>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Followers</Text>
                <Text style={styles.txt2}>{userData.followers.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Following</Text>
                <Text style={styles.txt2}>{userData.following.length}</Text>
              </View>
              <View style={styles.vr1}></View>
              <View style={styles.c111}>
                <Text style={styles.txt1}>Posts</Text>
                <Text style={styles.txt2}>{userData.posts.length}</Text>
              </View>
            </View>
            {userData.description.length > 0 && (
              <Text style={styles.description}>{userData.description}</Text>
            )}
          </View>
          {userData.posts.length > 0 ? (
            <View style={styles.c1inner}>
              <Text style={styles.txt}>Your Posts</Text>
              <View style={styles.c13}>
                {data.posts.map(item => {
                  return (
                    <Image
                      key={item.id}
                      style={styles.post_Image}
                      source={{uri: item.post_Image}}
                    />
                  );
                })}
              </View>
            </View>
          ) : (
            <View style={styles.c2}>
              <Text style={styles.txt1}>You have not posted anything yet</Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <ActivityIndicator size={'large'} color="white" />
      )}
    </View>
  );
};
export default My_UserProfile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    paddingVertical: 50,
  },
  c1: {
    width: '100%',
    alignItems: 'center',
    // marginTop: 10,
  },
  c1inner: {
    width: '100%',
    alignItems: 'center',
  },
  profile_Image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#111111',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  txt1: {
    color: 'white',
    fontSize: 20,
  },
  txt2: {
    color: 'white',
    fontSize: 20,
  },
  c11: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  c111: {
    alignItems: 'center',
  },
  vr1: {
    width: 1,
    height: 50,
    backgroundColor: 'white',
  },
  description: {
    color: 'white',
    fontSize: 15,
    marginVertical: 10,
    backgroundColor: '#111111',
    width: '100%',
    padding: 10,
    paddingVertical: 20,
    textAlign: 'center',
  },
  post_Image: {
    width: '30%',
    height: 120,
    margin: 5,
  },
  c13: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center',
  },
  c2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});
