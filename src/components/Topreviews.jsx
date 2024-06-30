import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopReviewsSection = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/reviews/${movieId}`);
        const sortedReviews = response.data.sort((a, b) => b.rating - a.rating); // Sort reviews by rating descending
        setReviews(sortedReviews);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred while fetching reviews');
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-6">Top Reviews</h2>
      {reviews.slice(0, 3).map((review) => (
        <div key={review._id} className="flex space-x-4 items-center border-b pb-4">
          <div className="flex-1">
            <p className="font-semibold">{review.user.username}</p>
            <p className="text-gray-500">Review: "{review.reviewText}"</p>
            <p className="text-yellow-400">Rating: {review.rating}/10</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopReviewsSection;
