import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import WavyHeader from '../Components/WavyHeader';
import WavyFooter from '../Components/WavyFooter';
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
} from '../CommonCss/pagecss';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '../Firebase/config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker';
const UploadProfilePic = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const UploadImage = async () => {
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
      setImage(source.uri);
      const response = await fetch(source.uri);
      const blob = await response.blob();
      const filename = source.uri.substring(source.uri);
      const ref = firebase.storage().ref().child(filename);
      const snapshot = await ref.put(blob);
      const url = await snapshot.ref.getDownloadURL();
      console.log('URI', url);
      return url;
    } else {
      return null;
    }
  };
  const handleUpload = () => {
    AsyncStorage.getItem('user').then(data => {
      setLoading(true);
      UploadImage()
        .then(url => {
          fetch(`http://10.0.2.2:3000/setprofilepic`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: JSON.parse(data).user.email,
              profilepic: url,
            }),
          })
            .then(res => res.json())
            .then(data => {
              if (data.message === 'Profile picture updated') {
                setLoading(false);
                //alert('Profile picture updated successfully');
                ToastAndroid.show(
                  'Profile picture updated successfully',
                  ToastAndroid.SHORT,
                );
                navigation.navigate('Settings1');
              } else if (data.error === 'Invalid Credentials') {
                //alert('Invalid Credentials');
                ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
                setLoading(false);
                navigation.navigate('Login');
              } else {
                alert('Please try again');
                setLoading(false);
              }
            });
        })
        .catch(err => {
          setLoading(false);
          ToastAndroid.show(
            'Please select a profile picture',
            ToastAndroid.SHORT,
          );
          console.log(err);
        });
    });
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 220,
          marginBottom: 40,
          marginHorizontal: 25,
        }}>
        <Text style={[text, {marginBottom: 30}]}>Change Description</Text>

        {loading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleUpload()}>
            <Text style={buttonText}>Upload</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 30}]} />
    </View>
  );
};

export default UploadProfilePic;

const styles = StyleSheet.create({});
