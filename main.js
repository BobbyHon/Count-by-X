function countBy(x, n) {
    let answer = []
    for (let i = x; i <= x * n; i += x){
      answer.push(i)
    }
    
    return answer
  }