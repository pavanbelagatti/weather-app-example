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

describe('Endpoint Test', () => {
    it('should return a 200 status code', (done) => {
      request('http://localhost:5004', (error, response, body) => {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });

