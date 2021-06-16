// [2,3,4,1] => [4,1,2,3]

function presents(a) {
    let output = Array(a.length)
    for (let i = 0; i < a.length; i++) {
        output[a[i]] = i + 1

        console.log(output[a[i]], i + 1, output)
    }
    output.shift()
    return output
}

presents([2, 3, 4, 1])