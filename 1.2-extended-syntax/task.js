function getResult(a,b,c){
    "use strict";
    let one = a;
    let two = b;
    let three = c;
    let D = two ** 2 - 4 * one * three;
    let firstX = (-two + D ** (1 / 2)) / 2 * one;
    let secondX = (-two - D ** (1 / 2)) / 2 * one;
	let arrayX = [firstX, secondX];

   	if (D < 0) {
   	 arrayX = "Уравнение имеет только мнимые корни";
 	} else if (one == 0 && two == 0 && three == 0) {
	  arrayX = "{-∞ ; +∞}";
	} else if (D == 0) {
       arrayX = (-two) / 2 * one;	 
	} else {
	    return arrayX;
	}
return arrayX;
}

function getAverageMark(marks){
	"use strict";

    let appraisals = marks;
    let arrayMarks = [appraisals];
	let result = (arrayMarks[0] + arrayMarks[1] + arrayMarks[2] + arrayMarks[3] + arrayMarks[4]) / 5;

	if (arrayMarks.length == 0) {
		result = "0";
	} else if (arrayMarks.length > 5) {
		 let arrayMarksTwo = arrayMarks.slice(0, 5);
		 console.log(marks);
		 return result;
	} else {
		  return result;
	}

return result;
}

function askDrink(name,dateOfBirthday){
	"use strict";

    // код для задачи №3 писать здесь
    // return result;
}