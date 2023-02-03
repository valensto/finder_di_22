import { PersonRole } from '../types';
import { Person } from './Person';

export class Student extends Person {
	constructor(code: string, ln: string, fn: string) {
		super(code, ln, fn, PersonRole.Student);
	}


}
