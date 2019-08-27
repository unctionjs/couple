export default function couple (left) {
  return function coupleLeft (right) {
    return [left, right];
  };
}
