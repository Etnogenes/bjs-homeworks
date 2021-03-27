"use strict";

//Задача 1

function parseCount(value) {
	let num = Number.parseInt(value);

	if (num == NaN) {
		let error = new Error("Невалидное значение");
		throw error;
	}

	return num;
}

function validateCount(value) {

	try {
		let nextNum = parseCount(value);
	} catch(e) {
		console.log("Невалидное значение");
	}	
}


//Задача 2

class Triangle {
	constructior(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c) {
		let mistake = new Error("Треугольник с такими сторонами не существует");
		throw mistake;
		}	
	}


	getPerimetr() {
		return (a + b + c);
	}

	getArea() {
		let p = (a + b + c) / 2;
		let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
		return (+S.toFixed(3));
	}
}
	

function getTriangle(a, b, c) {

	try {
	let triangle = new Triangle(a, b, c);
	} catch(e) {
		return {
			getPerimetr: "Ошибка! Треугольник не существует",
			getArea: "Ошибка! Треугольник не существует"
		}
	}
}