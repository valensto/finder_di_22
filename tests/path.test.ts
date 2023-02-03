import test from "ava"
import { Path } from "../src/Path";

test("Path should be valid", (t) => {
    const err = t.throws(() => {
        new Path('qsdqsd');
    })

    t.is(err?.message, "Path must be a valid path")
})