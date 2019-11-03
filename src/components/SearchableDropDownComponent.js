import React, { Component, Fragment, useState, useEffect } from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown';
import cities from 'cities.json';


const SearchableDropDownComponent = ({onItemChange}) => {

    const [cities_filtered, setCitiesFiltered] = useState([])


    const filterCityByCountry = async () => {
        try{
            setCitiesFiltered(cities.filter( city => {
                return (city.country === 'DE' ||
                       city.country === 'FR' ||
                       city.country === 'AT' ||
                       city.country === 'BE' ||
                       city.country === 'BG' ||
                       city.country === 'CH' ||
                       city.country === 'CZ' ||
                       city.country === 'DK' 
                   ) 
            }))
        }
        catch(err){
            seterrorMessage('Something went wrong')
        }
    }
    
    // component did mount
    useEffect(() => filterCityByCountry)

    return(
        <Fragment>
            <SearchableDropdown
                onItemSelect={(item) => {
                    onItemChange(item.name)
                    }
                }
                containerStyle={{ padding: 15 }}
                itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#f3f3f3',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
                fontSize: 12
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={cities_filtered}
                resetValue={false}
                textInputProps={
                    {
                        placeholder: "Select City ",
                        underlineColorAndroid: "transparent",
                        style: {
                            padding: 12,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 5,
                        },
                    }
                }
                listProps={
                {
                    nestedScrollEnabled: true,
                }
                }
            />
        </Fragment>
    )    
}

export default SearchableDropDownComponent