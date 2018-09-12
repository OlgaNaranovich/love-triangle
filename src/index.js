/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
   	var number = 0;
 	
 	for (var i = 0; i < preferences.length; i++) {
	 	var k = preferences[i];
		var n = preferences.indexOf(k) + 1;
		
		if (k == n + 1) {
			n++;
		}
		if (k == n + 1) {
			n++;
		}if (k == n - 2) {
			number++;
		}	
 	}
	return number;
};
