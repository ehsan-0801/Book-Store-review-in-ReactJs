import React from 'react';
import useReview from '../../hooks/useReview';
import BookReview from '../BookReview/BookReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className="text-center text-primary border-bottom">What Our Readers Say!!</h1>

            {
                reviews.map(review => <BookReview
                    key={ review.review_id }
                    review={ review }
                ></BookReview>)
            }
        </div>
    );
};

export default Reviews;