module.exports = function check(str, bracketsConfig) {
	// решается на основе стека https://www.youtube.com/watch?v=TqlSlaMak8Y
	let stack = [];
	let openBrackets = [];

	let pairOk = {};
	for (let i = 0; i < bracketsConfig.length; i++){
		pairOk[bracketsConfig[i][1]] = bracketsConfig[i][0];
		openBrackets.push(bracketsConfig[i][0]);
	}
	console.log(pairOk);
	console.log(openBrackets);
	
	for (let i = 0; i < str.length; i++){
		let currentBracket = str[i];

		// for (let j = 0; j < bracketsConfig.length; j++){
		if (openBrackets.includes(currentBracket) ) {
			stack.push(currentBracket);
			// if (currentBracket === stack[stack.length - 1 - 1] && currentBracket === stack[stack.length - 1] && pairOk[currentBracket] === currentBracket) {
			// 	stack.pop().pop();
			// }
			//console.log(stack, 'this is stack');
			} else {
				if (stack.length === 0) {
					return false;
			}
			
				let topElem = stack[stack.length - 1];
				// console.log(topElem);
				// console.log(currentBracket);
				// console.log(pairOk[currentBracket]);
			
				if (pairOk[currentBracket] === topElem) {
					stack.pop();
					//console.log(stack, 'this is stack after pop()');
				} else {
					return false;
				}
			}
		// }	
	}

	return stack.length === 0;
}
