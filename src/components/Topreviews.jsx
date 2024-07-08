import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestReviews = async () => {
      try {
        const response = await axios.get('/api/reviews/latest');
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching the latest reviews:', error);
        setError('Error fetching the latest reviews');
      }
    };

    fetchLatestReviews();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Latest Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <h3>{review.movie.title}</h3>
            <p><strong>Reviewed by:</strong> {review.user.username}</p>
            <p><strong>Rating:</strong> {review.rating}</p>
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopReviews;
