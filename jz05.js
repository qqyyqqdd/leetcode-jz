/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
	s = decodeURI(s);
	return encodeURI(s);
};

var s = "%20";
console.log(replaceSpace(s));