import React from 'react';
import notfound from '../Images/notfound.jpg'
const NotFound404 = () => {
    return (
        <div>
            <div className="container">
                <div className="row"><img src={ notfound } alt="notfound" /></div>
            </div>
        </div>
    );
};

export default NotFound404;