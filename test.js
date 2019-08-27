
import {test} from "tap";

import couple from "./";

test(({same, end}) => {
  same(couple("a")("b"), ["a", "b"]);

  end();
});
