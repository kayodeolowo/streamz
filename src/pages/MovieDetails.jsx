import { useEffect, useState } from "react";

import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'
import Trailer from "../components/Trailer";




export default function MovieDetails() {
let params = useParams();
    const [details, setDetails] = useState({});
  

 const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";



 const fetchDetails = async() => {
    const data = await fetch (`https://api.themoviedb.org/3/movie/${params.name}?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US
`);




 const detailsData = await data.json();
    setDetails(detailsData)
    console.log(detailsData)
   
    }

      useEffect(()=> {
        fetchDetails();
    },[params.name])


  return (
    <div>
        <h2> {details.overview} </h2>
        <img src={IMAGE_PATH + details.poster_path} />

         {/* <div className="flex flex-row space-x-3" > 
                  
                    {details.genres.map((ingredient)=>(
                        <h1  key={ingredient.id}>{ingredient.name}</h1>
                    ))}
                </div>  */}

           
  
       <Trailer/>
    </div>
  )
}


