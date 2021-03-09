"use strict";

function getSolutions(a, b, c) {
	
	let D = b ** 2 - 4 * a * c;

	if (D < 0) {
		return {"D: ${D}, \nroots: []"};
	} else if (D == 0) {
		 let x1 = -b / 2 * a;
		 return {"D: ${D}, \nroot: ${x1}"};
	} else {
		  let xOne = (-b + Math.sqrt(D)) / 2 * a;
		  let xTwo = (-b - Math.sqrt(D)) / 2 * a;
		  return {"D: ${D}, \nroots: ${xOne}, ${xTwo}"};
	}
}

function showSolutionsMessage(a, b, c) {

	let result = getSolutions(a, b, c); //Функциональное выражение
	result.discriminant = D;
	result.x1 = x1;
	result.xOne = xOne;
	result.xTwo = xTwo;

	console.log("Вычисляем корни квадратного уравнения " + a + "x² + " + b + "x + " + c);
	console.log("Значение дискриминанта: " + result.discriminant);

	if (D < 0) {
		return ("Уравнение не имеет вещественных корней");
	} else if (D == 0) {
		 return ("Уравнение имеет один корень X₁ = " + result.x1);
	} else {
		  return ("Уравнение имеет два корня. X₁ = " + result.xOne + ", X₂ = " + result.xTwo);
	}
}



function getAverageScore(data) {   //данные об оценках по предметам
	
	data = {
		firstLesson: "algebra",
		marksAlgebra: [],         // тут просто заполняется массив

		secondLesson: "geometry",
		marksGeometry: [],

		thirdLesson: "russian",
		marksRussian: [],

		fourthLesson: "physics",
		marksPhysics: [],

		fifthLesson: "music",
		marksMusic: [],

		sixthLesson: "english",
		marksEnglish: [],

		seventhLesson: "poetry",
		marksPoetry: [],

		eighthLesson: "chemistry",
		marksChemistry: [],

		ninthLesson: "french",
		marksFrench: [],

		tenthLesson: "programming",
		marksProgramming: []

	};

	for (let property in data) {
		let value = data[property];
		console.log("${value}: ${value}");		//иначе можно было бы в свойства записать нечётную длину, а в значения - чётную
	}
}

function getAverageMark(marks) {      // вычисляет среднее значение массива

	let outcome = getAverageScore(data);
	outcome.data = data;

	for (let prop in outcome.data) {  //цикл for in так же перебирает свойства в объекте data
		let val = outcome.data[prop];
										// не понимаю как рационально посчитать среднее значение для каждого массива с оценками
	}

	let average = {
	propertyAverage: "average",
	valueAverage: []					//усреднённый массив с массивами всех оценок
	}

	outcome.data.push(average);

}












function getPersonData(secretData) {
	// expect...
}

function getDecodedValue(secret) {
	
}
