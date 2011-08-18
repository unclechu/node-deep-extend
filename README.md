Node.JS module "Deep Extend"
============================

For recursive object extending.

Usage
-----

	var deepExtend = require('node-deep-extend'),
		obj1 = {
			a: 1,
			b: 2,
			d: {
				a: 1,
				b: [],
				c: {
					test1: 123,
					test2: 321
				}
			},
			f: 5
		},
		obj2 = {
			b: 3,
			c: 5,
			d: {
				b: {
					first: 'one',
					second: 'two'
				},
				c: {
					test2: 222
				}
			},
			e: {
				one: 1,
				two: 2
			},
			f: []
		};
	
	deepExtend(obj1, obj2);
	console.log(obj1);
	console.log(obj2);