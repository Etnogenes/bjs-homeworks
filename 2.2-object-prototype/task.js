"use strict";
/*
let text = {
	string: "palindrome",
} ;

function isPalindrome() {

}
isPalindrome.prototype = text;

//String.prototype.isPalindrome - для задачи №1

*/


function getAverageMark(marks) {

	let arrayMarks = [marks];
	let average = 0;
	for (let i=0; i < arrayMarks.length; i++) {
	 average += arrayMarks[i] / arrayMarks.length;
	}
	
	let roundedAverage = Math.round(average);

return roundedAverage;
}




function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}