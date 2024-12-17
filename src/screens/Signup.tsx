import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,

} from 'react-native';
import React, {useState, version} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validate = () => {
    setButtonDisabled(true);

    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);

      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
  
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
    
          } else {
            setBadPassword(false);
            if (ConfirmPassword == '') {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
      
            } else {
              setBadConfirmPassword(false);
              if (password != ConfirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
        
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('PASSWORD', password);
    console.log(":yes");
    navigation.goBack();
  };
  return (
    <ScrollView style={{flex: 1,backgroundColor:'#f8fafb'}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../images/playstore.png')}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Create new account</Text>
        <CustomTextInput
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          placeholder={'Enter Name'}
          icon={require('../images/user.png')}
        />
        {badName === true && (
          <Text style={{marginTop: 10, marginLeft: 50, color: 'red'}}>
            Please enter name!
          </Text>
        )}

        <CustomTextInput
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          placeholder={'Enter email'}
          icon={require('../images/mail.png')}
        />
        {badEmail === true && (
          <Text style={{marginTop: 10, marginLeft: 50, color: 'red'}}>
            Please enter email!
          </Text>
        )}

        <CustomTextInput
          keyboardtype={'number-pad'}
          value={mobile}
          onChangeText={txt => {
            setMobile(txt);
          }}
          placeholder={'Enter Mobile'}
          icon={require('../images/mobile.png')}
          
        />
        {badMobile === true && (
          <Text style={{marginTop: 10, marginLeft: 50, color: 'red'}}>
            Please enter mobile!
          </Text>
        )}

        <CustomTextInput
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder={'Enter password'}
          icon={require('../images/padlock.png')}
          type={'password'}
          //pass any string into password it will be secured type
        />
        {badPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 50, color: 'red'}}>
            Please enter password!
          </Text>
        )}
        <CustomTextInput
          value={ConfirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
          placeholder={'Confirm password'}
          icon={require('../images/padlock.png')}
          type={'password'}
          //pass any string into password it will be secured type
        />
        {badConfirmPassword === true && (
          <Text style={{marginTop: 10, marginLeft: 50, color: 'red'}}>
            Password does not matches!
          </Text>
        )}

        <CommonButton
          title={'Signup'}
          bgColor={buttonDisabled ? '#8e8e8e' : '#eb9c14'}
          textColor={'white'}
          onPress={() => {
            validate();
          }}
          disabled={buttonDisabled}
        />

        <Text
          style={styles.CreateAc}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 150,
    borderRadius: 50,
  },
  CreateAc: {
    fontSize: 15,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'grey',
    marginBottom: 50,
  },
  textStyle: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});
