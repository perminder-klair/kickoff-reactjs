"use strict";

import validate from 'validate.js';
import _ from 'underscore';

module.exports.email = function (val) {
    let result = validate({val}, {val: {email: true }});
    return _.isUndefined(result);
};

module.exports.min = function (val, length) {
    val = val.toString();
    let result = validate({val}, {val: {length: {minimum: length}}});
    return _.isUndefined(result);
};

module.exports.match = function (val, val2) {
    let result = validate({val, val2}, {val2: {equality: 'val'}});
    return _.isUndefined(result);
};

module.exports.checked = function (val) {
    return val === true;
};

module.exports.between = function (val, from, to) {
    return val > from && val < to;
};