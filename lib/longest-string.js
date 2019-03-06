/***************************
 * Encontrar la sub-sequencia mas larga de numeors consecutivos en una secuencia de digitos.
 * Se asume que estamos buscando la lista mas larga de numeros *acendentes*
 */

const longestString = sequence => {
    const sequenceLength = sequence.length
    if (sequenceLength <= 1) return sequence

    let run = 1
    let head = sequence[0]

    let longestRun = run
    let tallestHead = head

    for (let next = 1; next < sequenceLength; next++) {
        if (sequence[next] === head + 1) {
            run++
        } else {
            if (run > longestRun) {
                longestRun = run
                tallestHead = head
            }
            run = 1
        }
        head = sequence[next]
    }
    if (run > longestRun) {
        longestRun = run
        tallestHead = head
    }

    // ideally we should return the run/tail or run/head parameters
    // instead we are building a sequence like so...
    const result = []
    const start = tallestHead - longestRun + 1
    for (let i = start; i <= tallestHead; i++) {
        result.push(i)
    }
    return result
}

const samples = [
    [],
    [7],
    [3, 4],
    [4,3],
    [1, 2, 5, 3, 7, 8, 9],
    [6, 8, 9, 3, 4, 5]
]

for (const sample of samples) {
    console.log({sample, longestString: longestString(sample)})
}

module.exports = longestString
