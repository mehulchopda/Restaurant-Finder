import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer lsgLnoWeex2D__Bqgs2Dvz4BAt48mhvFKKwenlDte12-pwgafIOseA7gktyUsnURNhc2J0aK0uOSKEoYX55KXSdJ2SwiBG_3jyclp0w5J8F0WSv71qQCPr9hcgq8XXYx'
    }
})