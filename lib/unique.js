/****************************************************
 * Remover de una secuencia los elementos repetidos.
 */

const unique = sequence => {
    const result = []
    for (item of sequence) {
        if (result.indexOf(item) < 0) {
            result.push(item)
        }
    }
    return result
}

const samples = [
     [1, 3, 2, 3, 4, 5, 6, 'h', 's', 'c', 'h', 3, 6]
]

for (const sample of samples) {
    console.log({sample, unique: unique(sample)})
}

module.exports = unique
