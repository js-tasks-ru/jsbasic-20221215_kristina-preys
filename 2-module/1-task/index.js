function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    if (typeof salaries[salary] == 'number') {
      if (isFinite(salaries[salary])) {
        sum += salaries[salary];
      }
    }
  }
  return sum;
}
