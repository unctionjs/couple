export default function couple<L, R> (left: L) {
  return function coupleLeft (right: R): [L, R] {
    return [left, right];
  };
}
