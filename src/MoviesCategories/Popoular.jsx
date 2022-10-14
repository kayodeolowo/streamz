import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link } from 'react-router-dom'

export default function Popoular() {
   const [popular,setPopular] = useState ([]);

     useEffect(()=> {
        getPopular();
    },[]);

     const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

       const getPopular = async () => {
       
        
            const api = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=12cfc3ac71d8ea0235235c0fb2347238&language=en-US&page=1`)

            ;

        const data = await api.json();
       
         setPopular (data.results)
       //  console.log(data.results, "pop")

        
        
        
        
       
    };

   
  return (
    <div>  
     {popular.map((movies)=>{
                        return (
                          <div key={movies.id}> 
                            <Link to={"/movie/" + movies.id} > 
                                 <h4> {movies.title}  </h4>
                                 <img src={ IMAGE_PATH + movies.backdrop_path} />
                              
                              </Link>
                           </div>
                        ) 
                      })}

  </div>
  )
}
