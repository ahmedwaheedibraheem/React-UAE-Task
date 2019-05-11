import React from 'react';
import { Link } from 'react-router-dom';

const about = (props) => {
    return (
        <div style={{ paddingTop: "1rem" }}>
            <div className="jumbotron">
                <h1 className="display-3">Hi!</h1>
                <p className="lead">This is a simple demo implemented by <strong>Omar Ayad</strong> and <strong>Ahmed Waheed</strong> using <strong>ASP.NET Core</strong> and <strong>React.js</strong>, respectively.</p>
                <hr className="my-4" />
                <p className="lead">
                    <Link to="/" className="btn btn-primary btn-lg" role="button">BACK TO HOME</Link>
                </p>
            </div>
        </div>
    );
};

export default about;