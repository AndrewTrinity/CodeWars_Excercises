//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
  let sum = marks.reduce((acc, e) => acc + e)
  let avg = sum / marks.length
  return Math.floor(avg)
}


let array = [1, 2, 3, 4, 5]
let sum = array.reduce((acc, e) => acc + e, 0)


