function factorial(n) {
  if (n == 0 || n == 1) {
    let answer = 1;
    return answer
  }
  if (n < 0) {
    return 'Can\'t count factorial for a negative number'
  }
  let answer = n;
  for (let i = 1; i < n; i++) {
    answer *= (n - i);
  }
  return answer;
}
