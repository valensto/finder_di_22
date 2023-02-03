import { urlToHttpOptions } from "url";
import { Path } from "../Path";
import { Person } from "../Person/Person";
import { Extension, UUID } from "../types";
import { Asset } from "./Asset";

// toto.txt

export class File extends Asset {
	private _ext: Extension;

	constructor(uuid: UUID, name: string, author: Person, path: Path) {
		super(uuid, name, author, path);

	}
}