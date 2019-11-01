import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Feather } from '@expo/vector-icons'
import ResultsDetails from '../components/ResultsDetail'

const ResultsList = ({title, results, navigation}) => {
    
    if(!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id }
            renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{id: item.id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
            }
        }
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginBottom:15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5
    }

}) 

export default withNavigation(ResultsList)