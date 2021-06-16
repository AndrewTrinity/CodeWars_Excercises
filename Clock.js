//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  //#Happy Coding! ^_^
  let hour = h * 3600000
  let minute = m * 60000
  let seconds = s * 1000
  return hour + minute + seconds
}
