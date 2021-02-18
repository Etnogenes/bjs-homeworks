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
	 average += marks[i] / marks.length;
	}
	
	let roundedAverage = Math.round(average);

return roundedAverage;
}




function checkBirthday(birthday) {
	
	if ((Data.now() - birthday.getMilliseconds()) / /*количество миллисекунд в году */ >= 18) {
	return (`Не желаете ли олд-фэшн, Аноним?`);
	} else {
	 return (`Сожалею, но я не могу вам продать алкоголь.`);
	}
}


