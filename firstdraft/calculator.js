function getNumber(num) {
    var screen_num = document.getElementById('input')
    switch(num){
        case 1:
            screen_num.value += 1;
            break;
        case 2:
            screen_num.value += 2;
            break;
        case 3:
            screen_num.value += 3;
            break;
        case 4:
            screen_num.value += 4;
            break;
        case 5:
            screen_num.value += 5;
            break;
        case 6:
            screen_num.value += 6;
            break;
        case 7:
            screen_num.value += 7;
            break;
        case 8:
            screen_num.value += 8;
            break;
        case 9:
            screen_num.value += 9;
            break;
        case 0:
            screen_num.value += 0;
            break;
        

    }
}

function clearAll() {
    document.getElementById('input').value="";
}

function getOperate(operand) {
    var operate_num = document.getElementById('input');
    switch(operand) {
        case '+':
            operate_num.value += '+';
            break;
        case '-':
            operate_num.value += '-';
            break;
        case '*':
            operate_num.value += '*';
            break;
        case '/':
            operate_num.value += '/';
            break;
    }
}

function equalTo() {
    var tempNum = document.getElementById('input').value;
    if(tempNum){
    document.getElementById('input').value = eval(tempNum)
    }
    
}