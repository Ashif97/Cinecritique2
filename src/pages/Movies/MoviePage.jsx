import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Reviews from '../../components/Reviews';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${movieId}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching the movie');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const formattedReleaseDate = new Date(movie.releaseDate).toLocaleDateString();
  const genres = movie.genres && Array.isArray(movie.genres) ? movie.genres.join(', ') : 'N/A';

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-700 mb-6">{movie.description}</p>
            <div className="mb-4">
              <span className="font-semibold">Release Date:</span> {formattedReleaseDate}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Genre:</span> {genres}
            </div>
            <div className="mb-4">
              <span className="font-semibold">Rating:</span> {movie.averageRating || 'Unrated'}
            </div>
            {movie.topCast && (
              <div>
                <span className="font-semibold">Top Cast:</span> {movie.topCast.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>
      <Reviews movieId={movieId}  />
    </div>
  );
};

export default MoviePage;
