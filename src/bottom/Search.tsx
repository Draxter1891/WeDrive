import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Search = () => {
  return (


    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.txt}>Search</Text>
        <Text style={styles.subTxt}>not built yet!</Text>
      </View>


      <View style={{marginTop: 80}}>
        <View style={{marginLeft: 10, marginBottom:20}}>
          <Text style={{marginBottom: 10, fontSize: 18, fontWeight: '600'}}>
            Source:
          </Text>
          <TextInput
            // value={}
            // onChangeText={onChangeText}
            placeholder={'Enter Source'}
            style={{
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 10,
              width: '90%',
            }}
            keyboardType={'default'}
          />
        </View>
        <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
          <Text style={{marginBottom: 10, fontSize: 18, fontWeight: '600'}}>
            Destination:
          </Text>
          <TextInput
            // value={}
            // onChangeText={onChangeText}
            placeholder={'Enter Source'}
            style={{
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 10,
              width: '90%',
            }}
            keyboardType={'default'}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#000',
          height: 40,
          width: 150,
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: 60,
          marginLeft: '25%',
        }}>
        <Text style={{fontSize: 16, color: '#fff', marginLeft: '32%'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 40,
  },
  subTxt: {
    fontSize: 16,
    marginTop: 30,
    color: 'grey',
  },
});
