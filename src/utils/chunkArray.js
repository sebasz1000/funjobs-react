export const chunkArray = (arr, n) => {
    const result = []
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n))
    }
    return result
}