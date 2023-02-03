import { PersonRole } from "../types";
import { Person } from "./Person";

export class Pilot extends Person {
    constructor(code: string, ln: string, fn: string){
		super(code, ln, fn, PersonRole.Pilot);
	}

	// override _generateEmail(): string {
	// 	const firstLetter = this._firstname.charAt(0).toLowerCase();
	// 	return `${firstLetter}${this._lastname.toLowerCase()}@cesi.fr`;
	// }		
}