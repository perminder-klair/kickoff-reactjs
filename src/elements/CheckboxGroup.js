import React, { PropTypes, Component } from 'react';
import _ from 'underscore';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);

        let selectedValues = !_.isUndefined(props.value) && !_.isNull(props.value) && _.isArray(props.value) ? props.value : [];

        this.state = {
            toggleActive: !props.hasToggle || !_.isEmpty(selectedValues),
            selectedValues
        };
    }

    isChecked(option) {
        return _.indexOf(this.state.selectedValues, option) !== -1;
    }

    onChange = (e) => {
        let { selectedValues } = this.state;

        if (!_.isArray(selectedValues)) {
            selectedValues = [];
        }

        let value = e.target.value;
        let index = _.indexOf(selectedValues, value);

        if (index !== -1) {
            selectedValues.splice(index, 1)
        } else {
            selectedValues.push(value)
        }

        this.setState({
            selectedValues
        });

        this.props.onChange(selectedValues);
        setTimeout(() => this.props.onBlur(), 500);//also trigger submit
    };

    switchToggle = () => {
        let { selectedValues, toggleActive } = this.state;

        let obj = {toggleActive: !toggleActive};

        if (!toggleActive) {
            obj['selectedValues'] = false;
        }

        this.setState(obj);

        this.props.onChange(obj.toggleActive ? selectedValues : false);
    };

    render() {
        let { toggleActive } = this.state;
        let { hasToggle, label } = this.props;

        return (
            <div className="grouped fields">
                {hasToggle ?
                    <div className="field">
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                name={`active-${this.props.name}`}
                                value={toggleActive}
                                onChange={this.switchToggle}
                                onBlur={this.props.onBlur}
                                checked={toggleActive}/>
                            <label className="large"><strong>{label}</strong></label>
                        </div>
                    </div>
                    :
                    <label className="large">{label}</label>
                }

                {toggleActive ?
                    _.map(this.props.options, (value, key) => {
                        return (
                            <div className="field" key={key}>
                                <div className="ui checkbox">
                                    <input
                                        type="checkbox"
                                        name={this.props.name}
                                        value={key}
                                        onChange={this.onChange}
                                        onBlur={this.props.onBlur}
                                        checked={this.isChecked(key)}/>
                                    <label>{value}</label>
                                </div>
                            </div>
                        )
                    })
                    : null}
            </div>
        )
    }
}

CheckboxGroup.defaultProps = {
    hasToggle: false
};

CheckboxGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.bool
    ]),
    options: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    hasToggle: PropTypes.bool
};

export default CheckboxGroup;