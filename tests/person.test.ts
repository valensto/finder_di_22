import test from "ava"
import { Instructor } from "../src/Person/Instructor";
import { Pilot } from "../src/Person/Pilot"
import { Student } from "../src/Person/Student";

test("pilot should have a valid code length", (t) => {
    const err = t.throws(() => {
        new Pilot('123', 'doe', 'john');
    })

    t.is(err?.message, "Invalid pilot code. Must be 7 characters long.")
})

test('pilot should have a valid code', (t) => {
	const err = t.throws(() => {
		new Pilot('123456A', 'doe', "john");
	});

	t.is(err?.message, 'Invalid pilot code. Must be digits only.');
});

test('pilot should have not a lastname length less than 2', (t) => {
    const err = t.throws(() => {
        new Pilot('1234567', 'a', "john");
    });

    t.is(err?.message, "Invalid pilot lastname. Must be at least 2 characters long.");
})

test('pilot should have not a firstname length less than 2', (t) => {
	const err = t.throws(() => {
		new Pilot('1234567', 'doe', 'b');
	});

	t.is(
		err?.message,
		'Invalid pilot firstname. Must be at least 2 characters long.'
	);
});

test('pilot should have a valid email', (t) => {
    const p = new Pilot('1234567', 'doe', 'john');
    t.is(p.getEmail(), 'jdoe@cesi.fr');
})

test('student should have a valid email', (t) => {
	const p = new Student('1234567', 'doe', 'john');
	t.is(p.getEmail(), 'john.doe@viacesi.fr');
});

test('instructor should have a valid email', (t) => {
	const p = new Instructor('1234567', 'doe', 'john');
	t.is(p.getEmail(), 'john.doe@viacesi.fr');
});