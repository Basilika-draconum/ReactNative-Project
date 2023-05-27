import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const route = useRoute();
  const initialRegion = {
    latitude: route.params?.location?.latitude || 50.50853,
    longitude: route.params?.location?.longitude || 30.50074,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}>
        {initialRegion.latitude && initialRegion.longitude && (
          <Marker
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
            title="Travel photo"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: { flex: 1 },
});
