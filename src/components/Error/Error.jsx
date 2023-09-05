import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const Error = () => {
    return (
        <div>
            <FontAwesomeIcon width='150px' height='150px' icon={faCircleExclamation} />
            <h2>404</h2>
            <p>Page Not Found</p>
        </div>
    );
};

export default Error;