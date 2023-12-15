function solution (input, markers) {
  let aux = false
  const result = input.split(' ').split('\n').map(wrd => {
    aux = markers.some(char => {
      if (wrd.includes(char)) {
        return true
      }
      if (wrd.includes('\n')) {
        return false
      }
      return aux
    })
    return aux === false ? wrd : undefined
  })

  return result.filter(Boolean).join('')
};

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
