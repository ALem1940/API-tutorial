import pets from "../data.json";

function sayLength(size) {
	 console.log("This cat measures " + size + ".");
}

sayLength("12 to 16 inches");
sayLength("15 to 20 inches");
sayLength("30 to 40 inches");


function describe(pet) {
	 console.log(pet.name + " comes from " + pet.origin + ".");
}

describe(pets[0]);
describe(pets[1]);
describe(pets[2]);

function sayOrigin(home) {
	console.log(home.origin + " is home to " + home.name + ".");
}

sayOrigin(pets[0]);
sayOrigin(pets[1]);
sayOrigin(pets[2]);

