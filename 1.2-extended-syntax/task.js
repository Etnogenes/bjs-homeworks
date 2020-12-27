"use strict";

function getResult(a,b,c){

    let D = b ** 2 - 4 * a * c;

   	if (D < 0) {
   	 arrayX = [];
	} else if (D == 0) {
       arrayX = [(-b) / 2 * a];	 
	} else {
	    return arrayX;
	}

    let firstX = (-b + Math.sqrt(D)) / 2 * a;
    let secondX = (-b - Math.sqrt(D)) / 2 * a;
	let arrayX = [firstX, secondX];

return arrayX;
}

function getAverageMark(marks){
   
    	let result = 0;

	if (marks.length == 0) {
		return result;
	} else if (marks.length > 5) {
		 let marksTwo = marks.slice(0, 5);
	} else (marks.length <= 5) {
		  for (let i = 0; i < marks.length; i++) {
		    result += marks[i] / marks.length;
		}
	}

return result;
}

function askDrink(name,dateOfBirthday){

	let dataNow = new Date();
	let yearNow = dataNow.getFullYear();	
	let ageVisitor = dateOfBirthday.getFullYear();
	let result = yearNow - ageVisitor;

		if (result >= 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
		} else {
		 result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
		}

return result;
}

