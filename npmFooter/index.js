'use strict';

var moment = require('moment');

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */

let year = moment().format('YYYY')

exports.footer = function (year, name) {
    return `Copyright ${year} ${name} All rights reserved`
};