import React from 'react';
import { Button } from 'react-bootstrap';
import Book from '../Images/Book.jpg';
const Home = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="product_images col-md-4 col-sm-12">
                        <div className="mx-auto p-2">
                            <img src={ Book } className="" alt="" />
                        </div>
                    </div>
                    <div className="about_product col-md-8 col-sm-12 ">
                        <h2>Book Name: <span className="text-success">The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life (Before 8AM) </span></h2>
                        <h3 className="text-danger">-By Hal Elrod</h3>
                        <h3>About this Book:</h3>
                        <p>Many people dream of an extraordinary life, but end up settling for a mediocre one. No matter where you are in life—whether you’re struggling to overcome a major setback or ready to move to new heights—The Miracle Morning by Hal Elrod provides you with a simple, proven method to improve your life and achieve all your dreams and goals. In The Miracle Morning summary, we’ll briefly outline these ideas and the 6 Life S.A.V.E.R.S. to start transforming your life. </p>
                        <Button variant="outline-secondary" className="px-3">See More</Button>
                    </div>
                </div>
                <div className="my-5">
                    <h1 className="text-center">Customer Reviews</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;