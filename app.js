var add = function (a, b, showResult, resultPhrase) {
    var result = a + b;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
};
var num1 = 5;
var num2 = 6;
var printResult = true;
var resultPhrase = 'The result is: ';
add(num1, num2, printResult, resultPhrase);
