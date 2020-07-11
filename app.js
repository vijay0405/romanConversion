
function generateRandomColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }

    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



function convertInt() {
    let inputValue = document.getElementById('inputField').value;
    let result = "";
    const intArray = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanArray = ['V&#773;', 'MV&#773;', 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    if (inputValue > 0) {
        for (let i = 0; i < intArray.length; i++) {
            while (intArray[i] <= inputValue) {
                result += romanArray[i]
                inputValue -= intArray[i]
            }
        }
        // console.log(result);
        document.getElementById('display').innerHTML = "Result : " + result;
    } else if (inputValue == 0) {
        document.getElementById('display').innerHTML = "Result : nulla";
    } else {
        document.getElementById('display').innerHTML = "Error : enter valid input";
    }

    let colors = generateRandomColor(50);
    document.getElementById('main-body').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
}