function parseCookies(cookieList) {
    if (cookieList === '' || typeof cookieList === 'undefined') {
        return {};
    }
    let parsedCookies = {}, key, value;
    const cookies = cookieList.split(';')
    for (let i = 0; i < cookies.length; i++) {
        [key, value] = cookies[i].split('=')
        parsedCookies[key] = value;
    }
    return parsedCookies;
}

module.exports = parseCookies;
