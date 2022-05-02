/**
 * Get the greater number in the array
 * 
 * @param arrayOfNumbers 
 * @returns The greater number in the array
 */

const getTheGreater = (arrayOfNumbers: number[]) => {
    let greaterNumber: number = undefined
    for(const currentNumber of arrayOfNumbers) {
        const FIRST_INTERACTION = (greaterNumber === undefined)
        const CURRENT_NUMBER_IS_GREATER_THAN_PREVIOUS_ONE = (currentNumber > greaterNumber)
        greaterNumber = (booleanToNumber(FIRST_INTERACTION) * currentNumber)
            + (booleanToNumber(!FIRST_INTERACTION && CURRENT_NUMBER_IS_GREATER_THAN_PREVIOUS_ONE) * currentNumber)
            + (booleanToNumber(!FIRST_INTERACTION && !CURRENT_NUMBER_IS_GREATER_THAN_PREVIOUS_ONE) * greaterNumber)
    }
    return greaterNumber
}

const booleanToNumber = (boolValue: boolean) => boolValue ? 1 : 0

export default getTheGreater;