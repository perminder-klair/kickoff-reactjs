import React, { PropTypes, Component } from 'react';
import _ from 'underscore';

class SelectInputGroup extends Component {
    onChange = (e) => {
        this.props.onChange(e);

        setTimeout(() => this.props.onBlur(), 500);//also trigger submit
    };

    render() {
        return (
            <div className="field">
                <label>{this.props.label}</label>
                <select
                    className="ui fluid dropdown"
                    name={this.props.name}
                    id={this.props.name}
                    defaultValue={this.props.value}
                    onChange={this.onChange}>
                    {_.map(this.props.options, (value, key) => {
                        return (
                            <option
                                key={key}
                                value={key}>{value}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

SelectInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    options: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func
};

export default SelectInputGroup;