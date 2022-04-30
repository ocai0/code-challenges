const whiteBlackAreas = (cs, rs) => {
    const areaOfTheChessboard = cs.reduce((finalValue, currentValue) => finalValue += currentValue, 0) * rs.reduce((finalValue, currentValue) => finalValue += currentValue, 0)

    const whiteColumn = {
        condensedPatternA: cs.reduce((finalValue, currentValue, index) => finalValue += (index % 2 === 0) * currentValue , 0),
        condensedPatternB: cs.reduce((finalValue, currentValue, index) => finalValue += (index % 2 === 1) * currentValue , 0),
        usingPatternA: true
    }

    let totalWhiteArea = 0
    for(let columnIndex = 0; columnIndex < rs.length; columnIndex++) {
        totalWhiteArea += rs[columnIndex] * ((whiteColumn.usingPatternA * whiteColumn.condensedPatternA) + (!whiteColumn.usingPatternA * whiteColumn.condensedPatternB))
        whiteColumn.usingPatternA = !whiteColumn.usingPatternA
    }
    const totalBlackArea = areaOfTheChessboard - totalWhiteArea
    return [ totalWhiteArea, totalBlackArea ]
}



let cs = [ 3, 1, 2, 7, 1 ]
let rs = [ 1, 8, 4, 5, 2 ]
console.log(whiteBlackAreas(cs, rs))