
getNumber = (num) => {
    var display = document.getElementById('input');
    switch (num) {
        case 1:
            display.value += "1";
            break;
        case 2:
            display.value += "2";
            break;
        case 3:
            display.value += "3";
            break;
        case 4:
            display.value += "4";
            break;
        case 5:
            display.value += "5";
            break;
        case 6:
            display.value += "6";
            break;
        case 7:
            display.value += "7";
            break;
        case 8:
            display.value += "8";
            break;
        case 9:
            display.value += "9";
            break;
        case 0:
            display.value += "0";
            break;
        case'.':
            display.value += ".";
            break;
    }
}

/*decimal = () => {
    var display = document.getElementById('input');
    if(display.includes('.')=== false) {
        display.value += '.'; 
    }
}??????*/
    


// clearAll function 
clearAll = () => {
    var display = document.getElementById('input');
    display.value = '';
}



// getOperate function
// create a switch statement 
getOperate = (operator) => {
    var display = document.getElementById('input');
    switch (operator) {
        case '+':
            display.value += '+';
            break;
        case '-':
            display.value += '-';
            break;
        case 'x':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;
    }
}

// delete function
// remove the last character in input string
var tempValue = 0;

deleteOne = () => {
    tempValue = tempValue.slice(0,tempValue.length-1);
    document.getElementById('input').value = tempValue;
}



/*define val call tempNum which is first input value of operate
get compute with second input value 
*/ 
equalTo = () => {
    var tempNum = document.getElementById('input').value;
    if(tempNum){
        document.getElementById('input').value=eval(tempNum)
    }
}

