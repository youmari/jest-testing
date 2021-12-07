const capitalizeString = string => {
    const [first, ...others] = string;
    const str = [first.toUpperCase(),...others].join('');
    return str;
}

module.exports = capitalizeString;