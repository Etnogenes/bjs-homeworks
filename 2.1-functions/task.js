"use strict";
//Задача 1
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
		 return ("Уравнение имеет один корень X₁ = " + result.root);
	} else {
		  return ("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", X₂ = " + result.roots[1]);
	}
}



//Задача 2
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

function getAverageScore(data) {   


	for (let subject in data) {
		let marks = data[subject];
		console.log(subject + ": " + marks);
	}
return {subject: marks};
}


function getAverageMark(marks) {      

	let result = getAverageScore(data);

	let average = 0;
		for (let i=0; i < result.marks.length; i++) {
		 average += result.marks[i];
		}

	let summary = average / result.marks.length;

return summary = result.marks;
}













//Задача 3

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
