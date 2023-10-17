// import React from 'react';
// import { useState } from 'react';
// import Movie from '../../components/Movie';
// import getMovies from '../../pages/peliculas';

// const FavoriteMovies = () => {
//   const [movieList, setMovieList] = useState([]);

//   const getFavoriteMovies = async () => {
//     setMovieList(await getMovies());
//   };

//   return (
//     <div>
//       <button onClick={getFavoriteMovies}>Add</button>
//       <div>
//         {movieList.map((movie) => (
//           <Movie key={movie.id} {...movie} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default FavoriteMovies;
