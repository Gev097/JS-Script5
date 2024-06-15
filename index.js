

// Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝

//ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,

function repeatedElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(repeatedElements([1.1, 2.2, 3.3, 2.2]));

console.log(repeatedElements([1.1, 2.2, 3.3, 4.4])); 

////////////////////////////////////////////////////////

function repeatedElements(arr) {
    
    return arr.some((element, index) => arr.indexOf(element) !== index);
}


console.log(repeatedElements([1.1, 2.2, 3.3, 2.2]));

console.log(repeatedElements([1.1, 2.2, 3.3, 4.4])); 


//բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:


function uniqueElements(arr) {

    let uniqueElements = arr.filter(element => arr.indexOf(element) === arr.lastIndexOf(element));

    return uniqueElements.length;
}


console.log(uniqueElements([1.1, 2.2, 3.3, 2.2, 4.4])); // Output: 3 (1.1, 3.3, 4.4)

console.log(uniqueElements([1.1, 2.2, 2.2, 3.3, 3.3])); // Output: 1 (1.1)
