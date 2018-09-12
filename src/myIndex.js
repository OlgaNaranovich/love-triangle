/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

function getLoveTrianglesCount(preferences = []) {
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
	console.log(number);
};
getLoveTrianglesCount(preferences = [23, 15, 37, 5, 20, 20, 25, 34, 10, 15, 6, 31, 14, 16, 9, 13, 12, 23, 24, 4, 28, 1, 38, 41, 29, 27, 34, 21, 7, 23, 17, 30, 7, 26, 33, 14, 40, 1, 39, 18, 19]);
