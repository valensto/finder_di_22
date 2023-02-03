export class Path {
	constructor(private _path: string) {
		const reg = new RegExp(
			'^[a-z]:(/|\\\\)([a-zA-Z0-9_ -]+\\1)*[a-zA-Z0-9_ @-]+.xml$',
			'i'
		);

		if (!reg.test(_path)) {
			throw new Error('Path must be a valid path');
		}
	}

	path() {
		return this._path;
	}
}
