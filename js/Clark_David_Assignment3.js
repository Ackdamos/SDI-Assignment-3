/* David Clark
   07/19/12
   Assignment 3
   Placeholder text for now.
*/

// Nested Loop is a loop inside of a loop.

var tempString = "This is just temporary.",
	goodReport = "Keep up the good work soldier!",
	badReport = "Your all kinds of messed up!"
	weaponCount = 20,
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

var key = "name";
for (var key in soldier) {
	console.log(key + " = " + soldier[key]);
}

var officer = {
	name: "John Williams",
	age: 38,
	rank: "Captain",
	leader: true,
	countWeapons: function () {
		while (weaponCount > 0) {
		console.log("There are " + weaponCount + " weapons left.");
		weaponCount--;
		}
		console.log("All weapons are accounted for.");
	}
};

var goLeader = officer.countWeapons();

// for (var i = 0; i <= 20; i++) {
//		console.log("You " + i + " soldiers are platoon 1.");
//		} 