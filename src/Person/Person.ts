import { PersonRole } from '../types';

export abstract class Person {
	protected _email: string;

	constructor(
		protected _code: string,
		protected _lastname: string,
		protected _firstname: string,
		protected _role: PersonRole
	) {
		if (_code.length !== 7) {
			throw new Error('Invalid pilot code. Must be 7 characters long.');
		}

		if (!/^\d+$/.test(_code)) {
			throw new Error('Invalid pilot code. Must be digits only.');
		}

		if (_lastname.length < 2) {
			throw new Error(
				'Invalid pilot lastname. Must be at least 2 characters long.'
			);
		}

		if (_firstname.length < 2) {
			throw new Error(
				'Invalid pilot firstname. Must be at least 2 characters long.'
			);
		}

		this._email = this._generateEmail();
	}

	private _generateEmail(): string {
		if (this._role !== PersonRole.Pilot) {
			return `${this._firstname}.${this._lastname.toLowerCase()}@viacesi.fr`;
		}

        const firstLetter = this._firstname.charAt(0).toLowerCase();
        return `${firstLetter}${this._lastname.toLowerCase()}@cesi.fr`;
	}

	getEmail(): string {
		return this._email;
	}
}
