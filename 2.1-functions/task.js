"use strict";

function getSolutions(a, b, c) {
	
	let D = b ** 2 - 4 * a * c;

	if (D < 0) {
		return {D: D};
	} else if (D == 0) {
		 let x1 = -b / 2 * a;
		 return {D: D, root: [x1]};
	} else {
		  let xOne = (-b + Math.sqrt(D)) / 2 * a;
		  let xTwo = (-b - Math.sqrt(D)) / 2 * a;
		  return {D: D, roots: [xOne, xTwo]};
	}
}

function showSolutionsMessage(a, b, c) {

	let result = getSolutions(a, b, c); 

	console.log("Вычисляем корни квадратного уравнения " + a + "x² + " + b + "x + " + c);
	console.log("Значение дискриминанта: " + result.D);

	if (result.D < 0) {
		return ("Уравнение не имеет вещественных корней");
	} else if (result.D == 0) {
		 return ("Уравнение имеет один корень X₁ = " + result.x1);
	} else {
		  return ("Уравнение имеет два корня. X₁ = " + result.xOne + ", X₂ = " + result.xTwo);
	}
}



function getAverageScore(data) {   
	
	data = {
		algebra: [3, 4, 5, 4, 4],
		
		geometry: [3, 4, 3],
		
		russian: [4, 5, 5],
		
		physics: [3, 5, 5],
		
		music: [3, 4, 5],
		
		english: [3, 4, 5],
		
		poetry: [3, 4, 4],
		
		chemistry: [4, 5, 4],
		
		french: [3, 4, 4, 4, 3],
		
		programming: [5, 5, 4]
		
	};

	for (let subject in data) {
		let array = data[subject];
		console.log(subject: array);

		
	}



}

function getAverageMark(marks) {      

let average = 0;
	for (let i=0; i < marks.length; i++) {
	 average += marks[i];
	}
	let summary = average / marks.length;


}












function getPersonData(secretData) {
	
let rodrigo = {
	firstName: "Rodrigo",
	lastName: "Rodrigo"
}

let emilio = {
	firstName: "Emilio",
	lastName: "Emilio"
}

	secretData = {
		aaa: 0,
		bbb: 1
	}


for (let first in rodrigo) {
	let name = rodrigo[first];
	return {firstName: first, lastName: name}
}


}

function getDecodedValue(secret) {
	


}
