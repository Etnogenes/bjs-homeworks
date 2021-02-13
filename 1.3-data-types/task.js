"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
	let totalMonth = date.getMonth() - new Date.getMonth();
	let bodyCredit = amount - contribution;
	let monthPay = bodyCredit * ((percent / 12) + (percent / 12) / (((1 + (percent / 12)) ** totalMonth) - 1)) ;
	let totalSum = Math.floor(monthPay * totalMonth * 100) / 100; // Я специально избегаю toFixed()

    return totalSum;
}


function getGreeting(name) {
    return (`Привет, мир! Меня зовут ${name || "Аноним"}.`);
}