/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import couple from "./index";

test(({same, end}) => {
  same(couple("a")("b"), ["a", "b"]);

  end();
});
