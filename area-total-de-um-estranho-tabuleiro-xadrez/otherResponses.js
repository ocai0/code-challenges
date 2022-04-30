/**
 * The code below is not mine or is an answer t the proposed problem, but rather other people's code that i've finded interesting
 */

// slow solution O(N²)
function slowRef(cols, rows) {
const result = [0, 0]
for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
    result[(x ^ y) & 1] += cols[x] * rows[y]
    }
}
return result
}

// the O(n) solution that evaluates correctly and quickly
function fastRef(cols, rows) {
const sums = cols.reduce((a, c, i) => (a[i & 1] += c, a), [0, 0])
return rows.reduce((a, c, i) => {
    a[0] += c * sums[i & 1]
    a[1] += c * sums[~i & 1]
    return a
}, [0, 0])
}

function whiteBlackAreas(cols, rows) {
let h1=0,h2=0,w1=0,w2=0;
for(let i=0; i<cols.length; i++){
    if(i%2===0){
    w1+=cols[i]; 
    h1+=rows[i]
    }else {
    w2+=cols[i]; 
    h2+=rows[i]
    }
}
return [w1*h1+w2*h2, w1*h2+w2*h1]
}

const sumByEvenAndOddKeys = arr => arr.reduce((sums, val, i) => (sums[i % 2] += val, sums), [ 0, 0 ]);

function whiteBlackAreas(cols, rows) {
  
  const c = sumByEvenAndOddKeys(cols)
  ,     w = sumByEvenAndOddKeys(rows);
 
  return [ 
    c[0] * w[0] + c[1] * w[1], 
    c[1] * w[0] + c[0] * w[1] 
  ];
  
}