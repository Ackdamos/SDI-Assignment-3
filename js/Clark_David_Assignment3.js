/* David Clark
   07/19/12
   Assignment 3
   Placeholder text for now.
*/

var tempString = "This is just temporary.",
	goodReport = "Keep up the good work soldier!",
	badReport = "Your all kinds of messed up!"
	tempNumber = 11,
	tempArray = [
		"Temporary",
		"Array",
		"Placeholders",
		"Here"
	]
;

var soldier = {
	name: "David Clark",
	age: 24,
	rank: "Corporal",
	duty: true,
	qualifications: [
		"Expert Marksman",
		"Targets hit:" + 38 + " out of " + 40,
		"Demolition Qualified = " + true
	],
	giveReport: function () {
		if (soldier.duty === true) {
		return goodReport;
		} else {
		return badReport;
		}
	}
	
};

var report = soldier.giveReport();
console.log(report);

soldier.deployed = false;
console.log(soldier);