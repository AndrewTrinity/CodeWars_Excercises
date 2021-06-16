// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let result = "";
  if (s.length % 2 !== 0) {
    return (result = s[Math.floor(s.length / 2)]);
  } else {
    result = s[s.length / 2 - 1];
    result += s[s.length / 2];
    return result;
  }
}

//   function getMiddle(s)
//   for(let i=0;i<s.length;i++){
//       if(s.length %2==0){
//           return `${s[s.length/2]}${s[s.length/2+1]} `
//       } else{
//           return `${s[Math.floor(s.length/2)]}`

//   }
// }