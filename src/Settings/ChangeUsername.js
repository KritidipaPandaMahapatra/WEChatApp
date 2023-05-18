import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
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
const ChangeUsername = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const handleUsername = () => {
    if (username == '') {
      alert('Please enter username');
    } else {
      setLoading(true);
      AsyncStorage.getItem('user').then(data => {
        fetch(`http://10.0.2.2:3000/setusername`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            username: username,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.message === 'Username Updated Successfully') {
              setLoading(false);
              alert('Username has been set successfully');
              navigation.navigate('Settings1');
            } else if (data.error === 'Invalid credentials') {
              alert('Invalid Credentials');
              setLoading(false);
              AsyncStorage.removeItem('user');
              navigation.navigate('Login');
            } else {
              setLoading(false);
              alert('Username not available');
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 220,
          marginHorizontal: 25,
        }}>
        <Text style={text}>Change Username</Text>
        <TextInput
          style={textInput}
          placeholder="Enter a new username"
          onChangeText={text => setUsername(text)}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity style={button} onPress={() => handleUsername()}>
            <Text style={buttonText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 50}]} />
    </View>
  );
};

export default ChangeUsername;

const styles = StyleSheet.create({});
