/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;

		for (let i = 0; i < preferences.length; i++) {
				let indx = i + 1;

				let spich1 = preferences[i];
				let spich2 = preferences[spich1 - 1];
				let spich3 = preferences[spich2 - 1];

				if (spich1 === spich2 && spich2 === spich3) {
						continue;
				}

				if (indx === spich3) {

						count++;
						delete preferences[indx-1];
						delete spich2;
						delete spich3;
				}
		}

		return count;
};

