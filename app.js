function factorial(n) {
    if (n === 0) {  
        return 1;
    } else {
        return n * factorial(n - 1);  
    }
}


let number = parseInt(prompt("عدد را وارد کنید: "));
let startRecursive = performance.now();
let endRecursive = performance.now();

let result = factorial(number);
console.log(`فاکتوریل ${number} برابر است با: ${result}`);
console.log(`زمان اجرای تابع بازگشتی: ${endRecursive - startRecursive} میلی‌ثانیه`);
alert(`فاکتوریل ${number} برابر است با: ${result}`);
