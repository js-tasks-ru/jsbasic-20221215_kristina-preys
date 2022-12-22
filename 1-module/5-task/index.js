function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let strShort = str.slice(0, maxlength-1)+"…";
    return strShort
  }
  else return str;
}
