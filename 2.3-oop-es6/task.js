"use strict";
// Задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state * 1.5;
	}

	set state(newState) {
		if (newState <= 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}

}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type, author) {
		super(name, releaseDate, pagesCount, state);
		this.type = "book";
		this.author = author;
	}

}

class NovelBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "novel";
	}

}

class FantasticBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}

}

class DetectiveBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "detective";
	}

}


// Задача 2
class Library {
	constructor(name = String, books = []){
		this.name = name;
		this.books = books;
	}


addBook(book) {

}

findBookBy(type, value) {

}

giveBookByName(bookName) {

}

}


//Задача 3
class StudentLog {
	constructor() {
		this.scores = [];
		let log = new StudentLog("Олег Никифоров");
	}

getName(log) {
	console.log(log.getName());
}

addGrade(grade, subject) {
	this.scores.push(grade);
}

getAverageBySubject(subject) {

}

getTotalAverage() {

}

}



