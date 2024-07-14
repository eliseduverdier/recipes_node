const crypto = require("crypto")

function isLogged(cookies) {
    const hash = crypto.createHash('md5').update(process.env.USERNAME).digest('hex');

    return cookies.username === hash;
}

module.exports = isLogged;
