function caesar(text) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let newArray = [];

  for (let i = 0; i < text.length; i++) {
    let letterIndex = abc.indexOf(text[i]);
    let code = -1;
    let codeIndex;

    if (letterIndex === -1) {
      newArray.push(" ");
    } else if (letterIndex + code < 0) {
      codeIndex = abc[((letterIndex + code) % abc.length) + abc.length];
      newArray.push(codeIndex);
    } else {
      codeIndex = abc[(letterIndex + code) % abc.length];
      newArray.push(codeIndex);
    }
  }

  newArray = newArray.join("");
  console.log(newArray);
  return newArray;
}

//caesar("adiosa");
//caesar("efgfoe uif fbtu xbmm pg uif dbtumf");
caesar("a");
module.exports = caesar;
