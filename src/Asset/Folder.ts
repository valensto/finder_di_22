import { Path } from '../Path';
import { Person } from '../Person/Person';
import { UUID } from '../types';
import { Asset } from './Asset';

export class Folder extends Asset {
	constructor(uuid: UUID, name: string, author: Person, path: Path) {
		super(uuid, name, author, path);
	}
}
