import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
  if (!result) {
    return null
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle}></Image>
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 3,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold',
    marginBottom: 5
  }

})

export default ResultsDetail
