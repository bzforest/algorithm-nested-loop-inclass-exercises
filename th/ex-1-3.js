/* 
ให้เขียน Function ที่ชื่อว่า generatePattern ซึ่งมีคุณสมบัติต่อไปนี้
    1. รับ Parameter 1 ตัวคือ size
        1. size เป็น Data Type ประเภท Number ที่บรรจุตัวเลข 
    2. Function นี้จะนำ size มาสร้างรูปแบบเป็นครึ่งสามเหลี่ยมหัวคว่ำ และ Return ค่าออกมา
    3. เมื่อ Algorithm นี้ทำงานจะเห็นผลลัพธ์ด้านล่าง
*/

function generatePattern (size) {
    let result = "";

    for (let i = 0; i < size; i++) {
        let row = "";
    for (let j = 0; j < size-[i]; j++) {
            row += "# "
        }
        result += row +"\n"
    }
    return result
}

console.log(generatePattern(3)); 

/* 

* * * 
* * 
*  

*/ 


console.log(generatePattern(5)); 

/*

* * * * * 
* * * * 
* * * 
* * 
* 

*/
