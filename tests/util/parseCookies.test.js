const parseCookies = require('../../util/parseCookies')

test('Assert parse cookies OK', () => {
    expect(
        parseCookies('a=b;c=d')
    ).toEqual(
        {a: 'b', c: 'd'}
    )
});

test('Assert parse cookies empty', () => {
    expect(
        parseCookies('')
    ).toEqual(
        {}
    )
});
