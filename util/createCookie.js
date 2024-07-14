const crypto = require("crypto")

function createCookie(username, res) {
    const hash = crypto.createHash('md5').update(username).digest('hex');
    res.cookie('username', hash, {
        maxAge: 1000 * 60 * 60 * 24 * 356,
        httpOnly: true,
        secure: true
    });
}

module.exports = createCookie;
