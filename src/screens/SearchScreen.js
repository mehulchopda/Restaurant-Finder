import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    const filterResultsByPrice= (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }
    console.log(results)

    return (
        <>
            <SearchBar
              term={term}
              onTermChange={setTerm}
              onTermSubmit={() => searchApi(term)}
              />
            {errorMessage? <Text>{errorMessage}</Text> : null}
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