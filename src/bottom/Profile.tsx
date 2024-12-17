import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt}>Profile</Text>
        <Text style={styles.subTxt}>not built yet!</Text>
        <View
          style={{
            borderColor: '#a3c7fa',
            borderWidth: 5,
            padding: 30,
            height: 30,
            width: 30,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
          }}>
          <Image
            style={{height: 66, width: 66}}
            source={require('../images/profile.png')}
          />
        </View>
        <View
          style={{
            width: '90%',
            height: 2,
            backgroundColor: 'grey',
            position: 'absolute',
            top: 350,
          }}
        />
      </View>

      <View style={{marginTop: 100, marginLeft: 20}}>
        <Text style={{fontSize: 18, marginBottom:30}}>Name:</Text>
        <Text style={{fontSize: 18, marginBottom:30}}>Email:</Text>
        <Text style={{fontSize: 18, marginBottom:30}}>Phone no.:</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            height: 40,
            width: 150,
            borderRadius: 10,
            justifyContent: 'center',
            marginTop:60,
            marginLeft:'25%'
          }}>
          <Text style={{fontSize: 16, color: '#fff', marginLeft: '40%'}}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 30,
    fontWeight: '600',
    marginTop:40
  },
  subTxt: {
    fontSize: 16,
    marginTop: 30,
    color:'grey'
  },
});
