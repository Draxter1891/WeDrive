import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Profile from '../bottom/Profile';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

 

  return (
    <View style={{flex:1}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : (
        <Profile />
      )}

      {/* bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={
              selectedTab == 0
                ? require('../images/locateFilled.png')
                : require('../images/locate.png')
            }
            style={{
              height: 24,
              width: 24,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              height: 28,
              width: 28,
              tintColor: selectedTab == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navIcon}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../images/userFilled.png')
                : require('../images/user.png')
            }
            style={{
              height: 24,
              width: 24,
              tintColor: selectedTab == 2 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
      {/* bottom navigation */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomNav: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navIcon: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
