import {StyleSheet, Text, View, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';

  const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    setModalVisible(true);
    if (email == '') {
      setModalVisible(false);
      setBadEmail(true);
    }else{
      setBadEmail(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      }else{
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

const getData = async()=>{
  const mEmail = await AsyncStorage.getItem('EMAIL');
  const mPass = await AsyncStorage.getItem('PASSWORD');
  console.log(mEmail,mPass);
  if(email===mEmail && mPass===password){
    setModalVisible(false);
    navigation.navigate('Home');
  }else{
    setModalVisible(false);
    Alert.alert('You have entered wrong credentials.');
  }
}
  return (
    <View style={{flex: 1,backgroundColor:'#f8fafb'}}>
      <Image
        source={require('../images/playstore.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>Login</Text>
      <CustomTextInput
        placeholder={'Enter email'}
        icon={require('../images/mail.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{marginTop: 10, marginLeft:50, color: 'red'}}>
          Please enter email!
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter password'}
        icon={require('../images/padlock.png')}
        type={'password'}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{marginTop: 10, marginLeft:50, color: 'red'}}>
          Please enter password!
        </Text>
      )}
      
      <CommonButton
        title={'Login'}
        bgColor={'#eb9c14'}
        textColor={'white'}
        onPress={() => {
          validate();
        }}
      />

      <Text
        style={styles.CreateAc}
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Create new account?
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 50,
  },
  textStyle: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  inputStyle: {
    alignSelf: 'center',
    width: '80%',
    height: 45,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 20,
  },
  CreateAc: {
    fontSize: 15,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'grey',
  },
});
