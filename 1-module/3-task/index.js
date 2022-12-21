function ucFirst(str) {
  if (str.length < 1) {
    return ""
  }
  const ucLetter = str[0].toUpperCase();
  const endStr = str.slice(1);

  capitalizedStr = ucLetter+endStr;

  return capitalizedStr;
}
