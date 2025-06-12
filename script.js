const makeChange = (c) => {
  // your name here
	let change = {
		q:0,
		d:0,
		n:0,
		p:0
	}

	change.q = Math.floor(amount/25);
	amount %= 25;

	change.d = Math.floor(amount/10);
	amount %= 10;

	change.n = Math.floor(amount/5);
	amount %= 5;

	change.q = amount;

	return change;
};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
