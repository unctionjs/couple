
import couple from "./index";

test(() => {
  expect(couple("a")("b")).toEqual(["a", "b"]);
});
