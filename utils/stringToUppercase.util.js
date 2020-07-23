const capitaliseEveryWord = city => {
  return city
    .toLowerCase()
    .split(' ')
    .map(string => string.charAt(0).toUpperCase() + string.substring(1))
    .join(' ');
};

module.exports = { capitaliseEveryWord };
