function boolToWord(bool) {
    const word = bool.toString()
    if (word === true) {
        return "Yes"
    } else if (word !== true) {
        return "No"
    }
}