/* 
ให้เขียน Function ที่ชื่อว่า sumAllValues ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ matrix
        1. matrix เป็น Array 2 มิติที่บรรจุ Array ไว้
    - Function นี้จะนำตัวเลขแต่ละตัวที่บรรจุไว้ใน matrix มารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

function sumAllValues (matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum = sum + matrix[i][j]
    }
  }
  return sum
}

const matrix = [
  [11, 25, 18],
  [30, 16, 12],
  [20, 15, 13],
];

console.log(sumAllValues(matrix)); // 160
