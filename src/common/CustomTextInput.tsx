import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardtype,
}) => {
  return (
    <View style={styles.boxStyle}>
      <Image source={icon} style={styles.iconStyle}></Image>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#878787"
        style={{marginLeft: 10,}}
        secureTextEntry={type ? true : false}
        keyboardType={keyboardtype ? keyboardtype : 'default'}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  boxStyle: {
    alignSelf: 'center',
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },

  iconStyle: {
    width: 25,
    height: 25,
  },
});
