"use strict";

//Задача 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() { //Возвращает имена всех оружий
	const names = weapons.filter(weapon => weapon.name);
	console.log(names);
}

function getCountReliableWeapons(reliable) { // Принимает значение прочности, возвращает кол-во оружий больше принимаемой прочности
	const reliables = weapons.filter(weapon => weapon.reliable > reliable);
	console.log(reliables.length);
}

function hasReliableWeapons(reliable) {		// Принимает значение прочности, возвращает: есть ли оружия прочней принимаемой прочности
	const reliables = weapons.filter(weapon => weapon.reliable > reliable);
	console.log(reliables);
}

function getReliableWeaponsNames(reliable) {	// Принимает значение прочности и возвращает имена оружий, прочней полученного значение
	const reliables = weapons.filter(weapon => weapon.reliable > reliable);
	console.log(reliables.name);
}

function getTotalDamage() {		// Возвращает общую сумму урона всех оружий
	const generalDamage = weapons.reduce((acc, weapon) => acc + weapon.damage, 0);
	console.log(generalDamage);
}




//Не обязательно
function getValuestCountToSumValues() {

}





// Задача 2




