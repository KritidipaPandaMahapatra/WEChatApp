import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import PostBigCard from '../Cards/PostBigCard';
const FollowersRandomPost = () => {
  let data = [
    {
      id: 1,
      username: 'user1_123',
      image:
        'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453__340.jpg',
      profileimage: 'https://www.w3schools.com/howto/img_avatar2.png',
      likes: ['kriti_123', 'dipa_123'],
      comments: [
        {id: 1, username: 'kriti_123', comment: 'Nice Post'},
        {id: 2, username: 'dipa_123', comment: 'Looking awesome'},
      ],
    },
    {
      id: 2,
      username: 'user2_123',
      image:
        'https://www.nevadaaudubon.org/uploads/1/2/6/7/12674555/editor/frontlit.jpg?1625010197',
      profileimage: 'https://www.w3schools.com/howto/img_avatar2.png',
      likes: ['kriti_123', 'dipa_123'],
      comments: [
        {id: 1, username: 'kriti_123', comment: 'Nice Post'},
        {id: 2, username: 'dipa_123', comment: 'Looking awesome'},
      ],
    },
  ];
  console.log('DATA', data[0].username);
  return (
    <ScrollView style={styles.container}>
      {data.map(item => {
        return (
          <PostBigCard
            key={item.id}
            username={item.username}
            profile_image={item.profileimage}
            post_pic={item.image}
            likes={item.likes}
            comments={item.comments}
          />
        );
      })}
    </ScrollView>
  );
};

export default FollowersRandomPost;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
});
