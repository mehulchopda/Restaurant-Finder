import React, { useState, useEffect } from 'react'
import {
  AdMobBanner
} from 'expo-ads-admob'
import MapView from 'react-native-maps'
import { View, Text, StyleSheet, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const [result, setResult] = useState(null)
  const getResult = async (id) => {
    try {
      const response = await yelp.get(`${id}`)
      setResult(response.data)
    } catch (err) {
      console.log('something get wrong')
    }
  }
  useEffect(() => {
    getResult(id)
  }, [])

  bannerError = () => {
    console.log('An error occoured while loading AdMob Banner')
  }

  if (!result) {
    return null
  }

  const { Marker } = MapView

  return (
    <>
      { <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-5952490106741256/4137725792" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError}
      /> }
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleStyling}>{result.name}</Text>
          <FlatList
            horizontal
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.imageStyle} source={{ uri: item }}></Image>
            }
            }
          />
          <View style={styles.tableStyle}>
            <Text style={styles.labelStyle}>Address: </Text>
            <Text style={styles.infoStyle} >{result.location.display_address}</Text>
          </View>
          <View style={styles.tableStyle}>
            <Text style={styles.labelStyle}>Rating: </Text>
            <Text style={styles.infoStyle} >{result.rating}</Text>
          </View>
          <View style={styles.tableStyle}>
            <Text style={styles.labelStyle}>Reviews: </Text>
            <Text style={styles.infoStyle} >{result.review_count}</Text>
          </View>
          <MapView style={styles.mapStyle} initialRegion={{
            latitude: result.coordinates.latitude,
            longitude: result.coordinates.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
            <Marker
              key={id}
              title={result.name}
              description={result.location.display_address.toString()}
              coordinate={{
                latitude: result.coordinates.latitude,
                longitude: result.coordinates.longitude
              }}
            />
          </MapView>

        </View>

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginHorizontal: 5
  },
  titleStyling: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  tableStyle: {
    flexDirection: 'row',
    marginTop: 10
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoStyle: {
    fontSize: 16
  },
  mapStyle: {
    marginTop: 10,
    width: Dimensions.get('window').width,
    height: 200
  }
})

export default ResultsShowScreen
