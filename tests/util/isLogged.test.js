const isLogged = require('../../util/isLogged')
const crypto = require("crypto")

test('Assert is logged', () => {
    process.env.USERNAME = 'test';
    const hash = crypto.createHash('md5').update('test').digest('hex');
    expect(
        isLogged({username: hash})
    ).toBeTruthy()
});

test('Assert isn’t logged', () => {
    expect(
        isLogged({username: 'nope'})
    ).toBeFalsy()
});
