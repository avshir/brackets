module.exports = function check(str, bracketsConfig) {
	// решается на основе стека https://www.youtube.com/watch?v=TqlSlaMak8Y
	let stack = [];
	let topElem;
	
	for (let i = 0; i < str.length; i++){
		let currentBracket = str[i];
		if (bracketsConfig[0][0] === currentBracket) {
			stack.push(currentBracket);
		} else {
			if (stack.length === 0) {
				return false;
			}			
			topElem = stack[stack.length - 1];
			if (bracketsConfig[0][1] === topElem) {
				stack.pop()
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}
