import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return (
        <div className="container section">
            <article className="message is-danger">
                <div className="message-header">
                    <p>Error</p>
                </div>
                <div className="message-body">
                    {message}
                </div>
            </article>
        </div>
    )
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;