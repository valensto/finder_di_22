import { validate } from 'uuid';
import { Path } from '../Path';
import { Person } from '../Person/Person';
import { UUID } from '../types';

export abstract class Asset {
	constructor(
		private _uuid: UUID,
		protected _name: string,
		private _author: Person,
		private _path: Path
	) {
		if (!validate(_uuid)) {
			throw new Error('Asset name must be a valid UUID');
		}

		if (_name.length <= 0) {
			throw new Error("Asset name can't be empty");
		}
	}

	name(): string {
		return this._name;
	}
}
