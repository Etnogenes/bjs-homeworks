"use strict";

function getResult(a,b,c){

	let arrayX = [];
	let D = b ** 2 - 4 * a * c;

   	if (D == 0) {
   		arrayX = [-b / 2 * a];
   	}
   	if (D > 0) {
   		arrayX = [(-b + Math.sqrt(D)) / 2 * a, (-b - Math.sqrt(D)) / 2 * a];
   	}

return arrayX;
}

function getAverageMark(marks){
   
    let result = 0;


	if (marks.length == 0) {
		result = 0;
	} else if (marks.length > 5) {
		 marks = marks.slice(0, 5);
	} else {
		  for (let i = 0; i < marks.length; i++) {
		  	let result += marks[i] / marks.length;
		  }
	}
	

return result;
}

function askDrink(name,dateOfBirthday){

		if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
		return (`Не желаете ли олд-фэшн, ${name}?`);
		} else {
		 return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
		}
}

