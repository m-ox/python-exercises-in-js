'use strict';

var moment = require('moment');

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */

var year = moment().format('YYYY')

exports.footer = function (name) {
    return `Copyright ${year} ${name} All rights reserved`
};