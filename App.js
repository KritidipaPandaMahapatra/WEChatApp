// In App.js in a new project

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_EnterUseremail from './src/Screens/LoginSignup/Signup/Signup_EnterUseremail';
import Signup_EnterVeirificationCode from './src/Screens/LoginSignup/Signup/Signup_EnterVeirificationCode';
import Signup_ChooseUsername from './src/Screens/LoginSignup/Signup/Signup_ChooseUsername';
import Signup_ChoosePassword from './src/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_Accountcreated from './src/Screens/LoginSignup/Signup/Signup_Accountcreated';
import ForgotPassword_AccountRecoverd from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecoverd';
import ForgotPassword_ChoosePassword from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword';
import Forgotpassword_Enteremail from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationcode from './src/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerificationcode';
import MainPage from './src/Screens/Mainpage/MainPage';
import All_Chats from './src/Screens/ChatSection/All_Chats';
import SearchUserPage from './src/Screens/Mainpage/SearchUserPage';
import NotificationPage from './src/Screens/Mainpage/NotificationPage';
import My_UserProfile from './src/Screens/Profile/My_UserProfile';
import Settings1 from './src/Settings/Settings1';
import ChangePassword from './src/Settings/ChangePassword';
import EditProfile from './src/Settings/EditProfile';
import ChangeUsername from './src/Settings/ChangeUsername';
import ChangeDescription from './src/Settings/ChangeDescription';
import UploadProfilePic from './src/Settings/UploadProfilePic';
import AddPost from './src/Screens/Mainpage/AddPost';
import Other_UserProfile from './src/Screens/Profile/Other_UserProfile';
import MessagePage from './src/Screens/ChatSection/MessagePage';
// function HomeScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <Stack.Screen
            name="Login"
            component={Login}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup_EnterEmail"
            component={Signup_EnterUseremail}
          />
          <Stack.Screen
            name="Signup_EnterVeirificationCode"
            component={Signup_EnterVeirificationCode}
          />
          <Stack.Screen
            name="Signup_ChooseUsername"
            component={Signup_ChooseUsername}
          />
          <Stack.Screen
            name="Signup_Accountcreated"
            component={Signup_Accountcreated}
          />
          <Stack.Screen
            name="Signup_ChoosePassword"
            component={Signup_ChoosePassword}
          />

          <Stack.Screen
            name="ForgotPassword_AccountRecoverd"
            component={ForgotPassword_AccountRecoverd}
          />
          <Stack.Screen
            name="ForgotPassword_ChoosePassword"
            component={ForgotPassword_ChoosePassword}
          />
          <Stack.Screen
            name="Forgotpassword_Enteremail"
            component={Forgotpassword_Enteremail}
          />
          <Stack.Screen
            name="ForgotPassword_EnterVerificationcode"
            component={ForgotPassword_EnterVerificationcode}
          />

          <Stack.Screen name="MainPage" component={MainPage} />

          <Stack.Screen
            name="All_Chats"
            component={All_Chats}
            options={{animation: 'slide_from_left'}}
          />
          <Stack.Screen
            name="SearchUserPage"
            component={SearchUserPage}
            options={{animation: 'slide_from_bottom'}}
          />
          <Stack.Screen name="NotificationPage" component={NotificationPage} />
          <Stack.Screen
            name="My_UserProfile"
            component={My_UserProfile}
            options={{animation: 'slide_from_left'}}
          />
          <Stack.Screen name="Settings1" component={Settings1} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Change Username" component={ChangeUsername} />
          <Stack.Screen
            name="Change Description"
            component={ChangeDescription}
          />
          <Stack.Screen name="UploadProfilePic" component={UploadProfilePic} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen
            name="Other_UserProfile"
            component={Other_UserProfile}
          />
          <Stack.Screen name="MessagePage" component={MessagePage} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
