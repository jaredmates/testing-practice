function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalize("hello"));

module.exports = capitalize;
// export default capitalize
