import React from 'react'; // Remove useState import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Pass in isFavorited and onToggle as props
export default function FavoriteButton({ className, isFavorited, onToggle }) {

  const handleClick = (e) => {
    e.stopPropagation();
    onToggle(); // Call the function passed from Projects.jsx
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <FontAwesomeIcon
        icon={isFavorited ? solidStar : regularStar}
      />
    </button>
  );
}
