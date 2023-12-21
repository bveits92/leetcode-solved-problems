/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
    // Extract x-coordinates and sort them
    const xCoordinates = points.map(point => point[0]);
    xCoordinates.sort((a, b) => a - b);
    
    let maxWidth = 0;
    
    // Calculate the width of each vertical area and find the maximum
    for (let i = 1; i < xCoordinates.length; i++) {
        const width = xCoordinates[i] - xCoordinates[i - 1];
        maxWidth = Math.max(maxWidth, width);
    }
    
    return maxWidth;
}