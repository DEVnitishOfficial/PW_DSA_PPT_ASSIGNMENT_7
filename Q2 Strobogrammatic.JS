/* <aside>
💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

</aside> */

function isStrobogrammatic(num) {
    const strobogrammaticMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
    
    let rotatedNum = '';
    
    for (let i = num.length - 1; i >= 0; i--) {
      const digit = num[i];
      
      if (!strobogrammaticMap.hasOwnProperty(digit)) {
        return false;
      }
      
      rotatedNum += strobogrammaticMap[digit];
    }
    
    return rotatedNum === num;
  }
  const num = "69";
  console.log(isStrobogrammatic(num));   
  