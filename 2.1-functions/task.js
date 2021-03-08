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

}

function getAverageMark(marks) {      // вычисляет среднее значение массива
 

	marks = {
		firstLesson: "algebra",
		marksAlgebra: [],          // тут считается средняя оценка

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



 for (let i = 0, i < marks.length, i++) {
 		let average += marks[i] / marks.length;
	}

if (marks.length == 0) {
	average = 0;
 }
}















function getPersonData(secretData) {
	// body...
}

function getDecodedValue(secret) {
	
}
