import React from 'react';

const reviews = [
  { user: 'User1', movie: 'Aavesham', comment: 'Funny and mind blowing character by Fahad', rating: 8 },
  { user: 'User2', movie: 'Turbo', comment: 'didnt deliver the expectation', rating: 5 },
  { user: 'User3', movie: 'Furiosa', comment: 'must watch action ', rating: 7 },
  { user: 'User4', movie: 'Laapata Ladies', comment: 'best love story this year', rating: 9.5 },
  { user: 'User5', movie: 'Immaculate', comment: 'finally a horror movie', rating: 8 },
//   { user: 'User6', movie: 'Nadanna Sambavam', comment: 'Epic historical drama.', rating: 8.5 },
];

const defaultUserImage = 'https://via.placeholder.com/150'; // Placeholder URL for default user image


function TopReviewsSection() {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Top Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <img src={defaultUserImage} className="w-12 h-12 rounded-full" alt="User" />
            <div>
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-500">{review.movie}</p>
              <p>{review.comment}</p>
              <p className="text-yellow-400">{review.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default TopReviewsSection;