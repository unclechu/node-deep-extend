/*!
 * Node.JS module "Deep Extend"
 * @description Recursive object extending.
 * @author Viacheslav Lotsmanov (unclechu)
 */

/**
 * Extening object that entered in first argument.
 * Returns extended object or false if have no target object or incorrect type.
 * If you wish to clone object, simply use that:
 *  deepExtend({}, yourObj_1, [yourObj_N]) - first arg is new empty object
 */
module.exports = deepExtend = function (/*obj_1, [obj_2], [obj_N]*/) {
	var target, key, val, src, clone, args = [], i = 1;
	
	if (arguments.length < 1 || typeof arguments[0] !== 'object') {
		return false;
	}
	
	target = arguments[0];
	
	for (; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	
	if (args.length > 0) {
		args.forEach(function (obj) {
			if (typeof obj !== 'object') {
				return;
			}
			
			for (key in obj) {
				if (obj[key] !== void 0) {
					src = target[key];
					val = obj[key];
					
					if (val === target) {
						continue;
					}
					
					if (typeof val !== 'object') {
						target[key] = val;
						continue;
					}
					
					if (typeof src !== 'object') {
						clone = (Array.isArray(val)) ? [] : {};
						target[key] = deepExtend(clone, val);
						continue;
					}
					
					if (Array.isArray(val)) {
						clone = (Array.isArray(src)) ? src : [];
					} else {
						clone = (!Array.isArray(src)) ? src : {};
					}
					
					target[key] = deepExtend(clone, val);
				}
			}
		});
	}
	
	return target;
}
