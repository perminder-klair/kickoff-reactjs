/*global $:true*/

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import _ from 'underscore';

class SwitchGroup extends Component {
    componentDidMount() {
        let self = this;
        $(`.checkbox.${this.props.name}`)
            .checkbox({
                onChecked() {
                    self.props.onChange(true);
                },
                onUnchecked() {
                    self.props.onChange(false);
                },
                onChange: function() {
                    if (_.isFunction(self.props.onBlur)) {
                        self.props.onBlur();
                    }
                }
            });
    }

    render() {
        return (
            <div className="grouped fields">
                {!_.isUndefined(this.props.largeLabel) ? <label className="large">{this.props.largeLabel}</label> : null }
                <div className="field">
                    <div className={classNames('ui slider checkbox', this.props.name)}>
                        <input
                            type="checkbox"
                            name={this.props.name}
                            defaultChecked={this.props.value}/>
                        {!_.isUndefined(this.props.label) ? <label>{this.props.label}</label> : null }
                    </div>
                </div>
            </div>
        )
    }
}

SwitchGroup.propTypes = {
    name: PropTypes.string.isRequired,
    largeLabel: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
};

export default SwitchGroup;