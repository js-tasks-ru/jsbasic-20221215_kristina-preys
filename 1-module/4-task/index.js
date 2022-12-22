function checkSpam(str) {
  const lowerstr = str.toLowerCase();
  if(lowerstr.includes("xxx") || lowerstr.includes("1xbet")) {
    return true
  }
  else return false
}

checkSpam("HeLlo");