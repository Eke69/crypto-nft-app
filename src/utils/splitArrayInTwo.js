export function splitArrayIntoTwoParts(array) {
    const length = array.length;
    const midPoint = Math.ceil(length / 2);
    const firstPart = array.slice(0, midPoint);
    const secondPart = array.slice(midPoint, length);
    return [firstPart, secondPart];
}
