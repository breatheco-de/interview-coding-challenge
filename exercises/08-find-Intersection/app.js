function FindIntersection(strArr) {
  // TODO: implement intersection logic
  // strArr is expected to be an array with two strings like "1, 3, 4" and "1, 2, 4"
  return false;
}

// IGNORE BELOW THIS LINE
// Read input (support both readline and input)
const _raw = (typeof readline === "function" ? readline() : (typeof input === "function" ? input() : undefined));
let _arg = _raw;
try {
  _arg = JSON.parse(_raw);
} catch (e) {
  // keep as-is
}

console.log(FindIntersection(_arg));
