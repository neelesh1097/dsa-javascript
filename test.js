function test() {
let obj = new Solution();
console.log(obj.nthFibonacci(1421));
}
class Solution {
    
    nthFibonacci(n) {
         if (n < 0) {
             return "Invalid input (negative number)";
         }
 
         if (n <= 1) {
             return n;
         }
 
         let a = 0;
         let b = 1;
 
         for (let i = 2; i <= n; i++) {
             let sum = a + b;
             a = b;
             b = sum;
         }
 
         return Number(sum);
     }
 }