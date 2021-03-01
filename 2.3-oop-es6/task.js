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
		this.newState = state * 1.5;
	}

	set repareState(newState) {
		if (newState <= 0) {
			this.state = 0;
		} else if (newState > 100) {
			this.state = 100;
		} else {
			this.state = newState;
		}
	}

	get repareState() {
		return this.repareState;
	}
}

class Magazine extends PrintEditionItem{
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "magazine";
	}

}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type, author) {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "book";
		this.author = author;
	}

}

class NovelBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "novel";
	}

}

class FantasticBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "fantastic";
	}

}

class DetectiveBook extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name);
		super(releaseDate);
		super(pagesCount);
		super(state);
		this.type = "detective";
	}

}



// Задача 2



// Задача 3