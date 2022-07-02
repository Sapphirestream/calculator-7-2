const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);


	// console.log(tokens)

	// console.log('mathSymbol', mathSymbol);
	// console.log('num1', num1);
	// console.log('num2', num2);

	// ---------- addition -------------//
	if (mathSymbol==="+"){
		const sum = num1 + num2;
		console.log("sum:",sum);
	}

	if (mathSymbol==="-"){
		const diff = num1 - num2;
		console.log("difference:", diff);
	}

	if (mathSymbol==="/"){
		const quotient = num1 / num2;
		console.log("quotient:", quotient);
	}

	if (mathSymbol==="*"){
		const product = num1 / num2;
		console.log("product:", product);
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
