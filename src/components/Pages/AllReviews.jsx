import React, { useState } from "react"; // Import useState hook
import ReviewList from "../ReviewList";
import ReviewStats from "../ReviewStats";
import { FaHouseDamage } from "react-icons/fa";
import { Link } from "react-router-dom";
import reviewData from "../../data/reviewData";

function AllReviews() {
    // State to hold reviews
    const [reviews, setReviews] = useState(reviewData);
  
    // Function to delete a review
    const deleteReview = (id) => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            // Filter out the review with the given id
            const updatedReviews = reviews.filter((review) => review.id !== id);
            // Update the reviews state
            setReviews(updatedReviews);
        }
    }

    return (
        <div className="container">
            {/* ReviewStats component */}
            <ReviewStats reviews={reviews} />

            {/* ReviewList component */}
            <ReviewList reviews={reviews} deleteReview={deleteReview} />

            {/* Link back to home page */}
            <div className="about-link">
                <Link to="/">
                    <FaHouseDamage size={40} />
                </Link>
            </div>
        </div>
    );
}

export default AllReviews;
