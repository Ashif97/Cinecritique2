import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import TopReviewsSection from '../../components/Topreviews'; // Adjust import path if necessary

function Carousel() {
  const [images, setImages] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const moviesResponse = await axios.get('http://localhost:5000/api/movies');
        setMovies(moviesResponse.data.slice(0, 5));
        setImages(moviesResponse.data.map(movie => movie.image).slice(0, 5));
        if (moviesResponse.data.length > 0) {
          setSelectedMovie(moviesResponse.data[0]._id); // Select the first movie by default
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, []);

  const handleMovieChange = (movieId) => {
    setSelectedMovie(movieId);
  };

  return (
    <div>
      <Navbar />
      <br />
      <h2 className="text-3xl font-bold text-white-opacity-75 p-2">Welcome to CineCritique.</h2>
      <h1 className="text-lg font-bold text-white-opacity-75 p-2">Explore the Top movies, feel free to rate and leave your review!</h1>

      <br />
      <h3 className="text-2xl font-bold text-white-opacity-75 p-2">Trending:</h3>

      <div className="flex flex-col">
        <div className="flex">
          {/* Left Column: Carousel */}
          <div className="w-3/4 p-4 relative">
            <div className="carousel w-full relative rounded-lg overflow-hidden h-96">
              {images.map((image, index) => (
                <div key={index} id={`slide${index + 1}`} className={`carousel-item relative w-full ${index === 0 ? 'active' : ''}`}>
                  <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                  <div className="absolute top-1/2 left-0 right-0 text-center text-white">
                    <h2 className="text-3xl font-bold text-white bg-black bg-opacity-75 p-2">{movies.length > 0 ? movies[index].title : 'Loading...'}</h2>
                  </div>
                  <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Top Reviews Section */}
          <div className="w-1/4 p-4 flex justify-end">
            <div className="w-full bg-gray-200 rounded-lg h-96">
              {selectedMovie && <TopReviewsSection movieId={selectedMovie} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
