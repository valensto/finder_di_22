module.exports = function (wallaby) {
	return {
		files: ['src/**/*.ts'],
		tests: ['test/*.test.ts'],
		env: {
			type: 'node',
			params: {
				runner: '--experimental-vm-modules',
			},
		},
	};
};
