const chai = require("chai")
const assert = chai.assert

describe("Solution", function() {
  it("Should obtain correct white and black total areas in fixed test boards", function() {
    assert(Array.isArray(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2])), 'Returned solution should be an array')
    assert.deepEqual(whiteBlackAreas([3,1,2,7,1],[1,8,4,5,2]), [146,134], 'Returned solution should give total white area = 146, total black area = 134, returned as a 2-element array')
    assert.deepEqual(whiteBlackAreas([3, 1, 2, 7, 1, 11, 12, 3, 8, 1], [1, 8, 4, 5, 2, 21, 5, 2, 2, 17]), [1583,1700], 'Returned solution should give total white area = 1583, total black area = 1700, returned as a 2-element array')
    assert.deepEqual(whiteBlackAreas([3],[2]), [6,0], 'Returned solution should give total black area = 0 when there is only one row and one column in the board, since the only cell is colored WHITE')  
  })
})
