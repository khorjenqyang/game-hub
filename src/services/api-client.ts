import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"fe93a16d1b844c0fa74562be72025da7"
    },
    headers: {
        'Content-Type': 'application/json'
     } 
})

