module.exports = function log(string) {
    if (!string || typeof string !== 'string') throw new TypeError('log function requires a string argument');
    console.log(`${string}:`, eval(string));
};