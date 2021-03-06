// Node needs the declaration to permit usage of 'let' */
// eslint-disable-next-line strict
'use strict';

const expect = require('chai').expect;
const RequestError = require('../lib/RequestError');

describe('RequestError', () => {

  const message = 'foo';
  const status = 303;
  const response = { foo: 'bar' };
  const error = new RequestError(message, status, response);

  it('Supports message, status code and response', () => {
    expect(error.message).to.equal(message);
    expect(error.statusCode).to.equal(status);
    expect(error.response).to.equal(response);
  });

  it('Stringifies to a meaningful message', () => {
    expect(error.toString()).to.match(/\d{3}:.+/);
  });
});
