import React from 'react'
import './nav.css'
import keys from './keys'
function Nav({setSelectedOption}) {
    return (
        <div className="Nav">
            <h2 onClick={()=>setSelectedOption(keys.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setSelectedOption(keys.fetchMystery)}>Mystery</h2> 
            <h2 onClick={()=>setSelectedOption(keys.fetchSciFi)}>Sci-fi</h2> 
            <h2 onClick={()=>setSelectedOption(keys.fetchWestern)}>Western</h2> 
            <h2 onClick={()=>setSelectedOption(keys.fetchAnimation)}>Animation</h2> 
            <h2 onClick={()=>setSelectedOption(keys.fetchTv)}>Movie</h2> 
        </div>
    )
}

export default Nav
