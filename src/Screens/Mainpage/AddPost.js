import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../../Components/WavyHeader';
import WavyFooter from '../../Components/WavyFooter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  container,
  svgCurve,
  headerText,
  headerContainer,
  goback,
  textInput,
  button,
  buttonText,
  text,
  svgCurvefooter,
  formHead,
} from '../../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../../Firebase/config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const AddPost = ({navigation}) => {
  const [postdescription, setPostDescription] = useState('');
  const [post, setPost] = useState('');
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const pickImage = async () => {
    setLoading1(true);
    let result = await launchImageLibrary({
      mediaType: 'photo',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      didCancel: true,
    });
    // console.log('Result', result);
    if (!result.cancelled) {
      const [storeimage] = result.assets;
      const source = {uri: storeimage.uri};
      //console.log('Source', source);
      setLoading1(false);
      setPost(source.uri);
      const response = await fetch(source.uri);
      const blob = await response.blob();
      const filename = source.uri.substring(source.uri);
      const ref = firebase.storage().ref().child(filename);
      const snapshot = await ref.put(blob);
      const url = await snapshot.ref.getDownloadURL();
      console.log('URI', url);
      return url;
    } else {
      setLoading1(false);
      setPost(null);
    }
  };
  const handleUpload = () => {
    if (post != null) {
      AsyncStorage.getItem('user').then(data => {
        fetch(`http://10.0.2.2:3000/addpost`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            postdescription: postdescription,
            post: post,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.message === 'Post added successfully') {
              setLoading2(false);
              alert('Post added successfully');
              setLoading2(false);
              navigation.navigate('My_UserProfile');
            } else if (data.error === 'Invalid Credentials') {
              alert('Invalid Credentials');
              setLoading2(false);
              navigation.navigate('Login');
            } else {
              setLoading2(false);
              alert('Please try Again');
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    } else {
      alert('Please select an image');
    }
  };
  return (
    <View style={container}>
      <WavyHeader customStyles={svgCurve} />
      <View style={headerContainer}>
        <TouchableOpacity
          style={goback}
          onPress={() => navigation.navigate('Settings1')}>
          <Ionicons name="arrow-back" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={headerText}>WEChat</Text>
      </View>
      {loading1 ? (
        <ActivityIndicator size="large" color={'white'} />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Text style={formHead}>Add New Post</Text>
          {post ? (
            <TouchableOpacity onPress={() => pickImage()}>
              <Image source={{uri: post}} style={{width: 100, height: 100}} />
            </TouchableOpacity>
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.addpost} onPress={() => pickImage()}>
                Click here to select a new post
              </Text>
            </View>
          )}
        </View>
      )}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginHorizontal: 25,
        }}>
        <Text style={text}>Change Description</Text>
        <TextInput
          style={textInput}
          placeholder="Enter new description"
          onChangeText={text => setPostDescription(text)}
          multiline={true}
          numberOfLines={5}
        />
        {loading2 ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleUpload()}>
            <Text style={buttonText}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {top: 90}]} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  addpost: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
    borderColor: 'white',
    borderWidth: 0.7,
    borderRadius: 10,
    paddingVertical: 20,
    width: '80%',
    textAlign: 'center',
    marginVertical: 20,
  },
});
