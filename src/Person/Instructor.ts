import { PersonRole } from '../types';
import { Person } from './Person';

export class Instructor extends Person {
	constructor(code: string, ln: string, fn: string) {
		super(code, ln, fn, PersonRole.Instructor);
	}
}
