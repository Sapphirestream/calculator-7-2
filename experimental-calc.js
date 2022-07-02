const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];

    const number = [];

    for (let i = 1; i < tokens.length; i++){
        number[i-1] = Number(tokens[i]);
    }

	 //console.log(number)

    // ----------MATH -------------//

     if (mathSymbol==="+"){

        let sum = 0;

        for (let i = 0; i < number.length; i++){
            sum = sum + number[i];
        }
		console.log("sum:",sum);
	}


	 if (mathSymbol==="-"){

        let diff = number[0];

        for (let i = 1; i < number.length; i++){
            diff = diff - number[i];
        }

	 	console.log("difference:", diff);
	 }


     if (mathSymbol==="/"){

        let quote = number[0];

        for (let i = 1; i < number.length; i++){
            quote = quote / number[i];
        }

	 	console.log("quotient:", quote);
	 }

     if (mathSymbol==="*"){

        let product = 1;

        for (let i = 0; i < number.length; i++){
            product = product * number[i];
        }
		console.log("product:", product);
	}


	 if (mathSymbol==="√"){

        let sqrt = [];

        for (let i = 0; i < number.length; i++){       
	 	 sqrt[i] = Math.sqrt(number[i]);}

	 	console.log("square roots:", sqrt);
	 }


	// This line closes the connection to the command line interface.
	reader.close()

});