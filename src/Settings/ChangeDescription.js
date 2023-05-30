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
const ChangeDescription = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const handledescription = () => {
    if (description == '') {
      alert('Please enter username');
    } else {
      setLoading(true);
      AsyncStorage.getItem('user').then(data => {
        fetch(`http://10.0.2.2:3000/setdescription`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: JSON.parse(data).user.email,
            description: description,
          }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.message === 'Description Updated Successfully') {
              setLoading(false);
              alert('Description has been set successfully');
              navigation.navigate('Settings1');
            } else if (data.error === 'Invalid credentials') {
              alert('Invalid Credentials');
              setLoading(false);
              AsyncStorage.removeItem('user');
              navigation.navigate('Login');
            } else {
              setLoading(false);
              alert('Please try Again');
            }
          })
          .catch(error => {
            console.log('Something went wrong');
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
          marginTop: 170,
          marginHorizontal: 25,
        }}>
        <Text style={text}>Change Description</Text>
        <TextInput
          style={textInput}
          placeholder="Enter new description"
          onChangeText={text => setDescription(text)}
          multiline={true}
          numberOfLines={5}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <TouchableOpacity style={button} onPress={() => handledescription()}>
            <Text style={buttonText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
      <WavyFooter customStyles={[svgCurvefooter, {marginTop: 10}]} />
    </View>
  );
};

export default ChangeDescription;

const styles = StyleSheet.create({});
