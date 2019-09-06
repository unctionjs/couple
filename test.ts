
import couple from "./index";

test("works", () => {
  expect(couple("a")("b")).toEqual(["a", "b"]);
});
