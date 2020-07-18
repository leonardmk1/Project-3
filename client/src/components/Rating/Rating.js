import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

const Rating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
        <div className="ratingStars">
          {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => props.setRating(ratingValue)}
                  />
                  <FaStar icon="star"
                    className="star"
                    color={
                      ratingValue <= (hover || props.rating) ? "ffe207" : "e4e5e9"
                    }
                    size={50}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
        </div>

  );
};
export default Rating;
