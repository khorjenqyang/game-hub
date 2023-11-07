import axios from 'axios'

axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"fe93a16d1b844c0fa74562be72025da7"
    }
})

export default axios
