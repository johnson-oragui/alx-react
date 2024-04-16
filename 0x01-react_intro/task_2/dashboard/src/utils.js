function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

console.log(getFullYear());

module.exports = { getFullYear, getFooterCopy };
