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
import nopic from '../../assets/nopic.jpeg';
import Foundation from 'react-native-vector-icons/Foundation';
const Other_UserProfile = ({navigation, route}) => {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const {user} = route.params;
  //console.log('Userr->', userData);
  const loadData = async () => {
    fetch(`http://10.0.2.2:3000/otheruserData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // console.log('DATA__>', data);
        if (data.message == 'User Found') {
          setUserData(data.user);
          ismyprofile(data.user);
          CheckFollow(data.user);
          //  console.log(data.user);
        } else {
          alert('User Not Found');
          navigation.navigate('SearchUserPage');
        }
      })
      .catch(err => {
        alert('Something went wrong');
        navigation.navigate('SearchUserPage');
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  // console.log('Post Description->', userData.posts);
  // console.log('Description->', userData.description);
  //check my profile or other profile
  const [issameuser, setIssameuser] = React.useState(false);
  const ismyprofile = async otherprofile => {
    AsyncStorage.getItem('user').then(loggeduser => {
      const loggeduserobj = JSON.parse(loggeduser);
      if (loggeduserobj.user.email == otherprofile.email) {
        setIssameuser(true);
        console.log('same user');
      } else {
        setIssameuser(false);
        console.log('other user');
      }
    });
  };
  //check follow or not
  const [isfollowing, setIsfollowing] = React.useState(false);
  const CheckFollow = async otheruser => {
    AsyncStorage.getItem('user').then(loggeduser => {
      const loggeduseruserobj = JSON.parse(loggeduser);
      fetch(`http://10.0.2.2:3000/checkfollow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          followfrom: loggeduseruserobj.user.email,
          followto: otheruser.email,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('checkfollow', data);
          if (data.message == 'User in following list') {
            setIsfollowing(true);
          } else if (data.message == 'User not in following list') {
            setIsfollowing(false);
          } else {
            alert('Something went wrong');
          }
        });
    });
  };
  //follow this user
  const followUser = async otheruser => {
    console.log('Inside Follow');
    const loggeduser = await AsyncStorage.getItem('user');
    const loggeduserobj = JSON.parse(loggeduser);
    fetch(`http://10.0.2.2:3000/followuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followfrom: loggeduserobj.user.email,
        followto: otheruser.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message == 'User Followed') {
          setIsfollowing(true);
          loadData();
          console.log('same user');
        } else {
          // setIssameuser(false);
          //console.log('other user');
          console.log('something went wrong');
        }
      });
  };
  //unfollow this user
  const unFollowuser = async otheruser => {
    console.log('Inside unfollow');
    const loggeduser = await AsyncStorage.getItem('user');
    const loggeduserobj = JSON.parse(loggeduser);
    fetch(`http://10.0.2.2:3000/unfollowuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followfrom: loggeduserobj.user.email,
        followto: otheruser.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('unfollow', data);
        if (data.message == 'User Unfollowed') {
          setIsfollowing(false);
          loadData();
          console.log('same user');
        } else {
          setIssameuser(false);
          console.log('other user');
        }
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavbar navigation={navigation} page={'Other_UserProfile'} />
      <BottomNavbar navigation={navigation} page={'SearchUserPage'} />
      <Foundation
        name="refresh"
        size={30}
        color={'white'}
        style={styles.refresh}
        onPress={() => loadData()}
      />
      {userData ? (
        <ScrollView>
          <View style={styles.c1}>
            {userData.profilepic.length > 0 ? (
              <Image
                style={styles.profile_Image}
                source={{uri: userData.profilepic}}
              />
            ) : (
              <Image style={styles.profile_Image} source={nopic} />
            )}
            <Text style={styles.txt}>@{userData.username}</Text>
            {!issameuser && (
              <View style={styles.row}>
                {isfollowing ? (
                  <Text
                    style={styles.follow}
                    onPress={() => unFollowuser(userData)}>
                    Following
                  </Text>
                ) : (
                  <Text
                    style={styles.follow}
                    onPress={() => followUser(userData)}>
                    Follow
                  </Text>
                )}
                <Text
                  style={styles.message}
                  onPress={() =>
                    navigation.navigate('MessagePage', {
                      fuseremail: userData.email,
                      fuserid: userData._id,
                    })
                  }>
                  Message
                </Text>
              </View>
            )}
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
          {isfollowing || issameuser ? (
            <View>
              {userData.posts.length > 0 ? (
                <View style={styles.c1inner}>
                  <Text style={styles.txt}>Your Posts</Text>
                  {/* {userData.posts.map(item => {
                  return (
                    <Text style={styles.description} key={item.postdescription}>
                      {item.postdescription}
                    </Text>
                  );
                })} */}
                  <View style={styles.c13}>
                    {userData.posts.map(item => {
                      return (
                        <Image
                          key={item.post}
                          style={styles.post_Image}
                          source={{uri: item.post}}
                        />
                      );
                    })}
                  </View>
                </View>
              ) : (
                <View style={styles.c2}>
                  <Text style={styles.txt1}>
                    You have not posted anything yet
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.c2}>
              <Text style={styles.txt1}>Follow to see posts</Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <ActivityIndicator size={'large'} color="white" />
      )}
    </View>
  );
};
export default Other_UserProfile;

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
  refresh: {
    position: 'absolute',
    top: 50,
    right: 5,
    zIndex: 1,
  },
  follow: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: '#0AD6A0',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  message: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
