import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Games{
    id:number;
    name:string;
}

interface FetchFGamesResponse {
    count:number;
    results:Games[]
}

const GameGrid = () => {

    const [games,setGames] = useState<Games[]>([])
    const [error,setError] = useState("")

    useEffect(()=>{
        apiClient
        .get<FetchFGamesResponse>("/games")
        .then(res=>console.log(res.data.results))
        .catch(err=>setError(err.message))
    })

  return (
    <div>
        <ul>

        </ul>
    </div>
  )
}

export default GameGrid