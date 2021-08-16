var f_number_1 = ""
var f_number_2 = ""
var difference = 1
var operator_f = ""
var final_1 = ""
var final_2 = ""
var answer = ""

function number(current) {
    if(difference == 1){
        f_number_1 = f_number_1 + current;
        document.getElementById("answer").innerHTML = f_number_1;
    }else if(difference == 2){
        f_number_2 = f_number_2 + current;
        document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f + " " + f_number_2;
    }
}

function tally(){
    final_1 = parseInt(f_number_1);
    final_2 = parseInt(f_number_2);

    if(operator_f == "+"){
        answer = final_1 + final_2;
        document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f + " " + f_number_2 + " = " + answer;
        cleared_after()
    }else if(operator_f == "-"){
        answer = final_1 - final_2;
        document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f + " " + f_number_2 + " = " + answer;
        cleared_after()
    }else if(operator_f == "x"){
        answer = final_1 * final_2;
        document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f + " " + f_number_2 + " = " + answer;
        cleared_after()
    }else if(operator_f == "/"){
        answer = final_1 / final_2;
        document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f + " " + f_number_2 + " = " + answer;
        cleared_after()
    }else{
        console.log("error in calculation");
    }
}

function operation(operator){
    operator_f = operator
    difference = 2
    document.getElementById("answer").innerHTML = f_number_1 + " " + operator_f
}

function key(pressed){
    console.log(pressed.keyCode)
    if(pressed.keyCode == 49 || pressed.keyCode == 97){
        number('1')
    }else if(pressed.keyCode == 50 || pressed.keyCode == 98){
        number('2')
    }else if(pressed.keyCode == 51 || pressed.keyCode == 99){
        number('3')
    }else if(pressed.keyCode == 52 || pressed.keyCode == 100){
        number('4')
    }else if(pressed.keyCode == 53 || pressed.keyCode == 101){
        number('5')
    }else if(pressed.keyCode == 54 || pressed.keyCode == 102){
        number('6')
    }else if(pressed.keyCode == 55 || pressed.keyCode == 103){
        number('7')
    }else if(pressed.keyCode == 56 || pressed.keyCode == 104){
        number('8')
    }else if(pressed.keyCode == 57 || pressed.keyCode == 105){
        number('9')
    }else if(pressed.keyCode == 58 || pressed.keyCode == 96){
        number('0')
    }else if(pressed.keyCode == 106 || pressed.keyCode == 88){
        operation('x')
    }else if(pressed.keyCode == 109 || pressed.keyCode == 189){
        operation('-')
    }else if(pressed.keyCode == 111 || pressed.keyCode == 191){
        operation('/')
    }else if(pressed.keyCode == 107){
        operation('+')
    }else if(pressed.keyCode == 220){
        operation('/')
    }else if(pressed.keyCode == 13 || pressed.keyCode == 187){
        tally()
    }else if(pressed.keyCode == 67){
        cleared()
    }
}

function cleared(){
    document.getElementById("answer").innerHTML = "";
    f_number_1 = ""
    f_number_2 = ""
    difference = 1
    operator_f = ""
    final_1 = ""
    final_2 = ""
    answer = ""
}

function cleared_after(){
    f_number_1 = ""
    f_number_2 = ""
    difference = 1
    operator_f = ""
    final_1 = ""
    final_2 = ""
    answer = ""
}
