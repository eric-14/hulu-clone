import React, { forwardRef } from 'react'
import './videocard.css'
import TextTruncate from "react-text-truncate"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const base_url = "https://image.tmdb.org/t/p/original/"
const VideoCard = forwardRef(({movie}, ref) => {
    return (
        <div ref={ref} className="VideoCard">
           <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
           alt="movie"/>
           <TextTruncate
            line={2}
            element="p"
            truncateText="..."
            textTruncateChild={<a href="/video">Read on</a>}
            text={movie.overview}
           />

           <h2>{movie.title || movie.original_name}</h2>
        
           <p className="videocard_stats">
                {movie.media_type && `${movie.media_type} *`}
               {movie.release_date || movie.first_air_date} * 
               <ThumbUpIcon/>  {movie.vote_count} </p>
        </div>
    )
})

export default VideoCard
