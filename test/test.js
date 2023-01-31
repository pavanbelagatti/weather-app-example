var assert = require('assert');
const request = require('request');

describe('Basic Mocha String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Weather API is Running!".length, 23);
    });
 it('should return second charachter of the string', function () {
        assert.equal("Weather API is Running!".charAt(1), 'e');
    });
});
