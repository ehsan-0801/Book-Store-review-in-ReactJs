import React from 'react';
import './BookReview.css'
const BookReview = ({ review }) => {
    const { reviewer_name, rating, reviewtext } = review;
    return (
        <div>
            <div className="container">
                <div className="review-container m-2 p-1 border border-2 rounded shadow my-4">
                    <div className="row">
                        <h4 className="col-md-9">{ reviewer_name }</h4>
                        <h4 className="col-md-3">Rated: { rating }</h4>
                    </div>
                    <p>{ reviewtext }</p>
                </div>
            </div>
        </div>
    );
};

export default BookReview;