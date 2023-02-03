import test from "ava"
import { Asset } from "../src/Asset/Asset";
import { Path } from "../src/Path";
import { Pilot } from "../src/Person/Pilot";
import { Extension } from "../src/types";

const uuid = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed';
const author = new Pilot("1234567", "John", "Doe");
const path = new Path("C:/Users/JohnDoe/Documents/asset.xml");

test("Asset should have a valid UUID", (t) => {
    const err = t.throws(() => {
        new Asset('1', 'Asset 1', author, path);
    });

    t.is(err?.message, "Asset name must be a valid UUID");
})

test("Asset should not have a empty name", (t) => {
    const err = t.throws(() => {
        new Asset(uuid, '', author, path);
    })

    t.is(err?.message, "Asset name can't be empty")
})
