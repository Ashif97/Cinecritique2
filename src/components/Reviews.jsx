import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
        
        const { reviews, averageRating } = response.data;
        setReviews(reviews);
        
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching reviews');
      }
    };

    fetchReviews();
  }, [movieId]);

  const handleReviewSubmit = async () => {
    const userId = 'yourUserId'; 
    try {
      const response = await axios.post(`${baseurl}/api/reviews`, {
        userId,
        movieId,
        rating,
        reviewText: newReview,
      });

      // Assuming response.data contains the new review
      setReviews((prevReviews) => [...prevReviews, response.data]);
      setNewReview('');
      setRating(1);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while submitting the review');
    }
  };

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-6">Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} className="flex space-x-4 items-center">
          <div>
            <p className="font-semibold">{review.user.username}</p>
            <p className="text-gray-500">Review:"{review.reviewText}"</p>
            <p className="text-yellow-400">Rating: {review.rating}/10</p>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Add your review"
          className="w-full border rounded p-2"
        />
        <div className="flex items-center mt-2">
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded p-2"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
          <button onClick={handleReviewSubmit} className="ml-2 bg-blue-500 text-white rounded p-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
