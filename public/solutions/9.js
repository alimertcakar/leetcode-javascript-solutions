function isPalindrome(n) {
    n = n || 1881; //* <--- 
    if (n < 0) return false;
    else if (n < 10) return true;
    let reverse = null; currentNumber = n;
    while (currentNumber > 0) {
        reverse = reverse * 10 + currentNumber % 10;
        currentNumber = Math.floor(currentNumber / 10)
    }
    console.log(reverse === n)
}

~function () { isPalindrome(/* istediğiniz sayı */) }() 
