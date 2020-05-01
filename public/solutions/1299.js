let arr = [17, 18, 5, 4, 6, 1];
let replaceElements = function (arr, ind) {
    arr = arr.reverse();
    let sol = [], max = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sol.push(max)
            max = arr[i]
        }
        else {
            sol.push(max)
        }
    }
    sol.reverse()[sol.length - 1] = -1;
    return sol;
};

~function () { console.log(replaceElements(arr)) }() //*Örnek