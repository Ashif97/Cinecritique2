import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Reviews from '../../components/Reviews';
import { baseurl } from '../../baseurl/baseurl';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [averageRating, setAverageRating] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/movies/${movieId}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching the movie');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/reviews/${movieId}`);
        setAverageRating(response.data.averageRating);
      } catch (err) {
        console.error('Error fetching average rating:', err);
      }
    };

    if (movieId) {
      fetchAverageRating();
    }
  }, [movieId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const formattedReleaseDate = new Date(movie.releaseDate).toLocaleDateString();
  const genres = movie.genres && Array.isArray(movie.genres) ? movie.genres.join(', ') : 'N/A';

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseurl}/api/movies/${movieId}`, { withCredentials: true });
      window.location.href = '/admin'; // Redirect to the admin page after deletion
    } catch (err) {
      console.error('Error deleting the movie:', err);
    }
  };

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
          <div className="md:ml-8 mt-4 md:mt-0 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <p className="text-gray-700 mb-6">{movie.description}</p>
              <div className="mb-4">
                <span className="font-semibold">Release Date:</span> {formattedReleaseDate}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Genre:</span> {genres}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Rating:</span> {averageRating || 'Unrated'}
              </div>
              {movie.topCast && (
                <div>
                  <span className="font-semibold">Top Cast:</span> {movie.topCast.join(', ')}
                </div>
              )}
            </div>
            {/* <button 
              onClick={handleDelete} 
              className="bg-red-500 text-white p-2 rounded mt-4 self-end"
            >
              Delete Movie
            </button> */}
            
          </div>
        </div>
      </div>
      <Reviews movieId={movieId} />
    </div>
  );
};

export default MoviePage;