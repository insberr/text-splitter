module.exports = {
	quote: {
		single: /((?<![\\])['])((?:.(?!(?<![\\])\1))*.?)\1/g,
		double: /((?<![\\])["])((?:.(?!(?<![\\])\1))*.?)\1/g,
		back: /((?<![\\])[`])((?:.(?!(?<![\\])\1))*.?)\1/g,
		all: /((?<![\\])['"`])((?:.(?!(?<![\\])\1))*.?)\1/g
	},
	json: null,
	array: null,
	url: null
};
