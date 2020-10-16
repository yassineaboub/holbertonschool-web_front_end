let roomDimensions = {
    width : 50,
    length: 100,
}
function getArea(){
    return this.width * this.length
}
let boundGetArea = getArea.bind(roomDimensions)
console.log(boundGetArea());
// let roomDimensions = {
//         width : 50,
//         length: 100,
//         getArea() {
//             return this.width * this.length
//         }
//     }
// let boundGetArea = roomDimensions.getArea.bind(roomDimensions)
// console.log(boundGetArea());
