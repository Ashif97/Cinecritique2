import React, { useState } from 'react';
import { Card } from 'daisyui';

const moviesData = [
  { id: 1, name: 'Aavesham', genre: 'Action', rating: 8 },
  { id: 2, name: 'Turbo', genre: 'Animation', rating: 5 },
  // Add more movies as needed
];

const AllMovies = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  const filteredMovies = moviesData.filter(movie => {
    const genreFilter = selectedGenre === 'All' || movie.genre === selectedGenre;
    let ratingFilter = true;
    if (selectedRating === 'High Rated') {
      ratingFilter = movie.rating >= 8;
    } else if (selectedRating === 'Avg Rated') {
      ratingFilter = movie.rating >= 4 && movie.rating < 8;
    } else if (selectedRating === 'Poor Rated') {
      ratingFilter = movie.rating >= 1 && movie.rating < 4;
    }
    return genreFilter && ratingFilter;
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">All Movies</h1>

      {/* Add your filter dropdowns here */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <Card key={movie.id} className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
              <p><strong>Genre:</strong> {movie.genre}</p>
              <p><strong>Rating:</strong> {movie.rating}/10</p>
            </Card>
          ))
        ) : (
          <p className="text-lg">No movies found based on the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
