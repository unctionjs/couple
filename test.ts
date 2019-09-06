
import couple from "./index.ts";

test(() => {
  expect(couple("a")("b")).toEqual(["a", "b"]);
});
