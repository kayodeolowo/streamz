 const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: '12cfc3ac71d8ea0235235c0fb2347238', 
    originalImage:  (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,

     w500Image:  (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
 }

 export default apiConfig; 