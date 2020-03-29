import React from 'react';
import PropTypes from 'prop-types';

const CheckboxFilter = ({ label, id, checked, onChange }) => {
    return (
        <div className="field">
            <div className="control">
                <label className="checkbox" htmlFor={id}>
                    <input id={id} type="checkbox" checked={checked} onChange={onChange} />
                    <span className="title is-5">{label}</span>
                </label>
            </div>
        </div>
    )
};

CheckboxFilter.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

CheckboxFilter.defaultProps = {
    checked: false,
    label: '',
    id: '',
}

export default CheckboxFilter;