import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';

const Main = () => {
  
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const [isChoosingDestination, setIsChoosingDestination] = useState(false);

  const getUsersCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      console.log(position);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });
  };

  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const [location, setLocation] = useState(defaultLocation);
  
  const handleMapPress = click => {
    const coordinates = click.nativeEvent.coordinate;
    console.log(coordinates);
    if (isChoosingSource) {
      setSource(coordinates);
      setIsChoosingSource(false);
    } else if (isChoosingDestination) {
      setDestination(coordinates);
      setIsChoosingDestination(false);
    }
  };
  const reqLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('granted');
          getUsersCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to show your current location on the map.',
          );
        }
      } catch (error) {
        console.warn(error);
      }
    } else {
      Alert.alert('Unsupported Platform!');
    }
  };

  const showCoordinates = () => {
    if (source && destination) {
      // calculating distance
      const distance =
        getDistance(
          {
            latitude: source.latitude,
            longitude: source.longitude,
          },
          {
            latitude: destination.latitude,
            longitude: destination.longitude,
          },
        ) / 1000;
      Alert.alert(
        'Coordinates and Distance',
        `Source: \nLatitude: ${destination.latitude}, Longitude: ${
          destination.longitude
        }\n\nDistance between source and destination: ${distance.toFixed(
          2,
        )} km`,
      );
    } else {
      Alert.alert(
        'Error',
        'Please select both source and destination coordinates.',
      );
    }
  };

  useEffect(() => {
    reqLocationPermission();
  }, []);

  return (
    <View style={styles.container}>

      <MapView
        provider={'google'} // remove if not using Google Maps
        style={styles.map}
        region={location}
        showsUserLocation={true}
        onPress={handleMapPress}>
        <Marker
          coordinate={location}
          title={'marker'}
          onPress={data => console.log(data.nativeEvent.coordinate)}
        />
        {source && (
          <Marker
            coordinate={source}
            title={'Source'}
            pinColor={'green'}
            draggable={true}
            onDragEnd={e => {
              setSource(e.nativeEvent.coordinate);
            }}
          />
        )}
        {destination && (
          <Marker
            coordinate={destination}
            title={'Destination'}
            pinColor={'blue'}
            draggable={true}
            onDragEnd={e => {
              setDestination(e.nativeEvent.coordinate);
            }}
          />
        )}
        {source && destination && (
          <Polyline
            coordinates={[source, destination]}
            strokeColor="cyan"
            strokeWidth={2}
          />
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          {source ? (
            <Button
              title={'Remove Source'}
              onPress={() => {
                setSource(null);
              }}
            />
          ) : (
            <Button
              title={'Select Source'}
              onPress={() => {
                setIsChoosingSource(true);
              }}
            />
          )}
          {destination ? (
            <Button
              title={'Remove Destination'}
              onPress={() => {
                setDestination(null);
              }}
            />
          ) : (
            <Button
              title={'Select Destination'}
              onPress={() => {
                setIsChoosingDestination(true);
              }}
            />
          )}
        </View>
        <Button title={'Show Coordinates'} onPress={showCoordinates} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
