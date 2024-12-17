import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/playstore.png')}
        style={{width: 170, height: 170, borderRadius: 90}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fab',
  },
});
