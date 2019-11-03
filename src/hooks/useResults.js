import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, seterrorMessage] = useState('')

    const searchApi = async (searchTerm, selectedCity ) => {
        if(!selectedCity){
            selectedCity = 'berlin'
        }
        console.log('select city',selectedCity)

        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: selectedCity
                }
            })
            setResults(response.data.businesses)
        }
        catch(err){
            seterrorMessage('Something went wrong')
        }
       
    }
    //Calll searchApi when component is first rendered
    useEffect(() => {
        searchApi('all')
    },[])

    return [searchApi, results, errorMessage]
}