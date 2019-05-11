import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const loading = (props) => {
    return (
        <div style={{ paddingTop: "3rem", textAlign: "center" }}>
            <FontAwesomeIcon style={{ fontSize: "3rem", color: "5FC1E8" }}
                className="fa-pulse"
                icon={faSpinner} />
        </div>
    );
};

export default loading;