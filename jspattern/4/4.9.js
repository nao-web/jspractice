function addPerson(first, last) {...}

function addPerson(first, last, dob, gender, address) {...}

addPerson("Bruce", "Wayne", new Date(), null, null, "batman");

addPerson(conf);

var conf = {
	username: "batman",
	first: "Bruce",
	last: "Wayne"
};
addPerson(conf);