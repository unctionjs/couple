/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import computedProp from "./source"

test(({same, end}) => {
  same(couple("a")("b"), ["a", "b"])

  end()
})
