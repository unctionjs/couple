/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import couple from "./source"

test(({same, end}) => {
  same(couple("a")("b"), ["a", "b"])

  end()
})
