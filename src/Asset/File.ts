import { Path } from '../Path';
import { Person } from '../Person/Person';
import { Extension, UUID } from '../types';
import { Asset } from './Asset';

export class File extends Asset {
	private _ext: Extension;

	constructor(uuid: UUID, filename: string, author: Person, path: Path) {
        const { ext, nameWithoutExt } = File.splitFileName(filename);
		super(uuid, nameWithoutExt, author, path);
		this._ext = ext;
	}

	private static splitFileName(fileName: string): {nameWithoutExt: string; ext: Extension} {
		const arr = fileName.split('.');
		const extStr = arr.pop();
		const ext = (<any>Extension)[extStr?.toUpperCase() || ""];
		if (ext === undefined) {
			throw new Error(`File has an invalid extension`);
		}

		fileName = arr.join('.');

		return { nameWithoutExt: fileName, ext: ext };
	}

	extension(): Extension {
		return this._ext;
	}

	override name(): string {
		return this._name + '.' + Extension[this._ext].toLowerCase();
	}
}
