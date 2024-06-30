// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar';

// const AllMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [genre, setGenre] = useState('');
//   const [rating, setRating] = useState('');

//   useEffect(() => {
//     // Replace with your backend API endpoint to fetch movies
//     axios.get('http://localhost:5000/api/movies')
//       .then(response => {
//         setMovies(response.data);
//         setFilteredMovies(response.data);
//       })
//       .catch(error => console.error('Error fetching movies:', error));
//   }, []);

//   const handleFilter = () => {
//     let filtered = movies;

//     if (genre) {
//       filtered = filtered.filter(movie => movie.genres.includes(genre));
//     }

//     if (rating) {
//       filtered = filtered.filter(movie => {
//         if (rating === 'high') return movie.rating >= 8 && movie.rating <= 10;
//         if (rating === 'average') return movie.rating >= 5 && movie.rating <= 7;
//         if (rating === 'poor') return movie.rating >= 1 && movie.rating <= 4;
//         if (rating === 'unrated') return movie.rating === undefined || movie.rating === null;
//         return true;
//       });
//     }

//     setFilteredMovies(filtered);
//   };

//   const handleClear = () => {
//     setGenre('');
//     setRating('');
//     setFilteredMovies(movies);
//   };

//   return (
//     <div>
      
//       <div className="container mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-4">All Movies</h1>
//         <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
//           <select
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="">Select Genre</option>
//             <option value="Action">Action</option>
//             <option value="Comedy">Comedy</option>
//             <option value="Romance">Romance</option>
//             <option value="Thriller">Thriller</option>
//             <option value="Sci-Fi">Sci-Fi</option>
//             <option value="Horror">Horror</option>
//             <option value="Crime">Crime</option>
//           </select>
//           <select
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="">Select Rating</option>
//             <option value="high">High (8-10)</option>
//             <option value="average">Average (5-7)</option>
//             <option value="poor">Poor (1-4)</option>
//             <option value="unrated">Unrated</option>
//           </select>
//           <button
//             onClick={handleFilter}
//             className="p-2 bg-blue-500 text-white rounded"
//           >
//             Apply
//           </button>
//           <button
//             onClick={handleClear}
//             className="p-2 bg-gray-500 text-white rounded"
//           >
//             Clear
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {filteredMovies.map(movie => (
//             <Link key={movie._id} to={`/movie/${movie._id}`} className="p-4 border rounded shadow">
//               <img
//                 src={movie.image}
//                 alt={movie.title}
//                 className="w-full h-48 object-cover mb-2"
//               />
//               <h2 className="text-xl font-semibold">{movie.title}</h2>
//               <p className="text-gray-700">{movie.genres.join(', ')}</p>
//               <p className="text-gray-700">Rating: {movie.rating || 'Unrated'}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllMovies;
// import React from "react";
import Navbar from "../../components/Navbar";
import MovieList from "../../components/movielist";
import React from 'react'

export default function AllMovies() {
  return (
    <div>
      <Navbar/>
      <div>
      <MovieList/>
      </div>

    </div>
  )
}
