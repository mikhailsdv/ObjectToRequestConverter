const convert = function(arr, startPath = "") {
	const getType = q => Object.prototype.toString.call(q);

	function converter(list, path, result = {}) {
		for (let key in list) {
			let _path = `${path}[${key}]`;
			let item = list[key];
			let typeVal = getType(item);
			if (("[object Array]" === typeVal) || ("[object Object]" === typeVal)) {
				converter(item, _path, result);
			} else {
				result[_path] = item;
			}
		}
		return result;
	}
	return converter(arr, startPath);
};