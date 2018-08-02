module.exports = function log(string) {
    if (typeof string !== "string") throw new TypeError("log requires a string");
    console.log(`${string}:`, eval(string));
};