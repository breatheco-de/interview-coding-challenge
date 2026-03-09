function CodelandUsernameValidation(str) {
  // TODO: implement validation rules
  // 1) between 4 and 25 chars
  // 2) starts with a letter
  // 3) only letters, numbers and underscore
  // 4) does not end with underscore
  return false;
}

// read input from readline() or input() depending on the judge environment
const _raw = (typeof readline === "function" ? readline() : (typeof input === "function" ? input() : undefined));
const _arg = typeof _raw === "string" ? _raw : "";
console.log(CodelandUsernameValidation(_arg));
