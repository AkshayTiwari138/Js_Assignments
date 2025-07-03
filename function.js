function checkVoteEle(userAge) {
  // permater
  if (userAge >= 18) {
    console.log("you can vote.");
    if (userAge >= 21) {
      console.log("You can married.");
      return true;
    }
  }

  //   ----

  return false;
}

let response = checkVoteEle(17); // value pass argument
console.log("response : ", response);
