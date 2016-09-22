import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'underscore';

//
const Breadcrumb = ({ data }) => (
    <div className="ui container">
        <div className="ui breadcrumb">
            <Link className="section" to="/">Home</Link>
            {data.map((item, index) => {
                return (
                    <span key={index}>
                        <i className="right chevron icon divider"/>
                        {!_.isUndefined(item.path) ?
                            <Link className="section" to={item.path}>{item.title}</Link>
                            :
                            <div className="section active">{item.title}</div>
                        }
                    </span>
                )
            })}
        </div>
    </div>
);

Breadcrumb.propTypes = {
    data: PropTypes.array.isRequired
};

export default Breadcrumb;