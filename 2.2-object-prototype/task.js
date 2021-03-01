"use strict";

let text = {
	string: "palindrome",
} ;

function isPalindrome(sumbols) {
	 this.sumbols = sumbols;
}

isPalindrome.prototype = text;

let palindrome = new isPalindrome("А роза упала на лапу Азора");



String.prototype.isPalindrome;




function getAverageMark(marks) {

	let average = 0;
	for (let i=0; i < marks.length; i++) {
	 average += marks[i];
	}
	let summary = average / marks.length;
	let roundedAverage = Math.round(summary);

return roundedAverage;
}




function checkBirthday(birthday) {
	
	let age = (Data.now() - birthday.getMilliseconds()) / 1000 * 60 * 60 * 24 * 365.25;
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
}


