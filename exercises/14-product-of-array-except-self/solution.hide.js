function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= postfix;
    postfix *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
