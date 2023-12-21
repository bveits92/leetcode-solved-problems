/**
 * @param {number} n
 * @return {string}
 */
function thousandSeparator(n) {
    // Convert the integer to a string
    const nStr = n.toString();

    // Initialize an empty result string
    let result = "";

    // Initialize a counter to keep track of the position
    let counter = 0;

    // Iterate through the characters of the string in reverse order
    for (let i = nStr.length - 1; i >= 0; i--) {
        // If the counter reaches 3, add a dot and reset the counter
        if (counter === 3) {
            result = "." + result;
            counter = 0;
        }

        // Add the current character to the result
        result = nStr[i] + result;

        // Increment the counter
        counter++;
    }

    return result;
}