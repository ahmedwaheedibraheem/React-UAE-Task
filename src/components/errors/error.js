import React from 'react';
import { Link } from 'react-router-dom';

const error = (props) => {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <div className="jumbotron">
                <h1 className="display-3">ERROR!</h1>
                <p className="lead">Something went wrong!</p>
                <hr className="my-4" />
                <p>Please try again.</p>
                <p className="lead">
                    <Link to="/" className="btn btn-primary btn-lg" role="button">BACK TO HOME</Link>
                </p>
            </div>
        </div>
    );
};

export default error;