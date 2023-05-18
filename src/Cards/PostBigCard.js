import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {icons1} from '../CommonCss/pagecss';
const PostBigCard = ({username, profile_image, post_pic, likes, comments}) => {
  const [isliked, setIsliked] = useState(false);
  const [showcomments, setShowcomments] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{uri: profile_image}} style={styles.profile_pic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{uri: post_pic}} style={styles.post_pic} />
      <View style={styles.s2}>
        {isliked ? (
          <View style={styles.s21}>
            <AntDesign
              name="heart"
              size={35}
              color={'white'}
              style={styles.iconliked}
              onPress={() => setIsliked(false)}
            />
            <Text style={styles.liked}>{likes.length + 1}</Text>
          </View>
        ) : (
          <View style={styles.s21}>
            <AntDesign
              name="hearto"
              size={35}
              color={'white'}
              style={icons1}
              onPress={() => setIsliked(true)}
            />
            <Text style={styles.notliked}>{likes.length}</Text>
          </View>
        )}
        <View style={styles.s22}>
          <FontAwesome
            name="comment"
            size={35}
            color={'white'}
            style={icons1}
            onPress={() => setShowcomments(!showcomments)}
          />
        </View>
      </View>
      {showcomments == true && (
        <View style={styles.s3}>
          {comments.map((item, index) => {
            return (
              <View style={styles.s31} key={item.id}>
                <Text style={styles.commentusername}>{item.username}</Text>
                <Text style={styles.commenttext}>{item.comment}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default PostBigCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 300,
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  c1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  profile_pic: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  username: {
    color: 'white',
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  post_pic: {
    width: '100%',
    height: 300,
    // aspectRatio: 1,
  },
  s2: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  s21: {
    //width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  notliked: {
    color: 'gray',
    marginLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  liked: {
    color: '#DC143c',
    marginLeft: 10,
    fontSize: 25,
  },
  iconliked: {
    color: '#DC143c',
    fontSize: 30,
  },
  s22: {
    marginLeft: 20,
  },
  s3: {
    width: '100%',
    backgroundColor: '#111111',
    padding: 10,
  },
  commentusername: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  commenttext: {
    color: 'gray',
    fontSize: 17,
    marginLeft: 5,
  },
  s31: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
