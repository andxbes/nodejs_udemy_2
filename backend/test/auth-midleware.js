const { expect } = require('chai');
const authMiddleware = require('../middleware/is-auth');

it('shold throw an error if no authorization header', () => {
    const req = {
        get: function (headerName) {
            return null;
        }
    }
    expect(authMiddleware.bind(this, req, {}, () => { })).to.throw(
        'Not authenticated.'
    );
})

it('shold throw an error if the authorization is only one string', () => {
    const req = {
        get: function (headerName) {
            return 'xyz';
        }
    }
    expect(authMiddleware.bind(this, req, {}, () => { })).to.throw(
        'Not authenticated.'
    );
})
