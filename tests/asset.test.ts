import test from "ava"
import { Asset } from "../src/Asset/Asset";
import { Path } from "../src/Path";
import { Pilot } from "../src/Person/Pilot";
import {File} from "../src/Asset/File"
import { Extension } from "../src/types";
import { Folder } from "../src/Asset/Folder";

const uuid = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
const author = new Pilot("1234567", "John", "Doe");
const path = new Path("C:/Users/JohnDoe/Documents/asset.xml");

test("Asset should have a valid UUID", (t) => {
    const err = t.throws(() => {
        new Folder('1', 'Asset 1', author, path);
    });

    t.is(err?.message, "Asset name must be a valid UUID");
})

test("Asset should not have a empty name", (t) => {
    const err = t.throws(() => {
        new Folder(uuid, '', author, path);
    })

    t.is(err?.message, "Asset name can't be empty")
})

test("File should generate a valid pdf extension", (t) => {
    const file = new File(uuid, 'test.pdf', author, path);
    t.is(file.extension(), Extension.PDF);
})

test('File should generate a valid jpg extension', (t) => {
	const file = new File(uuid, 'test.jpg', author, path);
	t.is(file.extension(), Extension.JPG);
});

test('File should generate a valid pptx extension', (t) => {
	const file = new File(uuid, 'cube.4.pptx', author, path);
	t.is(file.extension(), Extension.PPTX);
});

test('File should not generate a unauthorized extension', (t) => {
	const err = t.throws(() => {
        new File(uuid, 'test.aaaa', author, path)
    })

    t.is(err?.message, `File has an invalid extension`);
});

test('File should have a valid fullname (name + ext)', (t) => {
    const file = new File(uuid, 'test.pdf', author, path);
    t.is(file.name(), 'test.pdf');
})

test('Asset should not have a name with extension', (t) => {
	const a = new Folder(uuid, 'test.pdf', author, path);
	t.is(a.name(), 'test.pdf');
});