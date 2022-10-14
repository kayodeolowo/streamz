import { useEffect, useState } from "react";
import 'youtube-video-js';

import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'




export default function Trailer() {
    let params = useParams();
    const [trailerdetails, setTrailerDetails] = useState({});
    const vid = "https://www.youtube.com/watch?v=";


     const fetchDetails = async() => {
    const data = await fetch (`
    https://api.themoviedb.org/3/movie/${params.name}/videos?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US
`);


        const trailerdata = await data.json();
         setTrailerDetails (trailerdata.results)
         console.log(trailerdata.results[0].id)
         
   
    }

      useEffect(()=> {
        fetchDetails();
    },[params.name])



  return (
    <div>

      



        {/* <div> 
                
      

          <youtube-video
              width="640"
              height="360"
              src={vid + trailerdetails.results.key }
              autoplay
              controls
              />
                  
                </div>   */}

    </div>
  )
}
