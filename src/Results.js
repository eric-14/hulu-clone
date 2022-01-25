import React,{useState, useEffect} from 'react'
import './results.css'
import VideoCard from './VideoCard'

import FlipMove from "react-flip-move"
import axios from './axios'

function Results({selectedOption}) {
    const [movies,setMovies]= useState([])

    useEffect(() => {
            async function fetchData(){
                const response = await
                axios.get(selectedOption)
                console.log(response)
                setMovies(response.data.results)
                return response 
            }
       
            fetchData()
        
    }, [selectedOption])

    return (
        <div className="Results">
            
            <FlipMove>
                {  movies.map((movie)=>(
                <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
            
           
        
        </div>
    )
}

export default Results
