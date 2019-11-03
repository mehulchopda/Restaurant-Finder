import React, {useState} from 'react'
import {
    AdMobBanner
  } from 'expo-ads-admob';
import {Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'
import SearchableDropDownComponent from '../components/SearchableDropDownComponent'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [city, setCity] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const filterResultsByPrice= (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }
    const handleCityChange = (city) => {
        setCity(city)
        searchApi(term,city)
    }
    bannerError = () => {
        console.log('An error occoured while loading AdMob Banner');
        return;
    }

    return (
        <>
         <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-5952490106741256/4137725792" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError} 
        />
            <SearchBar
              term={term}
              onTermChange={setTerm}
              onTermSubmit={() => searchApi(term,city)}
              />
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <SearchableDropDownComponent
            onItemChange={handleCityChange}

            />
            <ScrollView>
            <ResultList 
            title="Cost Effective"
            results={filterResultsByPrice('€')}
            />
           
            <ResultList
             title="Bit Pricer"
             results={filterResultsByPrice('€€')}
             />
            
            <ResultList 
            title="Big Spender"
            results={filterResultsByPrice('€€€')}
            />
            </ScrollView>
        </>
    )  
}
const styles=StyleSheet.create({

}) 

export default SearchScreen