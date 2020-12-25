"use strict";

function getResult(a,b,c){

    let D = b ** 2 - 4 * a * c;
    let firstX = (-b + Math.sqrt(D)) / 2 * a;
    let secondX = (-b - Math.sqrt(D)) / 2 * a;
	let arrayX = [firstX, secondX];

   	if (D < 0) {
   	 arrayX.splice(0, 2, "Уравнение имеет только мнимые корни");
 	} else if (a == 0 && b == 0 && c == 0) {
	  arrayX.splice(0, 2, "{-∞ ; +∞}");
	} else if (D == 0) {
       arrayX.splice(0, 2, ((-b) / 2 * a));	 
	} else {
	    return arrayX;
	}

return arrayX;
}

function getAverageMark(marks){
   
    let arrayMarks = [marks];
	let result = 0;

	if (arrayMarks.length == 0) {
		return result;
	} else if (arrayMarks.length > 5) {
		 let arrayMarksTwo = arrayMarks.slice(0, 5);
		 for (let i = 0; i < 5; i++) {
		  result += arrayMarksTwo[i] / 5;
		}
	} else (arrayMarks.length < 5) {
		  for (let i = 0; i < arrayMarks.length; i++) {
		    result += arrayMarks[i] / arrayMarks.length;
		}
	}

return result;
}

function askDrink(name,dateOfBirthday){
	

    // код для задачи №3 писать здесь
    // return result;
}